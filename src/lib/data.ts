
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
          { id: 'math-1-1', title: 'Set 01', description: 'Introduction to Set Theory.', sources: [{ type: 'direct', quality: '720p', url: 'https://dl.tamilupdates.workers.dev/dl/6867bdf6e7c10aa8f973e5df' }] },
          { id: 'math-1-2', title: 'Set 02', description: 'Continuing with Set Theory concepts.', sources: [{ type: 'direct', quality: '720p', url: 'https://dl.tamilupdates.workers.dev/dl/6867be06e7c10aa8f973e5e1' }] },
          { id: 'math-1-3', title: 'Set 03', description: 'Advanced topics in Set Theory.', sources: [{ type: 'direct', quality: '720p', url: 'https://dl.tamilupdates.workers.dev/dl/6867be05e7c10aa8f973e5e0' }] },
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
          { id: 'math-18', title: 'Quadratic Equations', description: 'Solving quadratic equations.' },
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
    id: 'youtube-automation-experts',
    title: 'Youtube Automation & Video Experts',
    imageUrl: 'https://dl.tamilupdates.workers.dev/dl/6867ce87e7c10aa8f973e5e4',
    imageHint: 'youtube logo automation',
    category: 'BUSINESS',
    price: 4999,
    originalPrice: 7999,
    subjects: [
      {
        id: 'course-videos',
        name: 'Course Videos',
        videos: [
          { id: 'yt-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: '1fSMkfR-XAYm-QTsJ13MYLiCgqQ7005MT' }] },
          { id: 'yt-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: '1pGcXqpE0O1AUVXauqP58nijIMnEz2Yez' }] },
          { id: 'yt-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: '1K0O-92v8OfaIHuRpNvufR62PTIeOs8rk' }] },
          { id: 'yt-v4', title: 'Video-04', description: 'Course content video 4.', sources: [{ type: 'gdrive', fileId: '1QbhTUPIIBdo8JuWnlt3tfzxNwmZVsOcf' }] },
          { id: 'yt-v5', title: 'Video-05', description: 'Course content video 5.', sources: [{ type: 'gdrive', fileId: '1NU3w9Tp2eqZznuIbDwHpD3oFt8Qtowr_' }] },
          { id: 'yt-v6', title: 'Video-06', description: 'Course content video 6.', sources: [{ type: 'gdrive', fileId: '1Bt0l5YFkYhnpPnVfGfzlE4FffLAMnkzW' }] },
          { id: 'yt-v7', title: 'Video-07', description: 'Course content video 7.', sources: [{ type: 'gdrive', fileId: '12OfYqtz5csxtY7G7jjPWLddOSwGGKLBc' }] },
          { id: 'yt-v8', title: 'Video-08', description: 'Course content video 8.', sources: [{ type: 'gdrive', fileId: '1UiWEi2wggWWPcskVdXmZJnhmlQcfCWIr' }] },
          { id: 'yt-v9', title: 'Video-09', description: 'Course content video 9.', sources: [{ type: 'gdrive', fileId: '1UiWEi2wggWWPcskVdXmZJnhmlQcfCWIr' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      }
    ],
  },
  {
    id: 'complete-video-editing',
    title: 'Complete Video Editing Course',
    imageUrl: 'https://dl.tamilupdates.workers.dev/dl/6867ccbde7c10aa8f973e5e3',
    imageHint: 'video editing software',
    category: 'Creative',
    price: 3999,
    subjects: [
      {
        id: 'course-videos',
        name: 'Course Videos',
        videos: [
          { id: 've-c1', title: 'Chapter-1', description: 'Video content for chapter 1.', sources: [{ type: 'gdrive', fileId: '1_loj_ouUCKhbPJ-mySqWc05ZNPySE3FT' }] },
          { id: 've-c2', title: 'Chapter-2', description: 'Please provide a valid file link for this chapter.', sources: [] },
          { id: 've-c3', title: 'Chapter-3', description: 'Video content for chapter 3.', sources: [{ type: 'gdrive', fileId: '1wDhkzgpioZ2LxCko2-_5kxLwbFG1ZGii' }] },
          { id: 've-c4', title: 'Chapter-4', description: 'Video content for chapter 4.', sources: [{ type: 'gdrive', fileId: '1mtFBC3Cb2X8ZPH59DuwP6vf2_PXAnUGO' }] },
          { id: 've-c5', title: 'Chapter-5', description: 'Video content for chapter 5.', sources: [{ type: 'gdrive', fileId: '1J7rJ8lM8fpxYuCuLTLSJZi3B3SV3XeLT' }] },
          { id: 've-c6', title: 'Chapter-6', description: 'Video content for chapter 6.', sources: [{ type: 'gdrive', fileId: '12R_IfrG0mcuegUx9EsqUWyTlgm_pm80R' }] },
          { id: 've-c7', title: 'Chapter-7', description: 'Video content for chapter 7.', sources: [{ type: 'gdrive', fileId: '144OKotY-uIfhAtRymatlLPJWTBx39nAf' }] },
          { id: 've-c8', title: 'Chapter-8', description: 'Video content for chapter 8.', sources: [{ type: 'gdrive', fileId: '1jTNFTPKlnAHgcZKQZkRyFE-hjHqLdQ9t' }] },
          { id: 've-c9', title: 'Chapter-9', description: 'Video content for chapter 9.', sources: [{ type: 'gdrive', fileId: '1p5hrbF5oHZjWnZcUCUxSZp6BpKFz4M_e' }] },
          { id: 've-c10', title: 'Chapter-10', description: 'Video content for chapter 10.', sources: [{ type: 'gdrive', fileId: '1FOrnWB2Wbf69lRaczPG_L87utK7cHXZj' }] },
          { id: 've-c11', title: 'Chapter-11', description: 'Video content for chapter 11.', sources: [{ type: 'gdrive', fileId: '1u0-aOUwhIj2bDxuYgD0T8qZTKVdE8Y_a' }] },
          { id: 've-c12', title: 'Chapter-12', description: 'Video content for chapter 12.', sources: [{ type: 'gdrive', fileId: '1QXZ9ry4GBSfTZcMZvH16n869R2xP7g9E' }] },
          { id: 've-c13', title: 'Chapter-13', description: 'Video content for chapter 13.', sources: [{ type: 'gdrive', fileId: '1LNQYy9PkuWIVKNkMnaO51W-MOPZYZi0K' }] },
          { id: 've-c14', title: 'Chapter-14', description: 'Video content for chapter 14.', sources: [{ type: 'gdrive', fileId: '1Ot-ko5fo8dT_unDnbGhAYKuyg_rW4oAu' }] },
          { id: 've-c15', title: 'Chapter-15', description: 'Video content for chapter 15.', sources: [{ type: 'gdrive', fileId: '1sE1i7FV8pdiFEjjueH_ug17dekoM-YAo' }] },
          { id: 've-c16', title: 'Chapter-16', description: 'Video content for chapter 16.', sources: [{ type: 'gdrive', fileId: '1UWTY3mxXBPHhhtkdXHxpt9zIadG6CTyG' }] },
          { id: 've-c17', title: 'Chapter-17', description: 'Video content for chapter 17.', sources: [{ type: 'gdrive', fileId: '15hy8TkySfgwQAxH2ZwJCN4mfxSVZRqT7' }] },
          { id: 've-c18', title: 'Chapter-18', description: 'Video content for chapter 18.', sources: [{ type: 'gdrive', fileId: '13N9DnLVb6O4v1lJw1knnx9yl1HES6t9U' }] },
          { id: 've-c19', title: 'Chapter-19', description: 'Video content for chapter 19.', sources: [{ type: 'gdrive', fileId: '1b-1Fqgm_Of0RF5CJJUlB8reBgKNBtqrN' }] },
          { id: 've-c20', title: 'Chapter-20', description: 'Video content for chapter 20.', sources: [{ type: 'gdrive', fileId: '1RgY6g2egPAbQIeq4JZ93paYnkjyh48ri' }] },
          { id: 've-c21', title: 'Chapter-21', description: 'Video content for chapter 21.', sources: [{ type: 'gdrive', fileId: '1LUseXhPJ5WlnzlVu0D2S9Ks-7kueDL4n' }] },
          { id: 've-c22', title: 'Chapter-22', description: 'Video content for chapter 22.', sources: [{ type: 'gdrive', fileId: '12WuszRPqoNAl0KlzKMJEKGt2YEdDmknK' }] },
          { id: 've-c23', title: 'Chapter-23', description: 'Video content for chapter 23.', sources: [{ type: 'gdrive', fileId: '1-yZzJaKhuxD1MlaWLbiE_y8AMG126e5x' }] },
          { id: 've-c24', title: 'Chapter-24', description: 'Video content for chapter 24.', sources: [{ type: 'gdrive', fileId: '1jfdnltiDCg1w8JRMm_K8VVUaUxoLDh4E' }] },
          { id: 've-c25', title: 'Chapter-25', description: 'Video content for chapter 25.', sources: [{ type: 'gdrive', fileId: '18xJRs6XC84fTcRTNFyX_u5c8O4prpzum' }] },
          { id: 've-c26', title: 'Chapter-26', description: 'Video content for chapter 26.', sources: [{ type: 'gdrive', fileId: '1rACAAlXT8fYHUEdRN7kwnTUCxaPJaiVK' }] },
          { id: 've-c27', title: 'Chapter-27', description: 'Video content for chapter 27.', sources: [{ type: 'gdrive', fileId: '1KJKZMFHSvA4ssWn3S0GwBhjx7I7Q6aa3' }] },
          { id: 've-c28', title: 'Chapter-28', description: 'Video content for chapter 28.', sources: [{ type: 'gdrive', fileId: '1jKTqV4NKclgWq9wI433LiRDtrhCZgFNG' }] },
          { id: 've-c29', title: 'Chapter-29', description: 'Video content for chapter 29.', sources: [{ type: 'gdrive', fileId: '1NH-B7gZvsCQhBD8DyXpY-iIVLAoAFE6D' }] },
          { id: 've-c30', title: 'Chapter-30', description: 'Video content for chapter 30.', sources: [{ type: 'gdrive', fileId: '1IqAp3u-04TIQ3mANIjw9uvJSHFWVxTjf' }] },
          { id: 've-c31', title: 'Chapter-31', description: 'Video content for chapter 31.', sources: [{ type: 'gdrive', fileId: '1WBLNhTw-GrzVSx4L3mjH4q0dnOe-WtO7' }] },
          { id: 've-c32', title: 'Chapter-32', description: 'Video content for chapter 32.', sources: [{ type: 'gdrive', fileId: '1fi334rroxvehDO-ymcmvYwT7RfN6KbP9' }] },
          { id: 've-c33', title: 'Chapter-33', description: 'Video content for chapter 33.', sources: [{ type: 'gdrive', fileId: '1VIJrnCA3P4yf0NKQeynmJjVjw1E4ESKN' }] },
          { id: 've-c34', title: 'Chapter-34', description: 'Video content for chapter 34.', sources: [{ type: 'gdrive', fileId: '1qPi1yEONIss-Yl0UZqRbcI6TWhDwZzDq' }] },
          { id: 've-c35', title: 'Chapter-35', description: 'Video content for chapter 35.', sources: [{ type: 'gdrive', fileId: '1xVtbfIN2xH3CwdGuOsxtdXKtpofOS3sE' }] },
          { id: 've-c36', title: 'Chapter-36', description: 'Video content for chapter 36.', sources: [{ type: 'gdrive', fileId: '1Y-RLxmluG5zYvSAMEJAHFGoEDSo4QvPR' }] },
          { id: 've-c37', title: 'Chapter-37', description: 'Video content for chapter 37.', sources: [{ type: 'gdrive', fileId: '16LzDGZfL10VGBa3j2Ek75ZMfgqw5loEx' }] },
          { id: 've-c38', title: 'Chapter-38', description: 'Video content for chapter 38.', sources: [{ type: 'gdrive', fileId: '1KCtwFCI8Zes1AkMMp4YzB9jqFgvot03c' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      }
    ],
  },
  {
    id: 'web-development-course',
    title: 'Web Development Course',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web development',
    category: 'Tech',
    price: 4999,
    subjects: [
      {
        id: 'full-web-development-course',
        name: 'Full Web Development Course',
        videos: [
          { id: 'wd-b4j-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: '1i63Ni97mlNNeIIGc6fPKc4XniT6bMu69' }] },
          { id: 'wd-b4j-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: '1yWVk51WxwQxnqJFG_nvicX5KWnnEKbje' }] },
          { id: 'wd-b4j-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: '1zuCsyYHCO8YCMqEu-lbyiWm4TdY0beXv' }] },
          { id: 'wd-b4j-v4', title: 'Video-04', description: 'Course content video 4.', sources: [{ type: 'gdrive', fileId: '1MvexkzWfBglSDi9-tujuj22c127vQR2J' }] },
          { id: 'wd-b4j-v5', title: 'Video-05', description: 'Course content video 5.', sources: [{ type: 'gdrive', fileId: '1PAIka97cvEgELKav_oNkF3kNZtlG_SKQ' }] },
          { id: 'wd-b4j-v6', title: 'Video-06', description: 'Course content video 6.', sources: [{ type: 'gdrive', fileId: '15HDq3zKrOQ5gsWqF6tsreylMp_h5B-HJ' }] },
          { id: 'wd-bod-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: '1FstCwx8zvB53cC4LYZGn8ZvpzdLnPajX' }] },
          { id: 'wd-bod-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: '1l1y4ruM5lFhzi-MHCZ_XJ6kBXa8RW_bR' }] },
          { id: 'wd-bod-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: '1fAyIi5URg7sfRoln1UQH1Qvm2saOEkUW' }] },
          { id: 'wd-html-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: '1AOxGIbvwlt2dJBpiWKNCVQw7cs9AUqHn' }] },
          { id: 'wd-html-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: '19rOIfj-q_6td-IBrIzJuFfFCM360L3ZD' }] },
          { id: 'wd-html-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: '14wBcNKDcHGUtc4EF5ixr5lE24kC212Wy' }] },
          { id: 'wd-html-v4', title: 'Video-04', description: 'Course content video 4.', sources: [{ type: 'gdrive', fileId: '1jCWVYf6rnGgDCJODZ67rbRuIeeM-D2Aw' }] },
          { id: 'wd-html-v5', title: 'Video-05', description: 'Course content video 5.', sources: [{ type: 'gdrive', fileId: '1OkxyK4dYbw0JBTR_ZpAG3zSe7pKsevVq' }] },
          { id: 'wd-css-v1', title: 'Video-01', description: 'Course content video 1.', sources: [{ type: 'gdrive', fileId: '1tGtHW71B-DY8Hud-qJVlaG4bdCDhTIbL' }] },
          { id: 'wd-css-v2', title: 'Video-02', description: 'Course content video 2.', sources: [{ type: 'gdrive', fileId: '1nCf0NpbMk0FmfMdmJcXalLxuBsA1yOdJ' }] },
          { id: 'wd-css-v3', title: 'Video-03', description: 'Course content video 3.', sources: [{ type: 'gdrive', fileId: '1ipmWKj6btRcKN1LVDbrWpJJJhV_FE6mC' }] },
          { id: 'wd-css-v4', title: 'Video-04', description: 'Course content video 4.', sources: [{ type: 'gdrive', fileId: '1X5V3_mEMXs20c0iBVeZws6eABelBNf9H' }] },
          { id: 'wd-css-v5', title: 'Video-05', description: 'Course content video 5.', sources: [{ type: 'gdrive', fileId: '1L2LKTp1wRLgLbxGiw-zvxe5F-YIfe9ya' }] },
          { id: 'wd-css-v6', title: 'Video-06', description: 'Course content video 6.', sources: [{ type: 'gdrive', fileId: '1aeiCqtPNX-Wyhhrtso5-ZFN0LoB7MnY2' }] },
          { id: 'wd-css-v7', title: 'Video-07', description: 'Course content video 7.', sources: [{ type: 'gdrive', fileId: '1HZgatTVFREn7fC6U6vYzh9kf_bH4YMGD' }] },
          { id: 'wd-css-v8', title: 'Video-08', description: 'Course content video 8.', sources: [{ type: 'gdrive', fileId: '16lbMi3gPJ7FJuLZNnk7EdYxyDUExqy_F' }] },
          { id: 'wd-css-v9', title: 'Video-09', description: 'Course content video 9.', sources: [{ type: 'gdrive', fileId: '1sluZYespGAFjUcsycchigJdzkuKRbuzI' }] },
          { id: 'wd-css-v10', title: 'Video-10', description: 'Course content video 10.', sources: [{ type: 'gdrive', fileId: '1zDCpKhcHYYgJ1Q9j-MzOlKVhKFgRUlZO' }] },
          { id: 'wd-css-v11', title: 'Video-11', description: 'Course content video 11.', sources: [{ type: 'gdrive', fileId: '1knqSkapMOfdKk_2UYJz7qTRwwTvbZSBM' }] },
          { id: 'wd-css-v12', title: 'Video-12', description: 'Course content video 12.', sources: [{ type: 'gdrive', fileId: '1qmP9eRBrnVnIhN_dJtLd0OUATTxXIRtg' }] },
          { id: 'wd-css-v13', title: 'Video-13', description: 'Course content video 13.', sources: [{ type: 'gdrive', fileId: '147NSeovJhpuL6N6tv0IOqxLz1h5daVLg' }] },
          { id: 'wd-css-v14', title: 'Video-14', description: 'Course content video 14.', sources: [{ type: 'gdrive', fileId: '1mgmvDUWeq_gtHcmi-DLtsKHzUtNALCKp' }] },
          { id: 'wd-css-v15', title: 'Video-15', description: 'Course content video 15.', sources: [{ type: 'gdrive', fileId: '1wJynwU1ent5CjUrrZLsxm2YOpwm49lbh' }] },
          { id: 'wd-css-v16', title: 'Video-16', description: 'Course content video 16.', sources: [{ type: 'gdrive', fileId: '1Oj08p7rrQdAmjsi3owPXutqnZfwlR9gt' }] },
          { id: 'wd-css-v17', title: 'Video-17', description: 'Course content video 17.', sources: [{ type: 'gdrive', fileId: '1V4NeBKDv9eKZbu8eYd7X720P2gpgn8_V' }] },
          { id: 'wd-css-v18', title: 'Video-18', description: 'Course content video 18.', sources: [{ type: 'gdrive', fileId: '1fphKz-_yRZ-Zn6YwbNwjKRVpa4F277H7' }] },
          { id: 'wd-css-v19', title: 'Video-19', description: 'Course content video 19.', sources: [{ type: 'gdrive', fileId: '1utftaSX_MgxWgkmn_DMd7dqJiu8QSFWf' }] },
          { id: 'wd-css-v20', title: 'Video-20', description: 'Course content video 20.', sources: [{ type: 'gdrive', fileId: '1hs33pqEhFH_XeVcAxAhQ4cr6ZQjhlLPK' }] },
          { id: 'wd-css-v21', title: 'Video-21', description: 'Course content video 21.', sources: [{ type: 'gdrive', fileId: '1TxHxwaTZFueJDlCA2-ib5Snt1LiMaFBF' }] },
          { id: 'wd-css-v22', title: 'Video-22', description: 'Course content video 22.', sources: [{ type: 'gdrive', fileId: '1BnJLN-HV9E6ReVJTEkmAw6xH9yU7gnUd' }] },
          { id: 'wd-css-v23', title: 'Video-23', description: 'Course content video 23.', sources: [{ type: 'gdrive', fileId: '136b-hoB5MwprdLTRSstiXExv0TV8zbqN' }] },
          { id: 'wd-css-v24', title: 'Video-24', description: 'Course content video 24.', sources: [{ type: 'gdrive', fileId: '1on6GA3SqceN1ClcX0Bs5nXhqAYD238TL' }] },
          { id: 'wd-css-v25', title: 'Video-25', description: 'Course content video 25.', sources: [{ type: 'gdrive', fileId: '1orX4Bd0UGgRcby35J1d07SDQq-Jai7n_' }] },
          { id: 'wd-css-v26', title: 'Video-26', description: 'Course content video 26.', sources: [{ type: 'gdrive', fileId: '1qCIgDjV9dRqAdu7KUw_QOjOCBLVmzluk' }] },
          { id: 'wd-css-v27', title: 'Video-27', description: 'Course content video 27.', sources: [{ type: 'gdrive', fileId: '1LACDihoXUNvNkLuSi74uZ0V_41wPfrch' }] },
          { id: 'wd-css-v28', title: 'Video-28', description: 'Course content video 28.', sources: [{ type: 'gdrive', fileId: '1tyiZdzhm6LCJVeCVBdMKy2sa3iKA71qa' }] },
          { id: 'wd-css-v29', title: 'Video-29', description: 'Course content video 29.', sources: [{ type: 'gdrive', fileId: '1Hloju4iF5z_KUufPpjZSitLY67zDoqhd' }] },
          { id: 'wd-css-v30', title: 'Video-30', description: 'Course content video 30.', sources: [{ type: 'gdrive', fileId: '1SJozpZww4IYUIU3427Hz1XdUB_VOz6ze' }] },
          { id: 'wd-css-v31', title: 'Video-31', description: 'Course content video 31.', sources: [{ type: 'gdrive', fileId: '1r1c5BhQQsXXz8mm-fHasV-ea-Jeoh-l4' }] },
          { id: 'wd-css-v32', title: 'Video-32', description: 'Course content video 32.', sources: [{ type: 'gdrive', fileId: '1RHhCS1jfSRxdXmJNJXfoTu_uVlJZJK0D' }] },
          { id: 'wd-css-v33', title: 'Video-33', description: 'Course content video 33.', sources: [{ type: 'gdrive', fileId: '1bYvYg7KxlPd8Lz616Na1XwLgPMA1SSAJ' }] },
          { id: 'wd-css-v34', title: 'Video-34', description: 'Course content video 34.', sources: [{ type: 'gdrive', fileId: '1eYvevLW56QkGlfQxQUEVFIH-FDX3bImu' }] },
          { id: 'wd-css-v35', title: 'Video-35', description: 'Course content video 35.', sources: [{ type: 'gdrive', fileId: '1nUpdOtDYduL0Unzl5583NucJPYvzYQj_' }] },
          { id: 'wd-css-v36', title: 'Video-36', description: 'Course content video 36.', sources: [{ type: 'gdrive', fileId: '12rYq8U5fdZkTj2PT9XgXMorqwA5S7jTp' }] },
          { id: 'wd-css-v37', title: 'Video-37', description: 'Course content video 37.', sources: [{ type: 'gdrive', fileId: '14p8-7pUm_8b_hKKBygqu50KatTHFpnCS' }] },
          { id: 'wd-css-v38', title: 'Video-38', description: 'Course content video 38.', sources: [{ type: 'gdrive', fileId: '1hhSDY6w9J_a3D_-kMCd7X3slq24-TdLV' }] },
          { id: 'wd-css-v39', title: 'Video-39', description: 'Course content video 39.', sources: [{ type: 'gdrive', fileId: '1FMGou8uMhihOIeg5lK-j0l9gaTO0f2J4' }] },
          { id: 'wd-css-v40', title: 'Video-40', description: 'Course content video 40.', sources: [{ type: 'gdrive', fileId: '1p61RS6Cn2aTjcy1ywZLyYhLl1oQleZ9H' }] },
          { id: 'wd-css-v41', title: 'Video-41', description: 'Course content video 41.', sources: [{ type: 'gdrive', fileId: '1ghBxbab2_sVDh6UtcQUIntWDP1ekpqT5' }] },
          { id: 'wd-css-v42', title: 'Video-42', description: 'Course content video 42.', sources: [{ type: 'gdrive', fileId: '12YjXCrawatEQzO4X13Q8nG7uPQndZbzI' }] },
          { id: 'wd-css-v43', title: 'Video-43', description: 'Course content video 43.', sources: [{ type: 'gdrive', fileId: '12YjXCrawatEQzO4X13Q8nG7uPQndZbzI' }] },
          { id: 'wd-css-v44', title: 'Video-44', description: 'Course content video 44.', sources: [{ type: 'gdrive', fileId: '1wnEFxb-bRDoS8hhOCIeDYsZHragJXmr4' }] },
          { id: 'wd-css-v45', title: 'Video-45', description: 'Course content video 45.', sources: [{ type: 'gdrive', fileId: '1pZApwdkjdinunBOtiLEoDeJaLjcy6u5T' }] },
          { id: 'wd-css-v46', title: 'Video-46', description: 'Course content video 46.', sources: [{ type: 'gdrive', fileId: '11l_OknEH2MuBUi-NQWVA-Ni0JEeRodd8' }] },
          { id: 'wd-css-v47', title: 'Video-47', description: 'Course content video 47.', sources: [{ type: 'gdrive', fileId: '1ZmaD0CmW3ErsbfIEG9RfN9JuJTaRfytw' }] },
        ],
        dpps: [],
        notes: [],
        solutions: [],
      }
    ]
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
