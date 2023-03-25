import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { solarPlanets } from "../constants";

const Planets = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 max-w-3xl mx-auto">
			{
				solarPlanets.map(planet => (
					<div className="w-40 h-40" key={planet.name}>
						<BallCanvas icon={planet.icon} />
					</div>
				))
			}
		</div>
  )
}

export default SectionWrapper(Planets, "");