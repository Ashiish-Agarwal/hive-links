import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link2, Package, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GetProductValue } from '@/actions/read';


export default function DashboardStats() {


const ff= GetProductValue()
const count = parseInt(ff?.toString() || '0')


  const stats = {
    totalLinks: 24,
    totalProducts: count,
    maxProducts: 2,
    totalUsers: 1,
    recentActivity: [
      { type: 'link', name: 'Instagram Profile', date: '2 hours ago' },
      { type: 'product', name: 'My Portfolio', date: '1 day ago' },
      { type: 'link', name: 'Twitter Account', date: '3 days ago' },
    ]
  };

  const productUsagePercentage = (stats.totalProducts / stats.maxProducts) * 100;
  const isProductLimitReached = stats.totalProducts >= stats.maxProducts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-600">Welcome back! Here's your overview</p>
        </div>

        {/* Product Limit Alert */}
        {isProductLimitReached && (
          <Alert className="border-amber-200 bg-amber-50">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              You've reached your product limit ({stats.maxProducts} products). Delete an existing product to create a new one.
            </AlertDescription>
          </Alert>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Links Card */}
          <Card className="border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Total Links
              </CardTitle>
              <Link2 className="h-5 w-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{stats.totalLinks}</div>
              <p className="text-xs text-slate-500 mt-2">
                Active links across all products
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-600">Link engagement</span>
                  <span className="text-slate-900 font-medium">High</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Products Card */}
          <Card className="border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Products Created
              </CardTitle>
              <Package className="h-5 w-5 text-indigo-600" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold text-slate-900">{stats.totalProducts}</div>
                <div className="text-sm text-slate-500">/ {stats.maxProducts}</div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Maximum products allowed
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-600">Usage</span>
                  <span className="text-slate-900 font-medium">{productUsagePercentage}%</span>
                </div>
                <Progress value={productUsagePercentage} className="h-2" />
              </div>
              {isProductLimitReached && (
                <Badge variant="secondary" className="mt-3 bg-amber-100 text-amber-800 border-amber-200">
                  Limit Reached
                </Badge>
              )}
            </CardContent>
          </Card>

          {/* Total Users Card */}
          <Card className="border-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">
                Active Users
              </CardTitle>
              <Users className="h-5 w-5 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">{stats.totalUsers}</div>
              <p className="text-xs text-slate-500 mt-2">
                Your account
              </p>
              <div className="mt-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-xs text-green-600 font-medium">
                  Active now
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      activity.type === 'link' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-indigo-100 text-indigo-600'
                    }`}>
                      {activity.type === 'link' ? (
                        <Link2 className="h-4 w-4" />
                      ) : (
                        <Package className="h-4 w-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{activity.name}</p>
                      <p className="text-xs text-slate-500">
                        {activity.type === 'link' ? 'Link added' : 'Product created'}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-500">{activity.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-4">
            <p className="text-sm text-slate-600">Avg. Links/Product</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              {stats.totalProducts > 0 ? (stats.totalLinks / stats.totalProducts).toFixed(1) : 0}
            </p>
          </Card>
          <Card className="text-center p-4">
            <p className="text-sm text-slate-600">Products Available</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">
              {stats.maxProducts - stats.totalProducts}
            </p>
          </Card>
          <Card className="text-center p-4">
            <p className="text-sm text-slate-600">Social Links</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">8</p>
          </Card>
          <Card className="text-center p-4">
            <p className="text-sm text-slate-600">Custom Themes</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">2</p>
          </Card>
        </div>
      </div>
    </div>
  );
}