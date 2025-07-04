export interface Content {
  id: string;
  title: string;
  description: string;
  url?: string;
}

export interface Subject {
  id: string;
  name: string;
  videos: Content[];
  dpps: Content[];
  notes: Content[];
  solutions: Content[];
}

export interface Course {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  subjects: Subject[];
}

export const courseData: Course[] = [
  {
    id: 'web-development',
    title: 'Modern Web Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web development',
    subjects: [
      {
        id: 'html-css',
        name: 'HTML & CSS',
        videos: [
          { id: 'v1', title: 'Introduction to HTML5', description: 'Learn the basic structure of a web page.' },
          { id: 'v2', title: 'Advanced CSS Selectors', description: 'Master the art of selecting elements.' },
        ],
        dpps: [
          { id: 'd1', title: 'DPP 01: HTML Forms', description: 'Practice building complex forms.' },
        ],
        notes: [
          { id: 'n1', title: 'Flexbox vs Grid', description: 'A comprehensive guide.' },
        ],
        solutions: [
          { id: 's1', title: 'Solution for DPP 01', description: 'Check your answers for the forms exercise.' },
        ],
      },
      {
        id: 'javascript',
        name: 'JavaScript Deep Dive',
        videos: [
            { id: 'v1', title: 'ES6+ Features', description: 'Explore modern JavaScript features like arrow functions, promises, and async/await.' },
            { id: 'v2', title: 'DOM Manipulation', description: 'Learn how to interact with the Document Object Model to create dynamic web pages.' },
        ],
        dpps: [
            { id: 'd1', title: 'DPP 01: JavaScript Functions', description: 'Practice writing and using functions.' },
        ],
        notes: [
            { id: 'n1', title: 'Asynchronous JavaScript', description: 'Notes on callbacks, promises, and async/await.' },
        ],
        solutions: [
            { id: 's1', title: 'Solution for DPP 01', description: 'Check your answers for the functions exercise.' },
        ],
      },
      {
        id: 'react',
        name: 'React for Beginners',
        videos: [
            { id: 'v1', title: 'Introduction to React', description: 'Learn the basics of React and JSX.' },
            { id: 'v2', title: 'State and Props', description: 'Understand how data flows in a React application.' },
        ],
        dpps: [
            { id: 'd1', title: 'DPP 01: Building Components', description: 'Practice creating functional and class components.' },
        ],
        notes: [
            { id: 'n1', title: 'React Hooks', description: 'A complete guide to using hooks like useState and useEffect.' },
        ],
        solutions: [
            { id: 's1', title: 'Solution for DPP 01', description: 'Check your answers for the components exercise.' },
        ],
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data science',
    subjects: [
      {
        id: 'python',
        name: 'Python for Data Science',
        videos: [
            { id: 'v1', title: 'Introduction to Python', description: 'Learn the fundamentals of Python programming.' },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'pandas',
        name: 'Data Analysis with Pandas',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'scikit-learn',
        name: 'Machine Learning with Scikit-learn',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
    ],
  },
    {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    subjects: [
      {
        id: 'android-kotlin',
        name: 'Android with Kotlin',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'ios-swift',
        name: 'iOS with Swift',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'react-native',
        name: 'Cross-platform with React Native',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
    ],
  },
    {
    id: 'ui-ux-design',
    title: 'UI/UX Design Fundamentals',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'design ui',
    subjects: [
      {
        id: 'design-principles',
        name: 'Core Design Principles',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'figma',
        name: 'Prototyping with Figma',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'user-research',
        name: 'User Research',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
    ],
  },
];

export const getCourseById = (id: string) => courseData.find(course => course.id === id);

export const getSubjectByIds = (courseId: string, subjectId: string) => {
    const course = getCourseById(courseId);
    return course?.subjects.find(subject => subject.id === subjectId);
}
