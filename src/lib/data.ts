export interface VideoSource {
  quality: string;
  url: string;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  url?: string;
  sources?: VideoSource[];
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
  id:string;
  title: string;
  imageUrl: string;
  imageHint: string;
  subjects: Subject[];
  category: string;
  price: number;
  originalPrice?: number;
}

export const courseData: Course[] = [
  {
    id: 'aarambh-9th',
    title: 'AARAMBH 9th BATCH 25-26',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'students smiling',
    category: 'CLASS 9th',
    price: 3000,
    subjects: [
      {
        id: 'science',
        name: 'Science',
        videos: [
          { id: 'v1', title: 'Introduction to Physics', description: 'Learn the basics of motion and forces.', sources: [{ quality: '720p', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      },
       {
        id: 'maths',
        name: 'Maths',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
    ],
  },
  {
    id: 'humanities-12th',
    title: 'Humanities 12th',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'students posing',
    category: 'CLASS 12th',
    price: 3500,
    originalPrice: 4000,
    subjects: [
       {
        id: 'history',
        name: 'History',
        videos: [
            { id: 'v1', title: 'Modern History', description: 'A deep dive into modern history.', sources: [{ quality: '720p', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'political-science',
        name: 'Political Science',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
    ],
  },
];

export const mindMapsData: Content[] = [
  {
    id: 'mm1',
    title: 'Web Development Basics',
    description: 'A mind map covering the fundamentals of HTML, CSS, and JavaScript.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'mm2',
    title: 'React Core Concepts',
    description: 'Explore the core concepts of React including components, state, and props.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

export const shortNotesData: Content[] = [
  {
    id: 'sn1',
    title: 'CSS Flexbox Guide',
    description: 'A quick reference guide for all CSS Flexbox properties.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    id: 'sn2',
    title: 'JavaScript ES6 Features',
    description: 'Short notes on important ES6 features like let, const, arrow functions, and promises.',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

export const getCourseById = (id: string) => courseData.find(course => course.id === id);

export const getSubjectByIds = (courseId: string, subjectId: string) => {
    const course = getCourseById(courseId);
    return course?.subjects.find(subject => subject.id === subjectId);
}
