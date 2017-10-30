const storage_key = 'todo-list'
export default {
	fetch() {
		return JSON.parse(window.localStorage.getItem(storage_key) || '[]')
	},
	save(items) {
		window.localStorage.setItem(storage_key, JSON.stringify(items))
	}
}