import { observable, action, decorate } from 'mobx';

class MediaStore {
	// Data
	size = 0;

	setSize = (size) => (this.size = size);
}

decorate(MediaStore, {
	size: observable,
	setSize: action
});

export default new MediaStore();
