import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Blog from '../pages/Blog'
import BlogPost from '../components/Blog/BlogPost'
import Career from '../pages/Career'
import FAQs from '../pages/FAQs'
import NotFound from '../pages/NotFound'

import WebsiteDesign from '../pages/services/web/WebsiteDesign'
import WebDevelopment from '../pages/services/web/WebDevelopment'
import SoftwareDevelopment from '../pages/services/web/SoftwareDevelopment'
import MobileAppsDevelopment from '../pages/services/web/MobileAppsDevelopment'
import EcommerceWebDevelopment from '../pages/services/web/EcommerceWebDevelopment'
import WordpressWebDevelopment from '../pages/services/web/WordpressWebDevelopment'
import ReactjsDevelopment from '../pages/services/web/ReactjsDevelopment'
import NodejsDevelopment from '../pages/services/web/NodejsDevelopment'
import PHPDevelopment from '../pages/services/web/PHPDevelopment'
import AngularjsDevelopment from '../pages/services/web/AngularjsDevelopment'
import AspNetDevelopment from '../pages/services/web/AspNetDevelopment'
import CRMSolutions from '../pages/services/web/CRMSolutions'
import LandingPageDesigning from '../pages/services/web/LandingPageDesigning'
import WebsiteRedesigning from '../pages/services/web/WebsiteRedesigning'
import Web20Design from '../pages/services/web/Web20Design'
import FlashDesign from '../pages/services/web/FlashDesign'
import PSDtoHTML from '../pages/services/web/PSDtoHTML'

import SEOServices from '../pages/services/seo/SEOServices'
import LocalSEO from '../pages/services/seo/LocalSEO'
import EcommerceSEO from '../pages/services/seo/EcommerceSEO'
import WhiteLabelSEO from '../pages/services/seo/WhiteLabelSEO'
import ORM from '../pages/services/seo/ORM'

import DigitalMarketing from '../pages/services/marketing/DigitalMarketing'
import SMM from '../pages/services/marketing/SMM'
import PPC from '../pages/services/marketing/PPC'
import MobileAppMarketing from '../pages/services/marketing/MobileAppMarketing'
import ContentMarketing from '../pages/services/marketing/ContentMarketing'
import ProgrammaticAdvertising from '../pages/services/marketing/ProgrammaticAdvertising'

import GraphicDesigning from '../pages/services/design/GraphicDesigning'
import UIUXDesigning from '../pages/services/design/UIUXDesigning'

import CorporateVideoEditing from '../pages/services/video/CorporateVideoEditing'
import ProductVideoEditing from '../pages/services/video/ProductVideoEditing'
import TestimonialVideoEditing from '../pages/services/video/TestimonialVideoEditing'

import WhiteLabelSMM from '../pages/services/white-label/WhiteLabelSMM'
import WhiteLabelPPC from '../pages/services/white-label/WhiteLabelPPC'
import WhiteLabelContentMarketing from '../pages/services/white-label/WhiteLabelContentMarketing'
import WhiteLabelLinkBuilding from '../pages/services/white-label/WhiteLabelLinkBuilding'

