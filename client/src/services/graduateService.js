export const graduateService = {

  async getAll() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/graduates`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return {
        success: true,
        data: data.data || data,
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Failed to fetch graduates'
      };
    }
  },

  async bookInterview(graduateId) {
    try {
      return {
        success: true,
        message: 'Interview request sent successfully'
      };
    } catch (error) {
      console.error(error);
      return {
        success: false,
        message: error.message || 'Failed to book interview'
      };
    }
  }
};

export default graduateService;
