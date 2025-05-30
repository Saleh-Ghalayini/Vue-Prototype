import { inject, onMounted } from 'vue';
import { ref, computed } from 'vue';
import { graduateService } from '../services/graduateService';

export function useGraduates() {
  const toast = inject('toast');
  
  const graduates = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Search and filter state
  const searchQuery = ref('');
  const selectedSkill = ref('');
  const appliedSearchQuery = ref('');
  const appliedSkill = ref('');

  // Extract all unique skills from graduates
  const availableSkills = computed(() => {
    if (!graduates.value || graduates.value.length === 0) return [];
    
    // Collect all skills from all graduates
    const allSkills = graduates.value.reduce((skills, graduate) => {
      if (graduate.skills && Array.isArray(graduate.skills)) {
        skills.push(...graduate.skills);
      }
      return skills;
    }, []);
    
    // Get unique skills and sort them alphabetically
    return [...new Set(allSkills)]
      .map(skill => skill.trim())
      .filter(skill => skill)
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  });

  // Filtered graduates based on applied search and filter
  const filteredGraduates = computed(() => {
    return graduates.value.filter(graduate => {
      // Filter by search query (name, email, or skills)
      const matchesSearch = appliedSearchQuery.value === '' || 
        graduate.name.toLowerCase().includes(appliedSearchQuery.value.toLowerCase()) ||
        graduate.email.toLowerCase().includes(appliedSearchQuery.value.toLowerCase()) ||
        graduate.skills.some(skill => skill.toLowerCase().includes(appliedSearchQuery.value.toLowerCase()));
      
      // Filter by selected skill
      const matchesSkill = appliedSkill.value === '' ||
        graduate.skills.some(skill => skill.toLowerCase() === appliedSkill.value.toLowerCase());
      
      return matchesSearch && matchesSkill;
    });
  });

  // Apply filters when button is clicked
  const applyFilters = () => {
    appliedSearchQuery.value = searchQuery.value;
    appliedSkill.value = selectedSkill.value;
    toast.info('Filters applied successfully');
  };

  // Reset filters
  const resetFilters = () => {
    searchQuery.value = '';
    selectedSkill.value = '';
    appliedSearchQuery.value = '';
    appliedSkill.value = '';
  };
  // Handle booking an interview
  const bookInterview = (graduate) => {
    toast.success(`Interview request sent to ${graduate.name}`);
  };

  // Open links in new tab
  const openLink = (url, type, name) => {
    if (url) {
      window.open(url, '_blank');
      toast.info(`Opened ${type} for ${name}`);
    } else {
      toast.warning(`${type} not available for ${name}`);
    }
  };

  const fetchGraduates = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await graduateService.getAll();
      if (response.success) {
        graduates.value = response.data;
      } else {
        error.value = response.message;
        toast.error(error.value || 'Failed to fetch graduates');
      }
    } catch (err) {
      error.value = err.message;
      toast.error(err.message || 'An unexpected error occurred');
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchGraduates();
  });
  return {
    graduates,
    filteredGraduates,
    searchQuery,
    selectedSkill,
    availableSkills,
    applyFilters,
    resetFilters,
    bookInterview,
    openLink,
    loading,
    error,
    fetchGraduates
  };
}
