export const graduateService = {

  async getAll() {
    try {
      return {
        success: true,
        data: [], // This should be replaced with actual graduate data
      };
    } catch (error) {
      console.error('Error fetching graduates:', error);
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
      console.error('Error booking interview:', error);
      return {
        success: false,
        message: error.message || 'Failed to book interview'
      };
    }
  }
};

export default graduateService;
