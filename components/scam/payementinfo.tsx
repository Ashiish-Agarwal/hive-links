'use client'
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import Banner from '../banner';
import { redirect } from 'next/navigation';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
  accountNumber: z.string().optional(),
  ifscCode: z.string().optional(),
  bankName: z.string().optional(),
  upiId: z.string().optional(),
  iban: z.string().optional(),
  swiftCode: z.string().optional(),
  country: z.string().optional(),
  paypalEmail: z.string().optional()
}).superRefine((data, ctx) => {
  if (data.paymentMethod === 'bank') {
    if (!data.accountNumber || data.accountNumber.length < 9) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Account number must be at least 9 digits',
        path: ['accountNumber']
      });
    }
    if (!data.ifscCode || !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(data.ifscCode)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid IFSC code format (e.g., SBIN0001234)',
        path: ['ifscCode']
      });
    }
    if (!data.bankName || data.bankName.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Bank name is required',
        path: ['bankName']
      });
    }
  }
  if (data.paymentMethod === 'upi') {
    if (!data.upiId || !/^[\w.-]+@[\w.-]+$/.test(data.upiId)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid UPI ID format (e.g., name@paytm)',
        path: ['upiId']
      });
    }
  }
  if (data.paymentMethod === 'international') {
    if (!data.country || data.country.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Country is required',
        path: ['country']
      });
    }
    if (!data.iban || data.iban.length < 15) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid IBAN/Account number (min 15 characters)',
        path: ['iban']
      });
    }
    if (!data.swiftCode || !/^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(data.swiftCode)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid SWIFT/BIC code format',
        path: ['swiftCode']
      });
    }
  }
  if (data.paymentMethod === 'paypal') {
    if (!data.paypalEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.paypalEmail)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Invalid PayPal email address',
        path: ['paypalEmail']
      });
    }
  }
});

export default function PaymentInfoForm() {
  const [submitted, setSubmitted] = useState(false);

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      paymentMethod: '',
      accountNumber: '',
      ifscCode: '',
      bankName: '',
      upiId: '',
      iban: '',
      swiftCode: '',
      country: '',
      paypalEmail: ''
    }
  });

  const paymentMethod = watch('paymentMethod');

 const onSubmit = () => {
  setSubmitted(true);
  console.log('submitted');

  setTimeout(() => {
    setSubmitted(false);
     redirect('/dashboard');
}, 3000);
};

  return (
    <>
      <Banner/>
    <div style={{ background: '#FFFAEC' }} className="min-h-screen p-4 md:p-8">
      

      <Card className="max-w-2xl mx-auto bg-white text-black">
        <CardHeader>
          <CardTitle className="text-2xl">Claim Your $50 Reward</CardTitle>
          <CardDescription>
            Enter your payment details to receive your reward after New Year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              
              <div className="space-y-2">
                <Label>Full Name *</Label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => <Input placeholder="John Doe" {...field} />}
                />
                {errors.fullName && <p className="text-sm text-red-600">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>Email Address *</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input type="email" placeholder="john@example.com" {...field} />}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>Phone Number *</Label>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />}
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Payment Method</h3>
              
              <div className="space-y-2">
                <Label>Select Payment Method *</Label>
                <Controller
                  name="paymentMethod"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Account (India)</SelectItem>
                        <SelectItem value="upi">UPI (India)</SelectItem>
                        <SelectItem value="international">International Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.paymentMethod && <p className="text-sm text-red-600">{errors.paymentMethod.message}</p>}
              </div>
            </div>

            {paymentMethod === 'bank' && (
              <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium">Bank Account Details</h4>
                
                <div className="space-y-2">
                  <Label>Account Number *</Label>
                  <Controller
                    name="accountNumber"
                    control={control}
                    render={({ field }) => <Input placeholder="1234567890" {...field} />}
                  />
                  {errors.accountNumber && <p className="text-sm text-red-600">{errors.accountNumber.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>IFSC Code *</Label>
                  <Controller
                    name="ifscCode"
                    control={control}
                    render={({ field }) => <Input placeholder="SBIN0001234" {...field} />}
                  />
                  {errors.ifscCode && <p className="text-sm text-red-600">{errors.ifscCode.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Bank Name *</Label>
                  <Controller
                    name="bankName"
                    control={control}
                    render={({ field }) => <Input placeholder="State Bank of India" {...field} />}
                  />
                  {errors.bankName && <p className="text-sm text-red-600">{errors.bankName.message}</p>}
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="space-y-4 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium">UPI Details</h4>
                
                <div className="space-y-2">
                  <Label>UPI ID *</Label>
                  <Controller
                    name="upiId"
                    control={control}
                    render={({ field }) => <Input placeholder="yourname@paytm" {...field} />}
                  />
                  {errors.upiId && <p className="text-sm text-red-600">{errors.upiId.message}</p>}
                </div>
              </div>
            )}

            {paymentMethod === 'international' && (
              <div className="space-y-4 p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium">International Bank Details</h4>
                
                <div className="space-y-2">
                  <Label>Country *</Label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => <Input placeholder="United States" {...field} />}
                  />
                  {errors.country && <p className="text-sm text-red-600">{errors.country.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>IBAN / Account Number *</Label>
                  <Controller
                    name="iban"
                    control={control}
                    render={({ field }) => <Input placeholder="GB29NWBK60161331926819" {...field} />}
                  />
                  {errors.iban && <p className="text-sm text-red-600">{errors.iban.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>SWIFT/BIC Code *</Label>
                  <Controller
                    name="swiftCode"
                    control={control}
                    render={({ field }) => <Input placeholder="NWBKGB2L" {...field} />}
                  />
                  {errors.swiftCode && <p className="text-sm text-red-600">{errors.swiftCode.message}</p>}
                </div>
              </div>
            )}

            {paymentMethod === 'paypal' && (
              <div className="space-y-4 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium">PayPal Details</h4>
                
                <div className="space-y-2">
                  <Label>PayPal Email *</Label>
                  <Controller
                    name="paypalEmail"
                    control={control}
                    render={({ field }) => <Input type="email" placeholder="your.paypal@email.com" {...field} />}
                  />
                  {errors.paypalEmail && <p className="text-sm text-red-600">{errors.paypalEmail.message}</p>}
                </div>
              </div>
            )}

            {submitted && (
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  ✅ Success! Your payment information has been submitted. You will receive $50 after New Year!
                </AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={()=>onSubmit()}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              {`${submitted ? "Submitting..." : "Submit & Claim Reward"}`}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}