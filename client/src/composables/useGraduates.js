import { inject } from 'vue';
import { ref, computed } from 'vue';

export function useGraduates() {
  const toast = inject('toast');
  
  // Mock data for graduate profiles
  const graduates = ref([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      skills: ['Vue.js', 'React', 'TypeScript'],
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      linkedIn: 'https://linkedin.com/in/example1',
      github: 'https://github.com/example1',
      cv: '/assets/cv/sarah-johnson-cv.pdf',
      videoCV: 'https://youtube.com/watch?v=example1'
    },
    {
      id: 2,
      name: 'David Chen',
      email: 'david.chen@example.com',
      skills: ['Node.js', 'Express', 'MongoDB'],
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      linkedIn: 'https://linkedin.com/in/example2',
      github: 'https://github.com/example2',
      cv: '/assets/cv/david-chen-cv.pdf',
      videoCV: 'https://youtube.com/watch?v=example2'
    },
    {
      id: 3,
      name: 'Maya Patel',
      email: 'maya.patel@example.com',
      skills: ['Figma', 'Adobe XD', 'Vue.js'],
      photo: 'https://randomuser.me/api/portraits/women/67.jpg',
      linkedIn: 'https://linkedin.com/in/example3',
      github: 'https://github.com/example3',
      cv: '/assets/cv/maya-patel-cv.pdf',
      videoCV: 'https://youtube.com/watch?v=example3'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      skills: ['Java', 'Spring Boot', 'PostgreSQL'],
      photo: 'https://randomuser.me/api/portraits/men/52.jpg',
      linkedIn: 'https://linkedin.com/in/example4',
      github: 'https://github.com/example4',
      cv: '/assets/cv/james-wilson-cv.pdf',
      videoCV: 'https://youtube.com/watch?v=example4'
    }
  ]);

  return {
    graduates,
    filteredGraduates,
    searchQuery,
    selectedSkill,
    applyFilters,
    resetFilters,
    bookInterview,
    openLink
  };
}
