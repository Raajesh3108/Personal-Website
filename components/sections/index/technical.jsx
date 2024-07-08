// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a front-end developer, I build dynamic and responsive web interfaces using a wide range of modern technologies and frameworks."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Front-End Development"
							icon={[ 'fad', 'code' ]}
							copy="With a strong curiosity for full-stack development concepts, I bring a unique perspective to each project by combining deep front-end expertise with an understanding of back-end principles. I stay informed about the latest innovations and techniques to ensure my work remains both cutting-edge and effective."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with"
							copy="With over 4 years of experience specializing in web development, I have gained a thorough understanding of designing interfaces that meet the standards of top-tier software products. Below are some of the tools I’ve used during this time."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="gears"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code, from crafting engaging user interfaces to implementing responsive designs and optimizing user experience. I also work with APIs to enhance functionality and integration."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fad' },
	{ key: 'jupyter',		name: 'jupyter notebook', 	type: 'devicon' },
	{ key: 'cube',			name: 'netbeans', 			type: 'fad' },
	{ key: 'microsoftsqlserver',		name: 'microsoftsqlserver', 			type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'visualstudio', 	name: 'visualstudio', 		type: 'devicon' },
	{ key: 'github',		name: 'github', 			type: 'devicon' },
	{ key: 'heroku',		name: 'heroku', 			type: 'devicon' },
]

const tech	= [
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'bootstrap', 	name: 'bootstrap', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'typescript', 	name: 'typescript', 		type: 'devicon' },
	{ key: 'e', 			name: 'Express', 			type: 'fas' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'tailwindcss', 	name: 'tailwindcss', 		type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'mysql', 				type: 'devicon' },
	{ key: 'solidity',		name: 'solidity', 			type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
]