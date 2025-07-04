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

export const practiceSheetsData: Content[] = [
    { id: 'ps1', title: 'Sets', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/d51cb826-716c-480b-b5a2-945bac623641.pdf', description: 'Download the practice sheet for Sets.' },
    { id: 'ps2', title: 'Relation and Functions', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/4e7a70f0-415d-4683-9f5b-8d356ded6fc2.pdf', description: 'Download the practice sheet for Relation and Functions.' },
    { id: 'ps3', title: 'Permutation and Combination', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/bd89aef2-42a5-46d3-abae-fd961c52c218.pdf', description: 'Download the practice sheet for Permutation and Combination.' },
    { id: 'ps4', title: 'Quadratic Equation', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/99aad7a1-b1b0-423b-b60b-14426e74f1d8.pdf', description: 'Download the practice sheet for Quadratic Equation.' },
    { id: 'ps5', title: 'Complex Number - 1', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/8dcde81e-fc09-4842-9837-d7225f9d24ad.pdf', description: 'Download the practice sheet for Complex Number - 1.' },
    { id: 'ps6', title: 'Complex Number - 2', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/03f7a49a-4047-4d9b-b690-2a2e59a90155.pdf', description: 'Download the practice sheet for Complex Number - 2.' },
    { id: 'ps7', title: 'Binomial Theorem', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/2d6117b8-9e2d-4a3f-8ddc-74bb9c078544.pdf', description: 'Download the practice sheet for Binomial Theorem.' },
    { id: 'ps8', title: 'Straight Line', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/a6289647-bb59-4ba1-891d-53e9f313da6d.pdf', description: 'Download the practice sheet for Straight Line.' },
    { id: 'ps9', title: 'Circle', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/56da6509-49bb-4486-863b-77b7104ea998.pdf', description: 'Download the practice sheet for Circle.' },
    { id: 'ps10', title: 'Parabola', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/902eb7d5-f950-46a5-8038-f1836d9b9724.pdf', description: 'Download the practice sheet for Parabola.' },
    { id: 'ps11', title: 'Ellipse', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/3bb2f366-397d-4b14-a5e1-9ef8a061d5c0.pdf', description: 'Download the practice sheet for Ellipse.' },
    { id: 'ps12', title: 'Hyperbola', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/b37ea3da-53e8-4b4a-8c24-5cd049577eec.pdf', description: 'Download the practice sheet for Hyperbola.' },
    { id: 'ps13', title: 'Limits and Derivatives', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/66ccabf8-c904-49b5-92dd-765f741a7956.pdf', description: 'Download the practice sheet for Limits and Derivatives.' },
    { id: 'ps14', title: 'Introduction to 3D', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/a59bdd08-8686-4a99-af19-8c0bbf696c72.pdf', description: 'Download the practice sheet for Introduction to 3D.' },
    { id: 'ps15', title: 'Probability', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/fe1b9523-0a5e-4337-95bb-974d615ef093.pdf', description: 'Download the practice sheet for Probability.' },
    { id: 'ps16', title: 'Solutions of a Triangle', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/002d36a7-06da-466a-be95-1ec796449ef7.pdf', description: 'Download the practice sheet for Solutions of a Triangle.' },
    { id: 'ps17', title: 'Statistics', url: 'https://static.pw.live/5eb393ee95fab7468a79d189/ADMIN/3a83c042-bf21-4fc7-b3a4-3467984f3da1.pdf', description: 'Download the practice sheet for Statistics.' },
];

export const mindMapsData: Content[] = [];

export const shortNotesData: Content[] = [];

export const getCourseById = (id: string) => courseData.find(course => course.id === id);

export const getSubjectByIds = (courseId: string, subjectId: string) => {
    const course = getCourseById(courseId);
    return course?.subjects.find(subject => subject.id === subjectId);
}
