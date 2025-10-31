import React from 'react'
import {
    Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const Questions = () => {

    const FAQData = [
  {
    id:1,
    question: "What is this app about?",
    answer:
      "This app lets you create a single link that connects all your important links — like your portfolio, social media, and websites — into one clean, shareable bio page. Think of it as your personal mini-website.",
  },
  {
    id:2,
    question: "How do I create my bio link page?",
    answer:
      "After signing up, go to your dashboard and click 'Create Page'. You can add links, upload your profile image, edit your bio, and customize the theme to match your style.",
  },
  {
    id:3,
    question: "Can I customize the design?",
    answer:
      "Yes! You can choose from multiple themes, change colors, and even upload your background image. Premium users can unlock advanced customization and animation options.",
  },
  {
    id:4,
    question: "Can I track how many people clicked my links?",
    answer:
      "Absolutely. Each link includes real-time click tracking so you can see which links perform best. The analytics dashboard shows total clicks, top sources, and more.",
  },
  {
    id:5,
    question: "Is it free to use?",
    answer:
      "Yes, the basic plan is completely free. You can add up to 5 links and use the default themes. Our Pro plan offers unlimited links, analytics, custom domains, and more.",
  },
  {
    id:6,
    question: "Can I use my own custom domain?",
    answer:
      "Yes. With the Pro plan, you can connect your own domain (like myname.com) so your bio page looks more professional and personal.",
  },
  {
    id:7,
    question: "How do I share my bio link?",
    answer:
      "You’ll get a unique username URL like yourapp.com/yourname. You can copy it and add it to your Instagram bio, Twitter profile, TikTok, YouTube, or anywhere else.",
  },
  {
    id:8,
    question: "Do I need coding knowledge?",
    answer:
      "No coding required. Everything is drag-and-drop and editable right in your browser. You can build and publish your page in minutes.",
  },
  {
    id:9,
    question: "Can I schedule or hide links?",
    answer:
      "Yes! You can enable or disable links anytime, or schedule them to show up automatically at specific times — perfect for promotions or limited-time content.",
  },
  {
    id:10,
    question: "Is my data safe?",
    answer:
      "Yes, we take privacy seriously. Your data is encrypted, and we never share your information with third parties. You can delete your account anytime.",
  },
  {
    id:11,
    question: "How do I upgrade to Pro?",
    answer:
      "Go to your dashboard and click on 'Upgrade'. You'll be redirected to our secure payment system powered by Stripe.",
  },
  {
    id:12,
    question: "Can I add images or icons to my links?",
    answer:
      "Yes! You can add emojis, icons, to make your links more attractive and recognizable.",
  },
  {
    id:13,
    question: "Does it work on all devices?",
    answer:
      "Yes, your bio link page is fully responsive and looks perfect on mobile, tablet, and desktop devices.",
  },
  {
    id:14,
    question: "Can I see where clicks come from?",
    answer:
      "Yes, our analytics show where click come from what city names etc ",
  },
];

  return (


    <Accordion type="single" collapsible className='  '>
{FAQData.map((elem,i)=>(


    <AccordionItem key={i} value={'item'+i}>
    <AccordionTrigger className='text-2xl fontRecursive'>{elem.question}</AccordionTrigger>
    <AccordionContent>
    <p className='text-xl '>{elem.answer}</p>
    </AccordionContent>
    </AccordionItem>
))
}

      
    
    </Accordion>
  )
}

export default Questions