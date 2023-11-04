import React from "react";
import psImg1 from "../../assets/play-store-3.png";
import psImg2 from "../../assets/play-store-4.png";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Footer.css";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';



import img1 from "../../assets/footer-1.jpg";
import img2 from "../../assets/footer-2.jpg";
import img3 from "../../assets/footer-3.jpg";
import img4 from "../../assets/footer-4.jpg";
import img5 from "../../assets/footer-5.jpg";
import img6 from "../../assets/footer-6.jpg";
import img7 from "../../assets/footer-7.jpg";
import img8 from "../../assets/job.jpg";
import img9 from "../../assets/beyoung-cover.jpg";
import img10 from "../../assets/collab-1.jpg"
import img11 from "../../assets/collab-2.jpg"
import img12 from "../../assets/collab-3.jpg"
import img13 from "../../assets/collab-4.jpg"
import img14 from "../../assets/collab-5.png"


import { useScreenSize } from "../CommonFunctions/CommonFunctions";

const Footer = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const handlerSiteMap = () => {
    window.open(
      "https://www.beyoung.in/sitemap",
      "_blank"
    );
  }
  const handlerApple = () => {
    window.open(
      "https://apps.apple.com/in/app/beyoung/id1665513310",
      "_blank"
    );
  }
  const handlerAndroid = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.beyoungapp&referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob",
      "_blank"
    );
  }
  const handlerInsta = () => {
    window.open(
      "https://www.instagram.com/beyoung.in_official/",
      "_blank"
    );
  }
  const handlerLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/company/beyoung-in/",
      "_blank"
    );
  }
  const handlerFb = () => {
    window.open(
      "https://www.facebook.com/beyoungfolks/",
      "_blank"
    );
  }
  const handlerTwitter = () => {
    window.open(
      "https://twitter.com/Beyoung_in/",
      "_blank"
    );
  }
  const handlerPinterest = () => {
    window.open(
      "https://in.pinterest.com/BeyoungFolks/",
      "_blank"
    );
  }
  const handlerYoutube = () => {
    window.open(
      "https://www.youtube.com/c/beyoungfolks",
      "_blank"
    );
  }

  const socialMedia = (
  
    <div className={`flex  flex-row ${isMobile ? 'gap-[10px] justify-around' : 'gap-[20px] justify-between' } w-[50%]`}>
      <img onClick={()=>handlerInsta()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img2} alt="img" />
      <img onClick={()=>handlerLinkedIn()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img3} alt="img" />
      <img onClick={()=>handlerFb()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img4} alt="img" />
      <img onClick={()=>handlerTwitter()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img5} alt="img" />
      <img onClick={()=>handlerPinterest()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img6} alt="img" />
      <img onClick={()=>handlerYoutube()} className={`${isMobile ? 'w-[15px]': 'w-[30px]' } `} src={img7} alt="img" />
    </div>
  
  )

  const content = (
    <div className="flex flex-col gap-4 bg-black text-white justify-center items-center">
    <div className="flex flex-row flex-wrap gap-4 bg-black text-white justify-around p-4 w-[70%]">
      <div className = {`${isMobile ? 'w-full' : '' }`} >
        <h2 className="text-yellow-200 font-bold">NEED HELP</h2>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Contact Us</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="">
                  <p className="text-green-300 text-[1.2rem]" >
                    Getting help is easy
                  </p>
                  <p className="text-[0.8rem] font-bold my-2">
                    Hello there, nice to see you !
                  </p>
                  <div className="my-4">
                    Send us a mail at <span className="font-bold">support@beyoung.in</span> , and we'll work our magic!
                  </div>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

        </div>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Track Order</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2">
                  <p className="my-3 text-green-300 text-[1.2rem]">Live Tracking</p>
                  <p className="font-semibold my-3">
                    This feature is set to be included in the forthcoming updates.
                  </p>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>  
          
        </div>
        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Returns & Refunds</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2 h-[300px] overflow-auto">
                  <p className="text-center my-4 font-bold text-[1.1rem]">Return & Exchange Policy</p>
                  <div>
                    <ul>
                      <li>1. The return or exchange can be done within 15 days after your order is delivered.</li>
                      <li>2. In case the customer receives defective/wrong product(s), the reverse pickup will be generated by us and the shipping charges will be covered by us only.</li>
                      <li>3. Note: It is mandatory to capture a video/photo before shipping the package or handling it to our courier partner.</li>
                      <li>4. If the customer's pin code is non-serviceable by our courier partners, then the customer is liable to self-ship the product(s) and the shipping charges upto ₹100 are 100% refundable if customer receives defective/wrong product(s).</li>
                      <li>5. Please courier the product(s) to the following address:
Beyoung Folks Pvt. Ltd. Eklingpura Chouraha, Ahmedabad Main Road (NH 8 - Near Mahadev Hotel) Udaipur, India 313002</li>
                      <li>6. Kindly pack the product(s) properly to prevent damage during transit. Please ensure the product(s) must be in unused condition with all tags and packaging.</li>
                      <li>7. Due to hygiene concerns of our customers, we do not accept return/refund or perform an exchange for the Boxer Shorts.</li>
                      <li>8. Note: We suggest you to select 'Speed Post' as your courier service rather than using other courier companies. Speed Post is a government-owned entity that operates India's largest postal network and it is totally reliable</li>
                    </ul>
                  </div>
                  <p className="text-center my-4 font-bold text-[1.1rem]">Refund Policy</p>
                  <div>
                    <ul>
                      <li>1. Prepaid Orders: The refund for the prepaid order will be processed within 7 working days after receiving your order at the warehouse and Quality Check of the product(s). The Refund Amount will be reflected in the respective payment mode.</li>
                      <li>2. Note: If you've placed a prepaid order using a Refund Coupon, the Value of the Coupon Code will be refunded through a Coupon and the remaining amount will be paid through your original payment mode.</li>
                      <li>3. For COD Orders: A coupon code of the ordered value will be sent to your registered email address/contact number within 48 hours after receiving your order at the warehouse and Quality Check of the product(s).</li>                      
                    </ul>
                  </div>

                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 
        </div>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">FAQ's</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2 h-[300px] overflow-auto">
                  <p className="text-center my-4 font-bold text-[1.1rem]">General FAQ questions with answers Policy</p>
                  <div>
                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: How can I track my order?</h2>
                      <p className="text-gray-600">A: To track your order, log in to your account and go to the "Order History" section. There, you'll find a list of your recent orders with tracking information.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: What is your return policy?</h2>
                      <p className="text-gray-600">A: We have a 30-day return policy. If you're not satisfied with your purchase, you can return it within 30 days of receipt. Please review our Return Policy for more details.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: How do I change my account password?</h2>
                      <p className="text-gray-600">A: You can change your password by logging in to your account, going to the "Account Settings" page, and selecting the "Change Password" option. Follow the on-screen instructions to update your password.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: Do you offer international shipping?</h2>
                      <p className="text-gray-600">A: Yes, we offer international shipping to many countries. You can check the list of countries we ship to during the checkout process. Shipping fees and delivery times may vary based on your location.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: What payment methods do you accept?</h2>
                      <p className="text-gray-600">A: We accept a variety of payment methods, including major credit cards (Visa, MasterCard, etc.), PayPal, and Apple Pay. You can choose your preferred payment option at checkout.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: How can I contact customer support?</h2>
                      <p className="text-gray-600">A: You can reach our customer support team by visiting our Contact Us page or by emailing support@example.com. We're here to assist you with any questions or issues you may have.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: Can I change my shipping address after placing an order?</h2>
                      <p className="text-gray-600">A: You can update your shipping address before your order is shipped. Please contact our customer support as soon as possible to make the necessary changes. Once your order has shipped, address updates may not be possible.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: How long does shipping take?</h2>
                      <p className="text-gray-600">A: Shipping times vary depending on your location and the shipping method you choose at checkout. Standard shipping typically takes 3-5 business days, while expedited shipping may arrive within 1-2 business days. International shipping times may vary.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: Do you offer discounts or promotions?</h2>
                      <p className="text-gray-600">A: Yes, we frequently offer discounts and promotions. Keep an eye on our Promotions page to stay updated on our latest deals and special offers.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                      <h2 className="text-lg font-semibold mb-2">Q: What is your privacy policy?</h2>
                      <p className="text-gray-600">A: We take your privacy seriously. You can review our Privacy Policy for information on how we collect, use, and protect your personal data.</p>
                    </div>

                  </div>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 
        </div>
        <div>

        <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Career</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2 h-[300px] overflow-auto">
                  <img src={img8} className="h-[180px] object-cover" alt="" />
                  <p className="text-center my-4 font-bold text-[1.1rem]">Join Beyoung Family</p>
                  <div className="text-[0.8rem]">
                    Stay tuned for future job opportunities, and please feel free to send your latest resume to the following email address.
                  </div>
                  <p className="text-green-400">support@beyoung.in</p>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root> 

        </div>
      </div>
      <div className = {`${isMobile ? 'w-full' : '' }`} >
        <h2 className="text-yellow-200 font-bold">COMPANY</h2>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">About Us</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2 h-[350px]  overflow-auto">
                  <img src={img9} className=" object-contain" alt="" />
                  <p className="text-center my-4 font-bold text-[1.1rem]">BeYOUng About Us</p>
                  <p className="text-center my-4 font-bold text-[0.9rem]">Our Story: Get the Young Out With Beyoung</p>
                  <div>
                  <p>
                    The story of Be Young is very simple and holds the essence of vision, hard work, and perseverance. Beyoung runs with the idea of providing the best to the customers because there is no feeling better than customer satisfaction. The prime focus of Be Young is to create products that represent the young souls by acting as a replica of their thoughts, personality, and choices.
                  </p>
                  <p>
                    Be Young was born in the year 2017, with the idea of four creative souls whose prime purpose was to establish an e-commerce brand that represents the common Indian young souls when it comes to fashion and accessories with distinctive and out of box designs and trendy product range.
                  </p>
                  <p>
                    The idea of Beyoung.in is to represent young souls of today, who believe in speaking their heart and mind with the choices they make. The growth of Beyoung as a brand says a story about being dynamic in what you believe. The BeYOUng Folks started by some creative souls in a small room with a leap of faith to become a brand that wins over customer’s trust with every product presented to them. Be Young as a brand focuses on creating products that Beyoungsters can carry with them to represent their style, opinions, and personality while maintaining relevance to the latest fashion trends. Whatever we manufacture, whatever we create, or whatever we present to you, we make sure that it has the heart and soul of Be “Young'' in it.
                  </p>


                  </div>

                  
                  
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root> 
        </div>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Beyoung Blog</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2">
                  <p className="my-3 text-green-300 text-[1.2rem]">THE BEYOUNG BLOG</p>
                  <p className="font-semibold my-3">
                    Blog Page will include in Future.
                  </p>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 

        </div>
        <div>
        <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Collaboration</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2">
                <p className="my-3 text-green-300 text-[1.2rem]">Official Collaborations</p>
                  
                  <div className="h-[450px] overflow-auto flex flex-wrap gap-4 justify-center">
                    <img className="w-[180px]" src={img10} alt="" />
                    <img className="w-[180px]" src={img11} alt="" />
                    <img className="w-[180px]" src={img12} alt="" />
                    <img className="w-[180px]" src={img13} alt="" />
                    <img className="w-[180px]" src={img14} alt="" />
                  </div>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root> 
         
        </div>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Media</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2">
                <p className="my-3 text-green-300 text-[1.2rem]">BEYOUNG - IN THE NEWS</p>
                  
                <div>
                  Media Page will be include in Future.
                </div>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 

        </div>
      </div>
      <div className = {`${isMobile ? 'w-full' : '' }`} >
        <h2 className="text-yellow-200 font-bold">MORE INFO</h2>
        <div>
          
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Terms and Conditions</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div className="m-2 h-[350px] overflow-auto">
                                 
                <div>
                <div className="max-w-prose mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>

                  <p>
                    Access to and use of www.beyoung.in and the products and services available through the website are subject to the following terms, conditions, and notices (“Terms of Service”). By browsing through these Terms of Service and using the services provided by our website (www.beyoung.in), you agree to all Terms of Service along with the Privacy Policy on our website, which may be updated by us from time to time. Please check this page regularly to take notice of any changes we may have made to the Terms of Service.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Introduction</h3>
                  <p>
                    The domain name www.beyoung.in is a site operated by Beyoung Folks Pvt. Ltd., a company incorporated under the laws of India with our registered office at Eklingpura Chouraha, Ahmedabad Main Road (NH 8 - Near Mahadev Hotel) Udaipur, India 313002.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Services</h3>
                  <p>
                    Beyoung is an online retailer of apparel and lifestyle products offered at great values to the consumer. Membership allows customers to purchase a variety of products. Upon placing an order, www.beyoung.in shall ship the product to you and be entitled to its payment for the service.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Third Party Websites and Content</h3>
                  <p>
                    Our website provides links for sharing our content on Facebook, Twitter, and other such third-party websites. These are only for sharing and/or listing purposes, and we take no responsibility for the third-party websites and/or their contents listed on our website (www.beyoung.in) and disclaim all our liabilities arising out of any or all third-party websites.
                  </p>
                  <p>
                    We disclaim all liabilities and take no responsibility for the content that may be posted on such third-party websites by the users of such websites in their personal capacity on any of the above-mentioned links for sharing and/or listing purposes as well as any content and/or comments that may be posted by such users in their personal capacity on any official webpage of Beyoung on any social networking platform.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Privacy</h3>
                  <p>
                    Our Privacy Policy incorporated by reference in these Terms of Service sets out how we will use personal information you provide to us. By using this Website, you agree to be bound by the Privacy Policy, and warrant that all data provided by you is accurate and up to date.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Exactness of the Product</h3>
                  <p>
                    The images of the items on the website are for illustrative purposes only. The actual color combination of the mobile cover and t-shirts may slightly vary as per the customer’s respective screen resolution.
                  </p>
                  <p>
                    All sizes and measurements of items are approximate; however, we do make every effort to ensure they are as accurate as possible. We take all reasonable care to ensure that all details, descriptions, and prices of items are as accurate as possible.
                  </p>
                  <p>
                    Some mobile covers might not be completely covered from the functional keys side because of the curved display of the device.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Customization</h3>
                  <ul className="list-disc pl-8">
                    <li>In case of any size issues in the custom t-shirts, there will be no replacement or refund under any circumstances. However, if the product is faulty or damaged from our end, then the customer can proceed with the return request.</li>
                    <li>The shoppers are requested to check the size guide before placing the order.</li>
                    <li>The color of the custom t-shirt and custom mobile cover may slightly vary as per the customer's screen resolution.</li>
                  </ul>

                  <h3 className="text-lg font-bold mt-4">Pricing</h3>
                  <p>
                    We ensure that all details of prices appearing on the website are accurate; however, errors may occur. If we discover an error in the price of any goods which you have ordered, we will inform you of this as soon as possible. If we are unable to contact you, we will treat the order as cancelled. If you cancel and you have already paid for the goods, you will receive a full refund.
                  </p>
                  <p>
                    Additionally, prices for items may change from time to time without notice. However, these changes will not affect orders that have already been dispatched. The price of an item includes VAT (or similar sales tax) at the prevailing rate for which we are responsible as a seller. Please note that the prices listed on the website are only applicable for items purchased on the website and not through any other source.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Payment</h3>
                  <p>
                    Upon receiving your order, we carry out a standard pre-authorization check on your payment card to ensure there are sufficient funds to fulfill the transaction. Goods will not be dispatched until this pre-authorization check has been completed. Your card will be debited once the order has been accepted. For any further payment-related queries, please check our FAQs on Payment Mode.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Delivery</h3>
                  <p>
                    You will be given various options for delivery of items during the order process. The options available to you will vary depending on where you are ordering from. An estimated delivery time is displayed on the order summary page. On placing your order, you will receive an email containing a summary of the order and also the estimated delivery time to your location. Sometimes, delivery may take longer due to unforeseen circumstances. In such cases, we will proactively reach out to you by e-mail and SMS. However, we will not be able to compensate for any mental agony caused due to delay in delivery.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Returns & Refund</h3>
                  <ul className="list-disc pl-8">
                    <li>Please note that the single products/combo products are not subject to return once the product is delivered. However, in case the product has an issue or defect in the material or print, you can submit the return request. For more information, visit Return Policy.</li>
                    <li>If a product (apparel) has any size issue once the shipment is delivered, then there will be no replacement or refund in any circumstances. So ensure your size with respect to the given Size Chart before placing an order.</li>
                  </ul>

                  <h3 className="text-lg font-bold mt-4">Intellectual Property Rights</h3>
                  <p>
                    All and any intellectual property rights in connection with the products shall be owned absolutely by the Company.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Law and Jurisdiction</h3>
                  <p>
                    These terms shall be governed by and constructed in accordance with the laws of India without reference to conflict of laws principles, and disputes arising in relation hereto shall be subject to the exclusive jurisdiction of the courts at Udaipur.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Indemnification</h3>
                  <p>
                    You agree to indemnify, defend and hold harmless the Company, its directors, officers, employees, consultants, agents, and affiliates, from any and all third party claims, liability, damages, or costs arising from your use of this website, your breach of these Terms of Service, or infringement of any intellectual property right.
                  </p>

                  <h3 className="text-lg font-bold mt-4">Violation & Termination</h3>
                  <p>
                    You agree that the Company may, in its sole discretion and without prior notice, terminate your access to the website and block your future access if we determine that you have violated these Terms of Service or any other policies. If you or the Company terminates your use of any service, you shall still be liable to pay for any service that you have already ordered until the time of such termination.
                  </p>

                  <p className="mt-4">
                    If you have any questions, comments, or requests regarding our Terms of Service or the website, please contact us at support@beyoung.in.
                  </p>
                </div>

                </div>
                </div>
                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 
        </div>
        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Privacy Policy</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
              <div className="max-w-prose mx-auto h-[350px] overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

                <h3 className="text-lg font-bold">Introduction</h3>
                <p>
                  1.1 Beyoung Folks Private Limited (“Company,” “we,” “us,” and “our”) respects the privacy of its users accessing its website at www.beyoung.in (“Website”). For the purposes of this privacy policy (“Privacy Policy”) and wherever the context so requires, “you,” “your,” “yourself,” “user” shall mean any natural or legal person who accesses or uses the Website, and in the event that a natural person is representing a business entity, reference to such terms shall include a reference to the business entity.
                </p>

                <h3 className="text-lg font-bold mt-4">Information</h3>
                <p>
                  1.2 The Company has adopted this Privacy Policy, in compliance with the provisions of applicable laws, to inform you of what information we collect from you through the Website, how we collect the information, how we may use it, and the steps we take to protect it.
                </p>
                <p>
                  1.3 The Company has provided this Privacy Policy to familiarize you with:
                </p>
                <ul className="list-disc pl-8">
                  <li>a). The type of data or information that you share with or provide to Company and that Company collects from you;</li>
                  <li>b). The purpose for the collection of such data or information from you;</li>
                  <li>c). Company’s information security practices and policies; and</li>
                  <li>d). Company’s policy on sharing or transferring your data or information with third parties.</li>
                </ul>
                <p>
                  1.4 The capitalized words and expressions used in this Privacy Policy and not defined herein but defined in the Information Technology Act 2000 (“IT Act”) and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“SPDI Rules”) will have the meanings assigned to them thereunder.
                </p>
                <p>
                  1.5 Please note that usage of the term Personal Information includes Sensitive Personal Data or Information (“SPDI”), wherever appropriate and/or mandated under the IT Act and the SPDI Rules.
                </p>

                <h3 className="text-lg font-bold mt-4">Collection of Information</h3>
                <p>
                  2.1 The “Information” provided by you to Company or collected from you by Company may consist of “Personal Information” and “Non-Personal Information”.
                </p>
                <p>
                  2.2 Personal Information for the purposes of this Privacy Policy shall include, but not be limited to:
                </p>
                <ul className="list-disc pl-8">
                  <li>a). Your user name along with your password;</li>
                  <li>b). Your name;</li>
                  <li>c). Your address;</li>
                  <li>d). Your telephone number;</li>
                  <li>e). Your e-mail address or other contact formation;</li>
                  <li>f). Your date of birth;</li>
                  <li>g). Your gender;</li>
                  <li>h). Information regarding your transactions on the Website, (including sales or purchase history);</li>
                  <li>i). Your financial information such as bank account information or credit card or debit card or other payment instrument details including one-time password;</li>
                  <li>j). Internet protocol address;</li>
                  <li>k). Any other Information that you provide during your registration process, if any, on the Website; or</li>
                  <li>l). [Identification code of your communication device which you use to access the Website or otherwise deal with Company],</li>
                </ul>
                <p>
                  2.3 Such Personal Information may be collected in various ways, including during the course of you availing certain services offered on the Website. Such instances include but are not limited to making an online purchase, participating in any online survey or contest, communicating with Company’s customer service by phone, email, or otherwise or posting user reviews on the items available on the Website.
                </p>
                <p>
                  2.4 We may receive Personal information about you from third parties, such as social media services, commercially available sources, and business partners. If you access Website through a social media service or connect a service on Website to a social media service, the information we collect may include your user name associated with that social media service, any information or content the social media service has the right to share with us, such as your profile picture, email address, or friends list, and any information you have made public in connection with that social media service. When you access the Website or otherwise deal with the Company through social media services or when you connect any Website to social media services, you are authorizing Company to collect, store, and use and retain such information and content in accordance with this Privacy Policy
                </p>
                <p>
                  2.5 You represent that the Personal Information you provide to us from time to time is and shall be correct, current, and updated and that you have all the rights, permissions, and consents to provide such information. Your providing the data/information and the Company’s consequent storage, collection, usage, transfer, access, or processing of the same shall not be in violation of any third-party agreement, laws, judgments, orders, or decrees.
                </p>

                <h3 className="text-lg font-bold mt-4">Non-Personal Information</h3>
                <p>
                  2.6 Company may also collect information other than Personal Information from you through the Website when you visit and/or use the Website. Such information may be stored in server logs. This Non-Personal Information would not assist Company to identify you personally. This Non-Personal Information may include:
                </p>
                <ul className="list-disc pl-8">
                  <li>a). Your geographic location;</li>
                  <li>b). details of your telecom service provider or internet service provider;</li>
                  <li>c). the type of browser (Internet Explorer, Firefox, Opera, Google Chrome, etc.);</li>
                  <li>d). the operating system of your system, device, and the Website you last visited before visiting the Website;</li>
                  <li>e). The duration of your stay on the Website is also stored in the session along with the date and time of your access, Non-Personal Information is collected through various ways such through the use of cookies.</li>
                </ul>

                <h3 className="text-lg font-bold mt-4">Purpose and Usage of Personal Information</h3>
                <p>
                  3.1 The Company does not disclose, transfer, trade, rent, or sell your Personal Information in any manner, except as specified herein or if you express your consent towards the same.
                </p>
                <p>
                  3.2 Information provided by you is used only:
                </p>
                <ul className="list-disc pl-8">
                  <li>a). To facilitate your use of the Website;</li>
                  <li>b). To respond to your concerns, inquiries, or address your requests for information about the various services we offer;</li>
                  <li>c). To provide you with information about Company’s services/products and send you information, materials, and offers from the Company;</li>
                  <li>d). To send you important information regarding the Website, changes to Company’s terms of service and various policies and/or other miscellaneous information;</li>
                  <li>e). To send you surveys and marketing communications that the Company believes may be of interest to you;</li>
                  <li>f). To personalize your experience on our Website;</li>
                  <li>g). To complete and fulfill your purchase, if you purchase any content or avail of any service from the Website, for example, to have your payments processed, communicate with you regarding your purchase and provide you with related customer service;</li>
                  <li>h). To administer product downloads;</li>
                  <li>i). To conduct internal reviews and data analysis for the Website (e.g., to determine the number of visitors to specific pages within the Website);</li>
                  <li>j). To improve the services, content, and advertising on the Website;</li>
                  <li>k). To protect the integrity of the Website; and</li>
                  <li>l). To comply with legal requirements and disclosures provided under the laws of India.</li>
                </ul>
                <p>
                  3.3 Your Information will be kept confidential to the maximum possible extent and in accordance with the provisions set out herein.
                </p>

                <h3 className="text-lg font-bold mt-4">Cookies & Shared Objects</h3>
                <p>
                  3.4 Cookies are alphanumeric identifiers that our Website places onto your computer’s hard drive. Company may store temporary or permanent ‘cookies’ on your computer. We may also use cookies and/or shared objects to track and understand the traffic on our Website. Cookies identify your computer so that we can recognize you the next time you visit us. We may use cookies and/or shared objects to collect and store some information about you, such as the name of the domain and host from which you access the internet, the internet protocol address of the computer you are using, the date and time you access our Website, and the internet address of the Website from which you linked directly to our Website. We use this information to better understand our users and customize our site for users’ particular preferences. You can erase or choose to block these cookies from your computer. You can configure your computer’s browser to alert you when we attempt to send you a cookie with an option to accept or refuse the cookie. If you have turned cookies off, you may be prevented from using certain features of the Website.
                </p>

                <h3 className="text-lg font-bold mt-4">Advertising</h3>
                <p>
                  4.1 The Company uses some third parties to administer a limited set of advertisements on our Website and portals. During this process, none of your Personal Information is leaked. However, aggregate profile information, such as user community, may be used in the selection of advertising to make sure that it has relevance to the user. On some banner ads, an embedded pixel may be present, and while it does not associate with a cookie or other personal profile information, it may return session connection information that allows advertisers to better determine how many individual users have clicked on the ad banner. We do not disclose your Personal Information to third parties for their marketing and advertising purposes.
                </p>

                <h3 className="text-lg font-bold mt-4">Links to other third party sites</h3>
                <p>
                  4.2 The Website may provide third party information and links to other websites that are not affiliates of or operated or controlled by the Company, including but not limited to payment gateways or social networking websites. The Company is not responsible for any form of transmission, whatsoever, received by you from any third party website and accordingly does not make any representations concerning the privacy practices or other policies of such third party websites. Under no circumstances shall the Company be deemed to control or guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, cookies, messages, or other materials available on such websites. Any user Information provided by you to such third party websites shall be governed in accordance with the privacy policies of such websites, and it is recommended that you review the privacy policy of such websites prior to using such websites.
                </p>

                <h3 className="text-lg font-bold mt-4">Disclosure of Personal Information</h3>
                <p>
                  4.3 We may disclose your Personal Information when required to do so by law or regulation, or under any legal obligation or order under law or in response to a request from a law enforcement or governmental agency or judicial, quasi-judicial or any other statutory or constitutional authority or to establish or exercise our legal rights or defend against legal claims.
                </p>
                <p>
                  4.4 We may disclose your Personal Information to law enforcement offices, third party rights owners, or others in the good faith belief that such disclosure is reasonably necessary to: enforce our terms or Privacy Policy; respond to claims that an advertisement, posting or other content violates the rights of a third party; or protect the rights, property or personal safety of our users or the general public.
                </p>
              </div>



                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root> 
        </div>
        <div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="ButtonFooter violetFooter">Shipping Policy</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContentFooter">
                <div>
                <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
                  <p className="py-2">
                    We promise our patrons one of the best experiences of online shopping that is hassle free and reliable. We take care of all parameters that ensure your delivery reaches you in a sound state.
                  </p>
                  <p className="py-2">
                    Once the order is shipped from the warehouse, it cannot be canceled. When the shipment is delivered and if the customer receives a faulty product then he or she can raise the return request.
                  </p>
                  <p className="py-2">
                    The tentative delivery period varies from 4-5 days. However, the actual delivery time may vary due to unexpected circumstances.
                  </p>
                  <p className="py-2">
                    We provide free shipping on all prepaid orders. If you choose COD payment method, we levy a Rs. 50 COD charge for every product you order. For example, if your order includes three products, you will be levied a COD charge of Rs.150
                  </p>
                </div>



                <Dialog.Close asChild>
                  <button className="IconButton" aria-label="Close">
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>             
        </div>
        <div onClick={()=>handlerSiteMap()} className="font-semibold cursor-pointer">
          Sitemap
        </div>
      </div>
      <div className = {`${isMobile ? 'w-full' : '' }`} >
        <h2 className="text-yellow-200 font-bold">Location</h2>
        <div>support@beyoung.in</div>
        <div className="max-w-[130px]">
          Eklingpura Chouraha, Ahmedabad Main Road (NH 8- Near Mahadev
          Hotel) Udaipur, India- 313002
        </div>

        <h2>DOWNLOAD THE APP</h2>
        <div className="flex flex-col p-2 gap-3">
          <img onClick={()=>handlerAndroid()} className="font-semibold cursor-pointer max-w-[130px]" src={psImg1} alt="img" />
          <img onClick={()=>handlerApple()} className="font-semibold cursor-pointer max-w-[130px]" src={psImg2} alt="img" />
        </div>
      </div>
    </div>
    <div className="flex justify-center w-[70%]">
      <Accordion.Root
        className="AccordionRoot bg-black"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <div className="border m-4"></div>
        <Accordion.Item className="AccordionItem bg-black" value="item-1">
          <AccordionTrigger className="bg-black">WHY CHOOSE US?</AccordionTrigger>
          <AccordionContent>
            <div>Online Shopping Site</div>
            <div>
              India's Best Online Shopping Site for Fashion and Lifestyle
            </div>
            <div>
              Started in 2018, Beyoung is the Best Site for online shopping
              in India when it comes to a vast collection of men's and
              women's fashion. The latest trends and styles are showcased
              here, yes at your favorite online fashion store. Well, if
              fashion is medicine, then Be Young is the chemist shop where
              you can do your online shopping for fashion with ease. Nothing
              to brag about, but we are the classic blend of 'Creativity'
              and 'Style'. Get The Young Out with Beyoung, our slogan says a
              lot about us.
            </div>
          </AccordionContent>
        </Accordion.Item>
        <div className="border m-4"></div>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>POPULAR CATEGORIES</AccordionTrigger>
          <AccordionContent>
            <div className="text-yellow-200 font-bold pt-4 ">Men' Clothing</div>
            <div>
              Topwear: Half Sleeve T-Shirts | Full Sleeve T-Shirts | Men's
              Shirts | Printed T-Shirts | Plain T-Shirts | Polo T-Shirts |
              Plus Size T-Shirts | Combos
            </div>
            <div className="h-[20px]"></div>
            <div>
              Theme Based T Shirts: Ipl T Shirts | Men's Travel T-shirts |
              Gym T Shirts | Quotes T Shirt | Cartoon T Shirt | Entrepreneur
              T-Shirts | Student T Shirts | Funky T Shirts
            </div>
            <div className="h-[20px]"></div>
            <div>
              Winter Collection: Hoodies for Men | Sweatshirts for Men |
              Jackets for Men
            </div>
            <div className="text-yellow-200 font-bold pt-4 ">WOMEN' Clothing</div>
            <div>
              Topwear: Women Shirts | Half Sleeve T-Shirts | Full Sleeve
              T-Shirts | Printed T-Shirts | Plain T-Shirts | Crop Tops |
              Plus Size T-Shirts | kurti
            </div>
            <div className="h-[20px]"></div>
            <div>
              Theme Based T Shirts: Women's Travel T-shirts | Feminist
              T-shirts
            </div>
            <div className="h-[20px]"></div>
            <div>
              Winter Collection: Hoodies for Women | Sweatshirts for Women |
              Long Coats for Women
            </div>
            <div className="h-[20px]"></div>
            <div>CUSTOMIZATION</div>
            <div>Custom T Shirt</div>
            <div className="h-[20px]"></div>
            <div>COUPLE WEAR</div>
            <div>Couple Boxer | Couple T shirts</div>
            <div className="h-[20px]"></div>
            <div>BOTTOMWEAR:</div>
            <div>
              Mens Boxer | Womens Boxer | Jeggings | Men Sweatpants | Mens
              Joggers | Chino Pants | Mens Jeans | Mens Pyjamas
            </div>
          </AccordionContent>
        </Accordion.Item>
        <div className="border m-4"></div>
      </Accordion.Root>
    </div>
    {!isMobile &&
      <div className="flex flex-row  gap-4 justify-center w-[70%] justify-center">
      <div className="w-1/2 flex flex-col justify-center ">
        <p className="p-4 text-[1.2rem] font-bold">
          100% SECURE PAYMENT
        </p>
        <img className="w-[99%]" src={img1} alt="img" />
      </div>
      <div className="border"></div>
      <div className="w-1/2 px-4">
        <p className="p-4 text-[1.2rem] font-bold">
          LET'S BE FRIENDS
        </p>
        <>
          {socialMedia}
        </>
        
      </div>
      </div>
    }
    {isMobile && 
      <div className="flex flex-col  gap-2 justify-center w-[70%] justify-center">
        <div className="px-2 flex flex-row justify-center items-center">
          <p className="p-2 text-[0.8em] font-[700]">
            LET'S BE FRIENDS
          </p>
          <>
            {socialMedia}
          </>              
        </div>
        <div className="flex flex-col justify-center ">
          <img className="w-[99%]" src={img1} alt="img" />
        </div>            
      </div>
    }

    <div className="py-[2rem] mb-[3rem] font-bold text-center">
      Copyright © 2023 Raviprasaath. All rights reserved.
    </div>
    </div>
  )
  
  return (
    <>
      {isMobile && (
        <Accordion.Root className="AccordionRoot bg-black" type="single" defaultValue="item-1" collapsible >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger className="bg-black justify-center gap-4" >
              ABOUT BEYOUNG
            </AccordionTrigger>
              <AccordionContent> 
                {content}          
              </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      )}
      {!isMobile && 
        <div>
          {content}
        </div>
      } 
    </>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={classNames("AccordionHeader", className)}>
      <Accordion.Trigger
        className={classNames("AccordionTrigger text-[1.2rem] font-[700] text-yellow-400", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText bg-black">{children}</div>
    </Accordion.Content>
  )
);

export default Footer;




