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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle=""
					subTitle="Specializing in Front-end development with a diverse skill set."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/profile.jpg" alt="Profile" width={500} height={500}/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my technical expertise, I have a deep understanding of user-experience, project management and teamwork skills, honed through my experience as a software engineer. Alongside working on Web Development projects, I'm actively engaged in the financial market, investing and managing personal portfolios to stay abreast of current trends and market movements."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. I enjoy applying various strategies to make each project more exciting and valuable. Working with new frameworks is something I find rewarding, and I’m always looking for ways to expand my knowledge."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'solar-system', 		name: 'Usability', 			type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'layer-plus', 		name: 'Accessibility', 		type: 'fad' },
	{ key: 'brain-circuit', 	name: 'API Strategy', 		type: 'fad' },
	{ key: 'laptop-code', 		name: 'SEO Strategy', 		type: 'fad' },
]