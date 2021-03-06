import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'
import { Contact } from '../../Contact';

const Footer = () => {
	return (
		<>
			<FooterStyle>
				<ContainerLayout>
				<FooterBody>
							<p className="text-primary quote"> Ready to take the next step and work together? </p>
							
								<Contact />


						</FooterBody>
					<FooterBody>
						<FooterSocialMedia>
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}
						</FooterSocialMedia>
						<div className="box">
						<SubRight> Good design doesn't date. Bad design does. </SubRight>
						<CopyRight className="text-dark">
							© 
							<span> {new Date().getFullYear()}, Built with {` `} 
								<a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
          		</span> 
							Copyright {data.SiteCopyright} by {data.SiteAuthor} </CopyRight>
					</div>	
					</FooterBody>
					
					
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;