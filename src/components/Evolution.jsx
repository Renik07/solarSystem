import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import { evolution } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EvolutionCard = ({ evolution }) => (
	<VerticalTimelineElement
		contentStyle={{ background: '#1d1836', color: '#fff' }}
		contentArrowStyle={{ borderRight: '7px solid #232631' }}
		date={evolution.date}
		iconStyle={{ background: evolution.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img 
					src={evolution.icon}
					alt={evolution.title}
					className="w-[80%] h-[80%] object-contain"
				/>
			</div>
		}
	>
		<div>
			<h3 className="text-white text-[24px] font-bold">{evolution.title}</h3>
		</div>
		<ul className="mt-5 list-disc ml-5 space-y-2">
			{
				evolution.points.map((point, i) => (
					<li className="text-white-100 text-[14px] pl-1 tracking-wider" key={`evolution-point-${i}`}>
						{ point }
					</li>
				))
			}
		</ul>
	</VerticalTimelineElement>
)

const Evolution = () => {
  return (
		<>
			<motion.div	variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Evolution</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{
						evolution.map((evol, i) => (
							<EvolutionCard key={i} evolution={evol} />
						))
					}
				</VerticalTimeline>
			</div>
		</>
  )
}

export default SectionWrapper(Evolution, "evolution");