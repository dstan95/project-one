export default {
  addUserModel: [
    {
      size: 'xs12 sm6',
      id: 'at_fname_field',
      type: 'text',
      ref: 'fname',
      validate: 'required|min:2|max:100',
      label: 'First Name',
      errors: null,
      name: 'fname',
      icon: 'fas fa-user-alt',
    },
    {
      size: 'xs12 sm6',
      id: 'at_lname_field',
      type: 'text',
      ref: 'lname',
      validate: 'required|min:2|max:100',
      label: 'Last Name',
      errors: null,
      name: 'lname',
      icon: 'fas fa-user-alt',
    },
    {
      size: 'xs12 sm6',
      id: 'at_username_field',
      type: 'text',
      ref: 'username',
      validate: 'required|min:2|max:100',
      label: 'Username',
      errors: null,
      name: 'username',
      icon: 'fas fa-user-circle',
    },
    {
      size: 'xs12 sm6',
      id: 'at_password_field',
      type: 'password',
      ref: 'password',
      validate: {
        rules: {
          required: true,
        },
      },
      label: 'Password',
      errors: null,
      name: 'password',
      icon: 'fas fa-lock',
      visibility: false,
      counter: true,
    },
    {
      size: 'xs12 sm4',
      id: 'at_email_field',
      type: 'text',
      ref: 'email',
      validate: 'required|email',
      label: 'E-mail',
      errors: null,
      name: 'email',
      icon: 'fas fa-envelope',
    },
  ],
  getAddUserModel() {
    return this.addUserModel;
  },
  updateUserModel: [
    {
      size: 'xs12 sm6',
      id: 'at_fname_field',
      type: 'text',
      ref: 'fname',
      validate: 'required|min:2|max:100',
      label: 'First Name',
      errors: null,
      name: 'fname',
      icon: 'fas fa-user-alt',
    },
    {
      size: 'xs12 sm6',
      id: 'at_lname_field',
      type: 'text',
      ref: 'lname',
      validate: 'required|min:2|max:100',
      label: 'Last Name',
      errors: null,
      name: 'lname',
      icon: 'fas fa-user-alt',
    },
    {
      size: 'xs12 sm6',
      id: 'at_username_field',
      type: 'text',
      ref: 'username',
      validate: 'required|min:2|max:100',
      label: 'Username',
      errors: null,
      name: 'username',
      icon: 'fas fa-user-circle',
    },
    {
      size: 'xs12 sm6',
      id: 'at_password_field',
      type: 'password',
      ref: 'password',
      validate: {
        rules: {
          required: true,
        },
      },
      label: 'Password',
      errors: null,
      name: 'password',
      icon: 'fas fa-lock',
      visibility: false,
      counter: true,
    },
    {
      size: 'xs12 sm4',
      id: 'at_email_field',
      type: 'text',
      ref: 'email',
      validate: 'required|email',
      label: 'E-mail',
      errors: null,
      name: 'email',
      icon: 'fas fa-envelope',
    },
  ],
  getUpdateUserModel() {
    return this.updateUserModel;
  },
  addListModel: [
    {
      size: 'xs12 sm6',
      id: 'at_name_field',
      type: 'text',
      ref: 'name',
      validate: 'required|min:2|max:100',
      label: 'Name',
      errors: null,
      name: 'name',
      icon: 'fas fa-user-alt',
    },
    {
      size: 'xs12 sm6',
      id: 'at_description_field',
      type: 'text',
      ref: 'description',
      validate: 'required|min:2|max:100',
      label: 'Description',
      errors: null,
      name: 'description'
    },
    {
      size: 'xs12 sm6',
      id: 'at_asignee_field',
      type: 'select',
      ref: 'asignee',
      validate: 'reqiured',
      label: 'Asignee',
      errors: null,
      name: 'asignee',
      items: [],
    },
    {
      // de cautat si adaugat readonly pt createdBy
      size: 'xs12 sm6',
      id: 'at_createdBy_field',
      type: 'text',
      ref: 'createdBy',
      validate: 'required',
      label: 'Created By',
      errors: null,
      name: 'createdBy',
    },
    {
      size: 'xs12 sm6',
      id: 'at_tags_field',
      type: 'text',
      ref: 'tags',
      validate: 'required',
      label: 'Tags',
      errors: null,
      name: 'tags'
    },
    {
      size: 'xs12 sm6',
      id: 'at_daysOpen_field',
      type: 'text',
      ref: 'daysOpen',
      validate: 'required',
      label: 'Days Open',
      errors: null,
      name: 'daysOpen'
    },
    {
      size: 'xs12 sm6',
      id: 'at_isActive_id',
      type: 'checkbox',
      ref: 'isActive',
      label: 'Is Active',
      errors: null,
      name: 'isActive'
    }
  ],
  getAddListModel() {
    return this.getAddListModel;
  }
}