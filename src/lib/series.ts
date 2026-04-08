export const SERIES = [
	{
		name: '超快激光光谱',
		slug: 'ultrafast-laser-spectroscopy',
		description: '探索超快时间尺度下的光谱学研究'
	},
	{
		name: '微液滴研究进展',
		slug: 'microdroplet-research',
		description: '微液滴领域的最新研究进展与应用'
	},
	{
		name: '影评',
		slug: 'movie-reviews',
		description: '电影观后感与深度影评'
	},
	{
		name: '软件工程与项目管理',
		slug: 'software engineering',
		description: '面向独立开发者的软件工程工作流'
	},
	{
		name: '前端',
		slug: 'frontend',
		description: 'UI/UX & 前端基础，技术与设计的交叉共融'
	},
	{
		name: 'LabVIEW hacks',
		slug: 'labview-hacks',
		description: 'LabVIEW 编程与应用'
	},
	{
		name: '数理基础',
		slug: 'math-and-physics-foundations',
		description: '科研实用数理基础'
	},
	{
		name: '化学复习',
		slug: 'ugrad-chem',
		description: '本科阶段化学课程复习'
	}
] as const;

export type SeriesSlug = (typeof SERIES)[number]['slug'];
