export const apiUrl = {
  // 🔐 Authentication (Static routes)
  auth: {
    register: "/auth/register",
    login: "/auth/login",
    refreshToken: "/auth/refresh-token",
    resetPassword: "/auth/reset-password-otp",
    requestPasswordReset: "/auth/forgot-password",
    resendVerificationEmail: "/auth/resend-verification-otp",
    verifyEmail: "/auth/verify-email-otp",
  },

  // 👤 User Profile (Static routes)
  user: {
    getProfile: "/users/profile",
    updateProfile: (id) => `/users/${id}`,
    changePassword: "/users/change-password",
    updateAvatar: "/users/change-avatar",
    getUsers: "/users",
    getUserById: (id) => `/users/${id}`,
    deleteUser: (id) => `/users/${id}`,
  },

  // 👥 Friends (Dynamic routes with Template Literals)
  friends: {
    sendRequest: "/users/friends/request",
    respondToRequest: (id) => `/users/friends/${id}/respond`,
    getFriends: "/users/friends",
    getPendingRequests: "/users/friends/pending",
    getFriendshipStatus: (userId) => `/users/friends/status/${userId}`,
    unfriend: (id) => `/users/friends/${id}`,
    blockUser: "/users/friends/block",
    unblockUser: (id) => `/users/friends/block/${id}`,
  },

  // 🃏 Cards (Mixed static and dynamic)
  cards: {
    getAll: "/cards",
    getCardsByGameType: (type) => `/cards/${type}`,
    getById: (cardId) => `/cards/card/${cardId}`,
    getCardStatistics: (type) => `/cards/${type}/stats`,
    getCardsBySetId: (setId) => `/cards/sets/${setId}`,
    getGeneralCardStatistics: "/cards/stats",
    getCardByTCGPlayerProductId: (productId) => `/cards/product/${productId}`,
  },

  // 📦 Sets (Mixed static and dynamic)
  sets: {
    getAll: "/sets",
    getSetsByGameType: (gameType) => `/sets/${gameType}`,
  },

  // 🗂️ Collections (Mixed static and dynamic)
  collections: {
    getMyCollection: "/collections",
    addCard: "/collections/cards",
    removeCard: (cardId) => `/collections/cards/${cardId}`,
    updateCardQuantity: (cardId) => `/collections/cards/${cardId}`,
    getStats: "/collections/stats",
  },

  // 🎴 User Cards (Alternative collection)
  userCards: {
    getAll: "/user-cards",
    add: "/user-cards",
    delete: (cardId) => `/user-cards/${cardId}`,
    getCardsByGameType: (gameType) => `/user-cards/cards/${gameType}`,
    getSetsByGameType: (gameType) => `/user-cards/sets/${gameType}`,
  },

  // 🎯 User Decks (Dynamic routes)
  userDecks: {
    getAll: "/decks/user",
    getById: (deckId) => `/decks/user/${deckId}`,
    create: "/decks/user",
    update: (deckId) => `/decks/user/${deckId}`,
    delete: (deckId) => `/decks/user/${deckId}`,
    addCardToDeck: (deckId) => `/decks/user/${deckId}/cards`,
    duplicate: (deckId) => `/decks/user/${deckId}/duplicate`,
    removeCardFromDeck: (deckId, cardId) =>
      `/decks/user/${deckId}/cards/${cardId}`,
    updateCardQuantityInDeck: (deckId, cardId) =>
      `/decks/user/${deckId}/cards/${cardId}`,
    validateDeckCompliance: (deckId) => `/decks/user/${deckId}/validate`,
    getByGame: (gameType) => `/decks/user/game/${gameType}`,
  },

  // 🏆 Recommended Decks (Dynamic routes)
  recommendedDecks: {
    pokemon: "/decks/pokemon",
    pokemonById: (id) => `/decks/pokemon/${id}`,
    yugioh: "/decks/yugioh",
    yugiohById: (id) => `/decks/yugioh/${id}`,
    searchPokemon: "/decks/pokemon/search",
    searchYugioh: "/decks/yugioh/search",
  },

  // 📱 Posts (Dynamic routes)
  posts: {
    create: "/posts",
    createWithFiles: "/posts/with-files",
    getFeed: "/posts/feed",
    getById: (id) => `/posts/${id}`,
    update: (id) => `/posts/${id}`,
    delete: (id) => `/posts/${id}`,
    toggleLike: (id) => `/posts/${id}/reactions`,
    getTaggableUsers: "/posts/taggable-users",
    comment: (postId) => `/posts/${postId}/comments`,
    getComments: (postId) => `/posts/${postId}/comments`,
  },

  // 💬 Comments (Dynamic routes with postId and commentId)
  comments: {
    create: (postId) => `/posts/${postId}/comments`,
    getComments: (postId) => `/posts/${postId}/comments`,
    getReplies: (commentId) => `/posts/comments/${commentId}/replies`,
    update: (id) => `/posts/comments/${id}`,
    delete: (id) => `/posts/comments/${id}`,
    toggleLike: (id) => `/posts/comments/${id}/reactions`,
  },

  // 🔔 Notifications (Dynamic routes)
  notifications: {
    getAll: "/posts/notifications",
    getUnreadCount: "/posts/notifications/unread-count",
    markAsRead: (id) => `/posts/notifications/${id}/read`,
    markAllAsRead: "/posts/notifications/read-all",
    delete: (id) => `/posts/notifications/${id}`,
  },

  // 📤 File Upload (Static route)
  upload: {
    getUploadUrl: "/posts/upload-url",
  },

  // Scanning
  cardScanning: {
    scanCard: "/cards/scan/enhanced",
    getScanningHistory: "/cards/scan/history",
  },

  chatbot: {
    stream: "/chatbot/stream",
  },

  market: {
    createListing: "/market",
    getListings: "/market",
    getListingById: (id) => `/market/${id}`,
    updateListing: (id) => `/market/${id}`,
    deleteListing: (id) => `/market/${id}`,
    buyAListing: (id) => `/market/${id}/buy`,
    markShipped: (id) => `/market/tx/${id}/ship`,
    confirmDelivery: (id) => `/market/tx/${id}/deliver`,
  },

  payments: {
    getOrders: "/orders/admin",
    getOrdersSummary: "/orders/admin/paid-summary",
  },
};
