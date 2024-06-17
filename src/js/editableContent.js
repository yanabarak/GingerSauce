// src/directives/editableContent.js
import { EventBus } from './../eventBus.js';

function applyEditableContent(el) {
  if (el.classList.contains('editable-content')) {
    // Create the wrapping div
    const wrapper = document.createElement('div');
    wrapper.classList.add('editable-wrap');

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      wrapper.previousSibling.remove();
      wrapper.remove();
    });

    // Create the edit button
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      EventBus.$emit('openModal', { element: el, text: el.textContent });
    });

    // Append buttons to the wrapper
    // wrapper.appendChild(el.cloneNode(true));
    wrapper.appendChild(editButton);
    wrapper.appendChild(deleteButton);

    el.after(wrapper);
  }
}

export default {
  inserted(el) {
    applyEditableContent(el);
  },
};

export { applyEditableContent };
