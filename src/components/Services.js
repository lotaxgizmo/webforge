import React, { useState } from 'react';
import imgg from '../assets/bg-05-free-img.png'
function Services() {
    const [isHovered, setIsHovered] = useState(false);

     const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

    return (
        <div>
            <div className="lg:flex  !flex-row !lg:flex-col  p-4 lg:p-0 !border-gray-700 lg:border-y lg:-mt-96 mb-20">
                <div className="elementor-element elementor-element-4d3649c e-con-full e-flex e-con e-child !w-[50.8%]" data-id="4d3649c" data-element_type="container">
                    <div className="lg:-mt-3 elementor-element elementor-element-7a76443 elementor-widget elementor-widget-heading" data-id="7a76443" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h6 className="elementor-heading-title elementor-size-default !text-[#8b5df2] text-[13px] font-bold">01</h6>		</div>
                    </div>
                    <div className="elementor-element elementor-element-2f11ac3 elementor-widget elementor-widget-heading" data-id="2f11ac3" data-element_type="widget" id="services" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h5 className="elementor-heading-title elementor-size-default !text-[#ffffff] text-[17px] font-bold">Services</h5>		</div>
                    </div>
                </div>

                <div className={`SECTION ${isHovered ? 'hover:bg-[#8B5DFF]' : ''} e-con e-child w-[28.1%]x lg:!p-[50px] !border-gray-700 lg:border-l-[0.5px] lg:w-[70%] p-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: isHovered ? `url(${imgg})` : 'linear-gradient(to bottom, #06101478, #0D0614)',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'left bottom',
        
      }}
    >

                    <div className="elementor-element elementor-element-7ef0760 elementor-widget elementor-widget-heading" data-id="7ef0760" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default heading mb-5">Web3 Marketing</h3>		</div>
                    </div>
                    <div className="elementor-element elementor-element-ea00c38 elementor-widget elementor-widget-heading" data-id="ea00c38" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h5 className="elementor-heading-title elementor-size-default heading2">Unlocking Your Project's True Potential</h5>		</div>
                    </div>
                    <div className="elementor-element elementor-element-f3bc12c elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f3bc12c" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-divider">
                                <span className="elementor-divider-separator">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-a8124b6 elementor-widget elementor-widget-text-editor" data-id="a8124b6" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <ul><li>Engage with prominent projects and key influencers in the web3 industry.</li><li>Boost your audience and community by partnering with other projects.</li><li>Create powerful branding and position your product to attract maximum interest.</li><li>Discover how to cultivate a robust community that supports you.</li><li>Develop a comprehensive go-to-market strategy that includes pricing, packaging, and timing.</li><li>Showcasing projects on prominent media outlets to build authority and attract attention</li></ul>						</div>
                    </div>
                </div>

                <div className={`SECTION ${isHovered ? 'hover:bg-[#8B5DFF]' : ''} e-con e-child w-[28.1%]x lg:!p-[50px] !border-gray-700 lg:border-l-[0.5px] lg:w-[70%] p-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: isHovered ? `url(${imgg})` : 'linear-gradient(to bottom, #06101478, #0D0614)',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'left bottom',
        
      }}
    >

                    <div className="elementor-element elementor-element-84db8a2 elementor-widget elementor-widget-heading" data-id="84db8a2" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default heading mb-5">Web3 Development</h3>		</div>
                    </div>
                    <div className="elementor-element elementor-element-3e869b0 elementor-widget elementor-widget-heading" data-id="3e869b0" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h5 className="elementor-heading-title elementor-size-default heading2">Build Trust and Excellence</h5>		</div>
                    </div>
                    <div className="elementor-element elementor-element-9c12da4 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="9c12da4" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-divider">
                                <span className="elementor-divider-separator">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-42e789c elementor-widget elementor-widget-text-editor" data-id="42e789c" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <ul><li>Crafting secure and efficient smart contracts tailored for any blockchain.</li><li>Building decentralized applications (DApps) with seamless user experiences for different sectors, including finance, gaming, and social media.</li><li>Integrating blockchain technology into existing business systems for enhanced security and transparency.</li><li>Creating and launching NFT projects, including art, music, and digital collectibles, complete with marketplace development.</li><li>Designing token economic models that align with project goals and encourage user engagement and growth.</li><li>Smart Contract Audit to guarantee thee contracts are secure, efficient, and aligned with best practices, safeguarding assets and trust.</li></ul>						</div>
                    </div>
                </div>

                <div className={`SECTION ${isHovered ? 'hover:bg-[#8B5DFF]' : ''} e-con e-child w-[28.1%]x lg:!p-[50px] !border-gray-700 lg:border-l-[0.5px] lg:w-[70%] p-4`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: isHovered ? `url(${imgg})` : 'linear-gradient(to bottom, #06101478, #0D0614)',
        backgroundRepeat:'no-repeat',
        backgroundPosition: 'left bottom',
        
      }}
    >

                    <div className="elementor-element elementor-element-9ab8c1e elementor-widget elementor-widget-heading" data-id="9ab8c1e" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h3 className="elementor-heading-title elementor-size-default heading mb-5">Fundraising and Advisory </h3>		</div>
                    </div>
                    <div className="elementor-element elementor-element-2dffcd3 elementor-widget elementor-widget-heading" data-id="2dffcd3" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                            <h5 className="elementor-heading-title elementor-size-default heading2">When your company needs to tempor.</h5>		</div>
                    </div>
                    <div className="elementor-element elementor-element-7ea55b9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7ea55b9" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                            <div className="elementor-divider">
                                <span className="elementor-divider-separator">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-c439f12 elementor-widget elementor-widget-text-editor" data-id="c439f12" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            <ul><li>Crafting the economic and incentive structures of a token to support project sustainability and growth.</li><li>Assistance with the planning, execution, and marketing of initial coin offerings, launchpads, or exchange offerings to raise capital.</li><li>Developing and maintaining strong relationships with investors through regular updates, reports, and strategic communications.</li><li>Providing strategic guidance on market positioning, competitor analysis, and growth strategies tailored to the blockchain and crypto space.</li><li>Whitepaper and pitch deck tailored to attract investors and partners by showcasing the project’s innovation and market fit.</li></ul>						</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services