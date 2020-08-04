
const head_card = {
    "role": "machine learning engineer / front end developer",
    "name": "Darshan Parsana",
    "email": "darshanparsanadap@gmail.com",
    "contact": "7405851415",
    "skype_id": "darshan_parsana",
    "img":"abc.src",

};

const scroller_data = [
	{
		title: 'Darshan Parsana',
		description: 'Hi, and welcome to my profile... \n' +
			'I\'m Darshan Parsana. \n' +
			'Focused at Statistics and Machine Learning.\n' +
			'Ex-IIsc researcher. currently working with EY in NLP sector.',
		iname: 'scaled_dap'
	}
];

const timeline_data = [{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "Feb'19 - ongoing",
		position: 'right'
	},
	content : {
		title: 'Senior Machine Learning developer and Researcher',
		text : '',
		links: [{
			name: 'EY (Ernst & Young)',
			url : 'https://www.ey.com/en_us'
		}],
		tags : ['DL', 'Research', 'NLP', 'Unstructured Data', 'Leading']
	}
},{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "June'19 - Feb'20",
		position: 'left'
	},
	content : {
		title: 'Machine Learning Researcher and developer',
		text : '',
		links: [{
			name: 'Spotmentor Technologies',
			url : 'https://www.spotmentor.com'
		}],
		tags : ['DL', 'Research', 'NLP', 'Unstructured Data', 'HR tech', 'Leading']
	}
},{
	axisdata: {
		icn     : 'university',
		icnclr  : 'blue',
		time    : "June'18 - June'19",
		position: 'right'
	},
	content : {
		title: 'Research Assistant',
		text : '',
		links: [{
			name: 'Bees Lab',
			url : 'http://beeslab.dese.iisc.ac.in/project-staff/'
		},{
			name: 'paper on breast cancer',
			url : 'https://www.tandfonline.com/doi/full/10.1080/05704928.2020.1749651'
		},{
			name: 'ack on e-nose',
			url : 'https://iopscience.iop.org/article/10.1088/1752-7163/aafc77'
		}],
		tags : ['DL', 'Research', 'Biotech', 'Classification', 'Bayesian Mixture', 'Semantic Segmentation', 'Gaussian Process', 'Health care']
	}
},{
	axisdata: {
		icn     : 'robot',
		icnclr  : 'blue',
		time    : "Apr'18",
		position: 'left'
	},
	content : {
		title: 'Library for AD5933',
		text : 'developed python library for chip AD5933',
		links: [{
			name: 'AD5933',
			url : 'https://github.com/d-a-p/AD5933_python'
		}],
		tags : ['Library', 'Electronics']
	}
},{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "Feb'18",
		position: 'right'
	},
	content : {
		title: 'Genetic Algorithm(GA)',
		text : 'TSP(traveling salesmen problem) with GA and ant-hill optimization in python',
		links: [{
			name: 'TSP',
			url : 'https://github.com/d-a-p/genetic_algo'
		}],
		tags : ['GA', 'Optimization']
	}
},{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "Aug'18",
		position: 'left'
	},
	content : {
		title: 'Feature Specific generating Faces',
		text : '',
		links: [],
		tags : ['GPyopt', 'VAE', 'GPy']
	}
},{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "July'18",
		position: 'right'
	},
	content : {
		title: 'Application of Sequence models',
		text : 'Emojify, Jazz improvisation with LSTM',
		links: [],
		tags : ['LSTM', 'NLP']
	}
}, {
	axisdata: {
		icn     : 'programming',
		icnclr  : 'pink',
		time    : "Nov'17 - May'18",
		position: 'left'
	},
	content : {
		title: 'Machine Learning Engineer',
		text : '',
		links: [{
			name: 'cs231n',
			url : 'https://github.com/d-a-p/cs231_18_deep-learning'
		}],
		tags : ['ML', 'DL', 'Freelance', 'Computer Vision', 'VAE', 'GAN', 'LSTM', 'RNN']
	}
}, {
	axisdata : {
		icn:'website',
		icnclr: 'blue',
		time:"Jan'17 - Feb'18",
		position:'right'
		},
		content :{
			title:'Product Developer',
			text:'',
			links:[{
				name: 'Sprinklr',
				url : 'https://www.sprinklr.com/'
			}],
			tags:['ES6', 'React', 'Redux', 'Javascript']
		}
},{
	axisdata: {
		icn     : 'programming',
		icnclr  : 'blue',
		time    : "Oct - Nov'15",
		position: 'left'
	},
	content : {
		title: 'Parallelized Gaussian Blurring using CUDA',
		text : '',
		links: [{
			name: 'Presentation',
			url : 'https://www.slideshare.net/DarshanParsana/gaussian-image-blurring-in-cuda-c?qid=6a05c0dd-15f9-48b2-84db-665113b26b05&v=&b=&from_search=1'
		}],
		tags : ['CUDA', 'C++']
	}
}
];

const right_pdata = {
	"about": "He graduated with Bachelors in ICT with a major in computer science at DA-IICT, Gandhinagar, India." +
		" His interests lie in Machine learning, Statistics, and web development. He is passionate about machine learning applications and its social empact." +
		" He has published few research papers in healthcare (major using machine learning) sector with IISc-India during his research period in 2018/19.",
	"contact": "darshanparsanadap@gmail.com",

    "project":[
        {
            "name":"abc detector",
            "description":"The many different conceptions of God.",
            "link":"abc.com",
            "timestamp":[123424123, 12432124],
        },

    ]
};

const skills = {
	data: [{
		Python: 10, Tensorflow: 10, Javascript: 7,  'C++': 7, React: 8,
	}],
	replay:'True',
	options:{
		width: 500,
		height: 500,
		margin: {top: 20, left: 20, right: 20, bottom: 20},
		r: 250,
		max: 11,
		fill: "#1098dc91",
		stroke: "#138cc9",
		animate: {
			type: 'delayed',
			duration: 500,
			fillTransition:3
		},
		label: {
			fontFamily: 'sans-serif',
			fontSize: 14,
			bold: true,
			color: '#b3b3b3'
		}
	}
};

const topic_cloud = [
	{ value: "Bayesian", count: 38 }, { value: "Gaussian", count: 25 },
	{ value: "Dirichlet", count: 27 }, { value: "IG", count: 25 },
	{ value: "DMM", count: 23 }, { value: "CRP", count: 11 },
	{ value: "Polya Urn", count: 11 }, { value: "IBP", count: 20 },
	{ value: "Gibbs sampling", count: 22 }, { value: "Finite mixture", count: 27 },
	{ value: "Gaussian Process", count: 25 }, { value: "Nonparametrics", count: 33 },
	{ value: "Prior", count: 17 }, { value: "Hypothysis", count: 17 },
	{ value: "Dirichlet Process", count: 22 }, { value: "MCMC", count: 30 },
	{ value: "Metropolis", count: 17 }, { value: "Gamma Process", count: 21 },
	{ value: "Hierarchical", count: 29 },{ value: "Distribution", count: 7 }
];



export default {head_card, right_pdata, scroller_data, timeline_data, skills, topic_cloud};
