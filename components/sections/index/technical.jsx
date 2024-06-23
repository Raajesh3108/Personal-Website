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
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Full-Stack Development"
							icon={[ 'fad', 'code' ]}
							copy="Having a balanced skill set in both front-end and back-end development, I bring a unique perspective to every project and always stay informed about the latest innovations and techniques."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with"
							copy="With over 4 years of experience specializing in Web Development. I've honed a deep understanding of designing interfaces that rival top-tier software products. Here are some of the tools I have used over that time."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="gears"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the Front-end all the way to the Back-end development and the APIs in-between."
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