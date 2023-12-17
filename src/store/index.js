import { createStore } from 'vuex'

export const mutation = {
	SET_USERS: 'SET_USERS',
	SET_USER: 'SET_USER',
	SET_POST: 'SET_POST',
	SET_POSTS: 'SET_POSTS',
	SET_PHOTOS: 'SET_PHOTOS',
}

export default createStore({
	state () {
	  return {
		users: [],
		user: {},
		post: {},
		posts: [],
		photos: {},
	  }
	},

	mutations: {
		[mutation.SET_USERS]: (state, users) => {state.users = users},
		[mutation.SET_USER]: (state, user) => {state.user = user},
		[mutation.SET_POST]: (state, post) => {state.post = post},
		[mutation.SET_POSTS]: (state, posts) => {state.posts = posts},
		[mutation.SET_PHOTOS]: (state, photos) => {state.photos = photos},
	},

	getters: {
		users: state => state.users,
		user: state => state.user,
		posts: state => state.posts,
		photos: state => state.photos,
	},

	actions: {
		fetchUsers: ({ dispatch, commit, getters }) => {
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(contacts => {
				commit(mutation.SET_USERS, contacts)
			})
		},
		fetchUser: ({ dispatch, commit, getters }, userId) => {
			fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
			.then(response => response.json())
			.then(users => {
				commit(mutation.SET_USER, users ? users[0] : {})
			})
		},
		fetchCreatePost: ({ dispatch, commit, getters }, post) => {
			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify({
					title: post.title,
					body: post.body,
					userId: post.userId,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}) // fake created
		},
		fetchDeletePost: ({ dispatch, commit, getters }, userId, postId) => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
				method: 'DELETE',
			}) // fake deleted
		},
		fetchUpdatePost: ({ dispatch, commit, getters }, post) => {
			fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
				method: 'PUT',
				body: JSON.stringify({
					id: post.id,
					title: post.title,
					body: post.body,
					userId: post.userId,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			}) // fake updated
		},
		fetchPosts: ({ dispatch, commit, getters }, userId) => {
			fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
			.then(response => response.json())
			.then(postsArray => {
				commit(mutation.SET_POSTS, postsArray)
			})
		},
		addPost: ({ dispatch, commit, getters }, post) => {
			getters.posts.unshift(post);
			commit(mutation.SET_POSTS, getters.posts)
		},
		filterDeletedPost: ({ dispatch, commit, getters }, deletedPostId) => {
			commit(mutation.SET_POSTS, getters.posts.filter(p => p.id != deletedPostId))
		},
		fetchPhotos: ({ dispatch, commit, getters }, userId) => {
			fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
			.then(response => response.json())
			.then(albumsArray => {
				let albums = albumsArray;
				fetch('https://jsonplaceholder.typicode.com/photos')
					.then(response => response.json())
					.then(photosArray => {
						let albumsWithPhotos = {};
						for (let album of albums) {
							albumsWithPhotos[album.title] = photosArray.filter(p => p.albumId == album.id).slice(0, 5);
						};
						commit(mutation.SET_PHOTOS, albumsWithPhotos);
					}
				)}
			);
		}
	}
  })
