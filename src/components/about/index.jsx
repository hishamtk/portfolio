import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Front End Developer</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Hisham </Title>
              <Text> I'm a digital Front End Developer hailing from <b className="text-primary lined-link">India</b> living in Calicut. </Text>
              <Text> I love working with modern technologies, building and designing awesome projects. I prefer minimalistic & clean designs with strong user experience.</Text>
              <Text> <a href="https://www.thehackingschool.com/" target="_blank"><b className="text-primary lined-link">The Hacking School Graduate</b></a>, love to work with great people to make a difference.
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
