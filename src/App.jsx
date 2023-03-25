import { BrowserRouter } from "react-router-dom";

import { Description, Contact, Evolution, Quotes, Intro, Navbar, Planets, Events, StarsCanvas } from './components';

const App = () => {

  return (
		<BrowserRouter>
			<div className="relative z-0 bg-[#000]">
				<div className="bg-[#000] bg-cover bg-no-repeat bg-center cursor-grab">
					<Navbar />
					<Intro />
				</div>
				<Description />
				<Evolution />
				<Planets />
				<Events />
				<Quotes />
				<Contact />
				<StarsCanvas />
			</div>
		</BrowserRouter>
  )
}

export default App
