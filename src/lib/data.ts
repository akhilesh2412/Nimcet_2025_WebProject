export type DirectVideoSource = {
  type: 'direct';
  quality: string;
  url: string;
};

export type GoogleDriveVideoSource = {
  type: 'gdrive';
  fileId: string;
};

export type VideoSource = DirectVideoSource | GoogleDriveVideoSource;

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
  category: string;
  price: number;
  originalPrice?: number;
  subjects: Subject[];
}

export const courseData: Course[] = [
  {
    id: 'samarth-nimcet-2026',
    title: 'SAMARTH NIMCET 2026: MCA',
    imageUrl: 'https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/f3ec6f42-3a82-4d71-9443-2e74e13735a7.png',
    imageHint: 'course banner',
    category: 'NIMCET',
    price: 6499,
    originalPrice: 9000,
    subjects: [
      {
        id: 'maths',
        name: 'Maths',
        videos: [
          { id: 'math-1', title: 'Set Theory', description: 'Explore the fundamentals of sets.' },
          { id: 'math-2', title: 'Relations and Functions', description: 'Understand relationships between sets.' },
          { id: 'math-3', title: 'Sequence and Series', description: 'Learn about arithmetic and geometric progressions.' },
          { id: 'math-4', title: 'Straight Lines', description: 'Dive into coordinate geometry.' },
          { id: 'math-5', title: 'Circle', description: 'Properties and equations of circles.' },
          { id: 'math-6', title: 'Parabola', description: 'Conic sections: the parabola.' },
          { id: 'math-7', title: 'Ellipse', description: 'Conic sections: the ellipse.' },
          { id: 'math-8', title: 'Hyperbola', description: 'Conic sections: the hyperbola.' },
          { id: 'math-9', title: 'Matrices', description: 'Learn about matrices and their operations.' },
          { id: 'math-10', title: 'Determinants', description: 'Calculate determinants and their properties.' },
          { id: 'math-11', title: 'Continuity and Differentiability', description: 'Introduction to calculus concepts.' },
          { id: 'math-12', title: 'Application of Derivatives', description: 'Using derivatives to solve problems.' },
          { id: 'math-13', title: 'Integrals', description: 'Master the art of integration.' },
          { id: 'math-14', title: 'Application of Integration', description: 'Applying integrals to find areas.' },
          { id: 'math-15', title: 'Differential Equations', description: 'Solving differential equations.' },
          { id: 'math-16', title: 'Vector', description: 'Understanding vectors and vector algebra.' },
          { id: 'math-17', title: 'Probability', description: 'Learn the concepts of probability.' },
          { id: 'math-18', 'title': 'Quadratic Equations', description: 'Solving quadratic equations.' },
          { id: 'math-19', title: 'Permutations and Combinations', description: 'Counting principles and techniques.' },
          { id: 'math-20', title: 'Trigonometric Ratio & Identities', description: 'Exploring trigonometry.' },
          { id: 'math-21', title: 'Inequality', description: 'Solving inequalities.' },
          { id: 'math-22', title: 'Indices, Logarithms', description: 'Working with exponents and logs.' }
        ],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'computer',
        name: 'Computer',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'reasoning',
        name: 'Reasoning',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      },
      {
        id: 'english',
        name: 'English',
        videos: [],
        dpps: [],
        notes: [],
        solutions: [],
      }
    ]
  },
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
          { id: 'v1', title: 'Introduction to Physics', description: 'Learn the basics of motion and forces.', sources: [{ type: 'direct', quality: '720p', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }] },
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
            { id: 'v1', title: 'Modern History', description: 'A deep dive into modern history.', sources: [{ type: 'direct', quality: '720p', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' }] },
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
  {
    id: 'youtube-automation-experts',
    title: 'Youtube Automation & Video Experts',
    imageUrl: 'https://placehold.co/600x338.png',
    imageHint: 'youtube logo automation',
    category: 'BUSINESS',
    price: 4999,
    originalPrice: 7999,
    subjects: [
      {
        id: 'course-videos',
        name: 'Course Videos',
        videos: [
          { id: 'yt-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_1' }] },
          { id: 'yt-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_2' }] },
          { id: 'yt-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_3' }] },
          { id: 'yt-v4', title: 'Video-04', description: 'Course content video 4.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_4' }] },
          { id: 'yt-v5', title: 'Video-05', description: 'Course content video 5.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_5' }] },
          { id: 'yt-v6', title: 'Video-06', description: 'Course content video 6.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_6' }] },
          { id: 'yt-v7', title: 'Video-07', description: 'Course content video 7.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_7' }] },
          { id: 'yt-v8', title: 'Video-08', description: 'Course content video 8.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_8' }] },
          { id: 'yt-v9', title: 'Video-09', description: 'Course content video 9.', sources: [{ type: 'gdrive', fileId: 'REPLACE_WITH_YOUR_FILE_ID_9' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      }
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

export const mindMapsData: Content[] = [
    { id: 'mm1', title: 'Probability', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3a8e7c10aa8f973e5d8', description: 'Explore the mind map for Probability.' },
    { id: 'mm2', title: 'Sets', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3abe7c10aa8f973e5dc', description: 'Explore the mind map for Sets.' },
    { id: 'mm3', title: 'Trigonometric equations and functions', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3a8e7c10aa8f973e5d9', description: 'Explore the mind map for Trigonometric equations and functions.' },
    { id: 'mm4', title: 'Complex Number', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3a9e7c10aa8f973e5da', description: 'Explore the mind map for Complex Number.' },
    { id: 'mm5', title: 'Quadratic Equation', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3aae7c10aa8f973e5db', description: 'Explore the mind map for Quadratic Equation.' },
    { id: 'mm6', title: 'Permutation and Combination', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3a2e7c10aa8f973e5d7', description: 'Explore the mind map for Permutation and Combination.' },
    { id: 'mm7', title: 'Sequence and Series', url: 'https://dl.tamilupdates.workers.dev/dl/6867b3a1e7c10aa8f973e5d6', description: 'Explore the mind map for Sequence and Series.' },
    { id: 'mm8', title: 'Binomial Theorem', url: 'https://dl.tamilupdates.workers.dev/dl/6867b39fe7c10aa8f973e5d5', description: 'Explore the mind map for Binomial Theorem.' },
    { id: 'mm9', title: 'Circle', url: 'https://dl.tamilupdates.workers.dev/dl/6867b39ce7c10aa8f973e5d4', description: 'Explore the mind map for Circle.' },
    { id: 'mm10', title: 'Straight Line', url: 'https://dl.tamilupdates.workers.dev/dl/6867b397e7c10aa8f973e5d3', description: 'Explore the mind map for Straight Line.' },
    { id: 'mm11', title: 'Solutions of a Triangle', url: 'https://dl.tamilupdates.workers.dev/dl/6867b395e7c10aa8f973e5d2', description: 'Explore the mind map for Solutions of a Triangle.' },
    { id: 'mm12', title: 'Parabola', url: 'https://dl.tamilupdates.workers.dev/dl/6867b38de7c10aa8f973e5d1', description: 'Explore the mind map for Parabola.' },
    { id: 'mm13', title: 'Hyperbola', url: 'https://dl.tamilupdates.workers.dev/dl/6867b385e7c10aa8f973e5cf', description: 'Explore the mind map for Hyperbola.' },
    { id: 'mm14', title: 'Ellipse', url: 'https://dl.tamilupdates.workers.dev/dl/6867b37be7c10aa8f973e5ce', description: 'Explore the mind map for Ellipse.' },
];

export const shortNotesData: Content[] = [
    { id: 'sn1', title: 'Binomial Theorem', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8fe7c10aa8f973e5c7', description: 'Download the short notes for Binomial Theorem.' },
    { id: 'sn2', title: 'Sets', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae93e7c10aa8f973e5cd', description: 'Download the short notes for Sets.' },
    { id: 'sn3', title: 'Probability', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8be7c10aa8f973e5c1', description: 'Download the short notes for Probability.' },
    { id: 'sn4', title: 'Introduction to 3D', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8ae7c10aa8f973e5bf', description: 'Download the short notes for Introduction to 3D.' },
    { id: 'sn5', title: 'Circle', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8de7c10aa8f973e5c5', description: 'Download the short notes for Circle.' },
    { id: 'sn6', title: 'Complex Number - 2', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8ce7c10aa8f973e5c3', description: 'Download the short notes for Complex Number - 2.' },
    { id: 'sn7', title: 'Permutation and Combination', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae90e7c10aa8f973e5c9', description: 'Download the short notes for Permutation and Combination.' },
    { id: 'sn8', title: 'Sequence and Series', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8ee7c10aa8f973e5c6', description: 'Download the short notes for Sequence and Series.' },
    { id: 'sn9', title: 'Functions', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae93e7c10aa8f973e5cc', description: 'Download the short notes for Functions.' },
    { id: 'sn10', title: 'Trigonometric Equations', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae90e7c10aa8f973e5c8', description: 'Download the short notes for Trigonometric Equations.' },
    { id: 'sn11', title: 'Solutions of a Triangle', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8ae7c10aa8f973e5c0', description: 'Download the short notes for Solutions of a Triangle.' },
    { id: 'sn12', title: 'Complex Number - 1', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae91e7c10aa8f973e5ca', description: 'Download the short notes for Complex Number - 1.' },
    { id: 'sn13', title: 'Limits and Derivatives', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8ce7c10aa8f973e5c4', description: 'Download the short notes for Limits and Derivatives.' },
    { id: 'sn14', title: 'Straight Line', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae8be7c10aa8f973e5c2', description: 'Download the short notes for Straight Line.' },
    { id: 'sn15', title: 'Quadratic Equation', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae92e7c10aa8f973e5cb', description: 'Download the short notes for Quadratic Equation.' },
    { id: 'sn16', title: 'Basic Maths and Logarithms', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae89e7c10aa8f973e5be', description: 'Download the short notes for Basic Maths and Logarithms.' },
    { id: 'sn17', title: 'Ellipse', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae89e7c10aa8f973e5bd', description: 'Download the short notes for Ellipse.' },
    { id: 'sn18', title: 'Hyperbola', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae89e7c10aa8f973e5bc', description: 'Download the short notes for Hyperbola.' },
    { id: 'sn19', title: 'Trigonometric Ratio and Identities', url: 'https://dl.tamilupdates.workers.dev/dl/6867ae88e7c10aa8f973e5bb', description: 'Download the short notes for Trigonometric Ratio and Identities.' },
];

export const getCourseById = (id: string) => courseData.find(course => course.id === id);

export const getSubjectByIds = (courseId: string, subjectId: string) => {
    const course = getCourseById(courseId);
    return course?.subjects.find(subject => subject.id === subjectId);
}