import AIAutomation from '../pages/services/ai/AIAutomation'
import AIChatbotDevelopment from '../pages/services/ai/AIChatbotDevelopment'
import AICustomerSupportAutomation from '../pages/services/ai/AICustomerSupportAutomation'
import AILeadGenerationAutomation from '../pages/services/ai/AILeadGenerationAutomation'
import AIWhatsAppAutomation from '../pages/services/ai/AIWhatsAppAutomation'
import AIEmailAutomation from '../pages/services/ai/AIEmailAutomation'
import AICRMAutomation from '../pages/services/ai/AICRMAutomation'
import AIWorkflowAutomation from '../pages/services/ai/AIWorkflowAutomation'
import AIVoiceAgents from '../pages/services/ai/AIVoiceAgents'
import AISocialMediaAutomation from '../pages/services/ai/AISocialMediaAutomation'
import CustomAISolutions from '../pages/services/ai/CustomAISolutions'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:id', element: <BlogPost /> },
  { path: '/career', element: <Career /> },
  { path: '/contact', element: <Contact /> },
  { path: '/faqs', element: <FAQs /> },

  { path: '/services/website-design', element: <WebsiteDesign /> },
  { path: '/services/web-development', element: <WebDevelopment /> },
  { path: '/services/software-development', element: <SoftwareDevelopment /> },
  { path: '/services/mobile-apps-development', element: <MobileAppsDevelopment /> },
  { path: '/services/ecommerce-web-development', element: <EcommerceWebDevelopment /> },
  { path: '/services/wordpress-development', element: <WordpressWebDevelopment /> },
  { path: '/services/reactjs-development', element: <ReactjsDevelopment /> },
  { path: '/services/nodejs-development', element: <NodejsDevelopment /> },
  { path: '/services/php-development', element: <PHPDevelopment /> },
  { path: '/services/angularjs-development', element: <AngularjsDevelopment /> },
  { path: '/services/asp-net-development', element: <AspNetDevelopment /> },
  { path: '/services/crm-solutions', element: <CRMSolutions /> },
  { path: '/services/landing-page-designing', element: <LandingPageDesigning /> },
  { path: '/services/website-redesigning', element: <WebsiteRedesigning /> },
  { path: '/services/web-2-0-design', element: <Web20Design /> },
  { path: '/services/flash-design', element: <FlashDesign /> },
  { path: '/services/psd-to-html', element: <PSDtoHTML /> },

  { path: '/services/seo', element: <SEOServices /> },
  { path: '/services/local-seo', element: <LocalSEO /> },
  { path: '/services/ecommerce-seo', element: <EcommerceSEO /> },
  { path: '/services/white-label-seo', element: <WhiteLabelSEO /> },
  { path: '/services/orm', element: <ORM /> },

  { path: '/services/digital-marketing', element: <DigitalMarketing /> },
  { path: '/services/smm', element: <SMM /> },
  { path: '/services/ppc', element: <PPC /> },
  { path: '/services/mobile-app-marketing', element: <MobileAppMarketing /> },
  { path: '/services/content-marketing', element: <ContentMarketing /> },
  { path: '/services/programmatic-advertising', element: <ProgrammaticAdvertising /> },

  { path: '/services/graphic-designing', element: <GraphicDesigning /> },
  { path: '/services/ui-ux-designing', element: <UIUXDesigning /> },

  { path: '/services/corporate-video-editing', element: <CorporateVideoEditing /> },
  { path: '/services/product-video-editing', element: <ProductVideoEditing /> },
  { path: '/services/testimonial-video-editing', element: <TestimonialVideoEditing /> },

  { path: '/services/white-label-smm', element: <WhiteLabelSMM /> },
  { path: '/services/white-label-ppc', element: <WhiteLabelPPC /> },
  { path: '/services/white-label-content-marketing', element: <WhiteLabelContentMarketing /> },
  { path: '/services/white-label-link-building', element: <WhiteLabelLinkBuilding /> },

  { path: '/services/ai-automation', element: <AIAutomation /> },
  { path: '/services/ai-chatbot-development', element: <AIChatbotDevelopment /> },
  { path: '/services/ai-customer-support-automation', element: <AICustomerSupportAutomation /> },
  { path: '/services/ai-lead-generation-automation', element: <AILeadGenerationAutomation /> },
  { path: '/services/ai-whatsapp-automation', element: <AIWhatsAppAutomation /> },
  { path: '/services/ai-email-automation', element: <AIEmailAutomation /> },
  { path: '/services/ai-crm-automation', element: <AICRMAutomation /> },
  { path: '/services/ai-workflow-automation', element: <AIWorkflowAutomation /> },
  { path: '/services/ai-voice-agents', element: <AIVoiceAgents /> },
  { path: '/services/ai-social-media-automation', element: <AISocialMediaAutomation /> },
  { path: '/services/custom-ai-solutions', element: <CustomAISolutions /> },

  { path: '*', element: <NotFound /> },
]

export default routes
