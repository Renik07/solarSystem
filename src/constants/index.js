import {
	planets,
	baang,
	solar,
	sun,
	evol_1,
	evol_2,
	evol_3,
	evol_4,
	earth,
	jupiter,
	mars,
	mercury,
	neptune,
	saturn,
	uranus,
	venus,
  gagarin,
  gagarin2,
  armstrong,
  armstrong2,
	mask,
  hubble,
} from "../assets";

export const navLinks = [{
		id: "description",
		title: "Facts",
	},
	{
		id: "evolution",
		title: "Evolution",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [{
		title: "The sun is the most important star",
		icon: sun,
	},
	{
		title: "8 unique planets",
		icon: planets,
	},
	{
		title: "Formed about 4.57 billion years ago",
		icon: baang,
	},
	{
		title: "Mainly made up of hydrogen",
		icon: solar,
	},
];

const solarPlanets = [{
		name: "Earth",
		icon: earth,
	},
	{
		name: "Jupiter",
		icon: jupiter,
	},
	{
		name: "Mars",
		icon: mars,
	},
	{
		name: "Mercury",
		icon: mercury,
	},
	{
		name: "Neptune",
		icon: neptune,
	},
	{
		name: "saturn",
		icon: saturn,
	},
	{
		name: "Uranus",
		icon: uranus,
	},
	{
		name: "Venus",
		icon: venus,
	},
];

const evolution = [{
		title: "Big Bang",
		icon: evol_1,
		iconBg: "#383E56",
		date: "13.7 billion years ago",
		points: [
			"Up to this point, the universe has been a singularity.",
			"The early universe was very hot.",
			"The concept of the Big Bang came about with the discovery of Hubble's law in the 1920s.",
			"As a result of the expansion and cooling of the Universe, the formation of particles occurred.",
		],
	},
	{
		title: "Formation of the solar system",
		icon: evol_2,
		iconBg: "#383E56",
		date: "4.6 billion years ago",
		points: [
			"Most of the matter ended up in the gravitational center of the collapse, followed by the formation of a star - the Sun.",
			"The substance that did not fall into the center formed a protoplanetary disk rotating around it, from which the planets and their satellites were subsequently formed.",
			"The gas and dust cloud in which the Sun and the stars closest to it formed, arose, possibly as a result of a supernova explosion.",
			"After which heavy and radioactive elements got into space.",
		],
	},
	{
		title: "Planet formation",
		icon: evol_3,
		iconBg: "#383E56",
		date: "4.567 billion years ago",
		points: [
			"The interstellar cloud is shrinking.",
			"The disk acquires structure.",
			"Planets are forming.",
			"A gas giant is born.",
			"Other giant planets appear.",
			"Earth-like planets are forming.",
		],
	},
	{
		title: "The appearance of the first living being on planet Earth",
		icon: evol_4,
		iconBg: "#383E56",
		date: "3.7 billion years ago",
		points: [
			"At the beginning of the Archean eon, cyanobacterial mats and archaea were the dominant life form.",
			"Approximately 1.2 billion years ago, the first algae appeared.",
			"flowering plants appeared 130 million years ago.",
			"Humans are among the first primates to walk upright about 6 million years ago.",
		],
	},
];

const quotes = [{
		quote: "That's one small step for man, one giant leap for mankind.",
		name: "Neil Armstrong",
		image: armstrong2,
	},
	{
		quote: "Let's go!",
		name: "Yuri Gagarin",
		image: gagarin2,
	},
	{
		quote: "...",
		name: "Elon Mask",
		image: mask,
	},
];

const eventDates = [{
		name: "Apollo 11",
		description: "Apollo 11 (July 16–24, 1969) was the American spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person to step onto the Moon's surface six hours and 39 minutes later, on July 21 at 02:56 UTC.",
		tags: [{
				name: "July 20, 1969",
				color: "green-text-gradient",
			},
			{
				name: "USA",
				color: "blue-text-gradient",
			},
		],
		image: armstrong,
		link: "https://en.wikipedia.org/wiki/Apollo_11",
	},
	{
		name: "The first man in space",
		description: "Yuri Alekseyevich Gagarin[a] (9 March 1934 – 27 March 1968) was a Soviet pilot and cosmonaut who became the first human to journey into outer space. Travelling in the Vostok 1 capsule, Gagarin completed one orbit of Earth on 12 April 1961.",
		tags: [{
				name: "April 12, 1961",
				color: "green-text-gradient",
			},
			{
				name: "USSR",
				color: "pink-text-gradient",
			},
		],
		image: gagarin,
		link: "https://en.wikipedia.org/wiki/Yuri_Gagarin",
	},
	{
		name: "Hubble Space Telescope",
		description: "The Hubble Space Telescope (often referred to as HST or Hubble) is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile, renowned both as a vital research tool and as a public relations boon for astronomy.",
		tags: [{
				name: "April 25, 1990",
				color: "green-text-gradient",
			},
			{
				name: "USA",
				color: "blue-text-gradient",
			},
		],
		image: hubble,
		link: "https://en.wikipedia.org/wiki/Hubble_Space_Telescope",
	},
];

export {
	services,
	solarPlanets,
	evolution,
	quotes,
	eventDates
};