import React from 'react';

const PrivacyTerms: React.FC<{ activeTab: string; setActiveTab: (tab: string) => void }> = ({
    activeTab,
    setActiveTab
}) => {
  return (
    <div className="bg-gray-50 min-h-screen rounded-lg">
      <div className="max-w-4xl mx-auto px-4 pt-8 mb-[-7rem]">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mun-e LLC - Legal Documents</h1>        
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'terms' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('terms')}
          >
            Terms of Service
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'privacy' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('privacy')}
          >
            Privacy Policy
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${activeTab === 'security' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('security')}
          >
            Security Policy
          </button>
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-lg shadow p-6">
          {activeTab === 'terms' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">I. Terms of Service</h2>
              <p className="text-sm text-gray-700 mb-4">Effective Date: January 1, 2025</p>
              
              <p className="mb-4">
                Welcome to Mun-e.com! These Terms of Service (&quot;Terms&quot;) govern your access to and use of
                the website and mobile app Mun-e.com (the &quot;Site&quot;), operated by Mun-e LLC (&quot;Mun-e,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;). By accessing or using the Site, you agree to be bound by these Terms. If you do
                not agree to these Terms, do not access or use the Site.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">1. Services</h3>
                  <p>
                    Mun-e provides a platform for [e.g., peer-to-peer lending, digital asset
                    management, budgeting and financial planning tools, etc.]. The specific features and
                    functionalities of the Services may change from time to time.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">2. Eligibility</h3>
                  <p>
                    You must be at least 18 years of age and have the legal capacity to enter into a
                    contract to use the Services. You must also have a valid bank account or other payment method
                    acceptable to Mun-e.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">3. Account Creation</h3>
                  <p>
                    To access certain features of the Site, you will need to create an account.
                    You are responsible for maintaining the confidentiality of your account credentials and are liable
                    for all activities that occur under your account. You agree to provide accurate and complete
                    information when creating your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">4. User Content</h3>
                  <p>
                    Users may be able to submit content to the Site, such as comments, reviews,
                    or financial data. You are solely responsible for your User Content. You represent and warrant
                    that you have all necessary rights to your User Content and that your User Content does not
                    infringe on the rights of any third party. You grant Mun-e a non-exclusive, royalty-free, worldwide
                    license to use, reproduce, modify, and distribute your User Content in connection with the
                    Services. You agree not to submit any User Content that is unlawful, harmful, threatening,
                    abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, hateful,
                    or racially, ethnically or otherwise objectionable.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">5. Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Use the Site for any illegal or unauthorized purpose.</li>
                    <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                    <li>Interfere with or disrupt the Site or servers or networks connected to the Site, or disobey any requirements, procedures, policies or regulations of networks connected to the Site.</li>
                    <li>Attempt to gain unauthorized access to any part of the Site, other accounts, computer systems or networks connected to the Site, through hacking, password mining or any other means.</li>
                    <li>Violate any applicable laws or regulations.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">6. Intellectual Property</h3>
                  <p>
                    The Site and its content, including but not limited to text, graphics,
                    logos, images, software, and code, are the property of Mun-e and are protected by copyright
                    and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">7. Disclaimer of Warranties</h3>
                  <p>
                    The Services are provided &quot;as is&quot; and &quot;as available&quot; without any
                    warranties of any kind, express or implied, including, but not limited to, the implied warranties of
                    merchantability, fitness for a particular purpose and non-infringement. Mun-e does not warrant
                    that the Services will be uninterrupted, error-free, or secure.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">8. Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, Mun-e shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages, including, without limitation,
                    loss of profits, data, use, goodwill, or other intangible losses, arising out of or related to your use
                    of the Site or Services, even if Mun-e has been advised of the possibility of such damages.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">9. Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the
                    laws of the State of Delaware, without regard to its conflict of law principles.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">10. Changes to Terms</h3>
                  <p>
                    Mun-e may update these Terms at any time. We will notify you of any
                    material changes by posting the updated Terms on the Site. Your continued use of the Site
                    following the posting of such changes constitutes acceptance of the revised Terms.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">11. Contact Us</h3>
                  <p>
                    If you have any questions about these Terms, please contact us at
                    customercare@mun-e.com
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'privacy' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">II. Privacy Policy</h2>
              <p className="text-sm text-gray-700 mb-4">Effective Date: January 1, 2025</p>
              
              <p className="mb-4">
                Mun-e LLC (&quot;Mun-e,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and share your personal information when you use our
                website or mobile app, Mun-e.com (the &quot;Site&quot;).
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">1. Information We Collect</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Personal Information:</span> We may collect information that identifies you,
                      such as your name, email address, phone number, address, date of birth, Social Security
                      number (where permitted by law and only with your explicit consent), financial information (e.g.,
                      bank account details, transaction history), and government-issued identification (for KYC/AML
                      compliance).
                    </li>
                    <li>
                      <span className="font-medium">Usage Information:</span> We may collect information about how you use the Site, such
                      as your IP address, browser type, device information, pages visited, referring website, and time
                      spent on the Site.
                    </li>
                    <li>
                      <span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies, web beacons, and
                      other tracking technologies to collect information about your activity on the Site and to
                      personalize your experience.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">2. How We Use Your Information</h3>
                  <p>We may use your information to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide and personalize the Services, including processing transactions and providing customer support.</li>
                    <li>Communicate with you about your account or our Services, including sending you important updates and notifications.</li>
                    <li>Improve the Site and Services, including analyzing user behavior and identifying areas for improvement.</li>
                    <li>Comply with legal obligations, including KYC/AML regulations and other applicable laws.</li>
                    <li>Prevent fraud and protect the security of our platform.</li>
                    <li>Provide you with personalized offers and marketing materials (only with your consent).</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">3. How We Share Your Information</h3>
                  <p>We may share your information with:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Service Providers:</span> We may share your information with third-party service providers who assist us with providing
                      the Services, such as payment processors, data analytics providers, identity verification
                      services, and customer support providers. We require these service providers to protect your
                      information and only use it for the purposes we specify.
                    </li>
                    <li>
                      <span className="font-medium">Legal Authorities:</span> We may disclose your information to legal authorities if required by law or legal process, or if we believe that such
                      disclosure is necessary to protect our rights or the rights of others.
                    </li>
                    <li>
                      <span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be
                      transferred as part of that transaction.
                    </li>
                    <li>
                      <span className="font-medium">Affiliates:</span> We may share your information with our affiliates for the purposes described in this Privacy Policy.
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">4. Data Security</h3>
                  <p>
                    We take reasonable measures to protect your information from unauthorized
                    access, use, or disclosure. These measures include encryption, access controls, and regular
                    security assessments. However, no method of transmission over the internet, or method of
                    electronic storage, is 100% secure.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">5. Your Choices</h3>
                  <p>You may choose to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Opt out of receiving marketing communications from us by clicking the unsubscribe link in our emails or contacting us directly.</li>
                    <li>Disable cookies in your browser settings. However, please note that disabling cookies may affect the functionality of the Site.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">6. Children&apos;s Privacy</h3>
                  <p>
                    Our Site is not intended for children under the age of 13. We do not
                    knowingly collect personal information from children under 13. If you become aware that a child
                    under 13 has provided us with personal information, please contact us.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">7. Changes to this Privacy Policy</h3>
                  <p>
                    We may update this Privacy Policy at any time. We will notify
                    you of any material changes by posting the updated Privacy Policy on the Site. Your continued
                    use of the Site following the posting of such changes constitutes acceptance of the revised
                    Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">8. Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at
                    customercare@mun-e.com
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'security' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">III. Security Policy</h2>
              <p className="text-sm text-gray-700 mb-4">Effective Date: January 1, 2025</p>
              
              <p className="mb-4">
                Mun-e LLC (&quot;Mun-e,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to maintaining the security of your
                information. This Security Policy outlines the measures we take to protect your data when you
                use our website or mobile app, Mun-e.com (the &quot;Site&quot;).
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">1. Data Encryption</h3>
                  <p>
                    We use industry-standard encryption technologies, such as Transport
                    Layer Security (TLS), to protect your information during transmission and storage.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">2. Access Controls</h3>
                  <p>
                    We restrict access to your information to authorized personnel only. We
                    use strong passwords, multi-factor authentication, and role-based access controls to limit
                    access to sensitive data.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">3. Data Storage</h3>
                  <p>
                    We store your information on secure servers in [e.g., AWS data centers,
                    Google Cloud Platform] that comply with industry security standards. We maintain physical,
                    technical, and administrative safeguards to protect your data.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">4. Vulnerability Management</h3>
                  <p>
                    We regularly assess our systems for vulnerabilities and
                    implement patches and updates to address any identified risks. We conduct penetration testing
                    and security audits to identify and address potential weaknesses.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">5. Incident Response</h3>
                  <p>
                    We have an incident response plan in place to address any security
                    breaches or incidents. This plan includes procedures for identifying, containing, and eradicating
                    threats, as well as notifying affected users and regulatory authorities as required by law.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">6. Employee Training</h3>
                  <p>
                    We train our employees on security best practices.
                  </p>
                </div>
              </div>
            </div>
          )}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>© 2025 Mun-e LLC. All rights reserved.</p>
          <p className="mt-2">If you have any questions, please contact us at customercare@mun-e.com</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTerms;
