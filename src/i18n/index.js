import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en", // set locale
  messages: {
    en: {
      nav: {
        books: "Books",
        wishlist: "Wish-list",
      },
      noBooks: "Your books will be stored here!",
      form: {
        title: "Title",
        description: "Description",
        add: "Add",
        save: "Save",
      },
      actions: {
        title: "Choose an action",
        moveToRead: "Move to read",
        moveToWishlist: "Move to wish-list",
        edit: "Edit",
        delete: "Delete",
        dismiss: "Dismiss",
      },
    },
    ru: {
      nav: {
        books: "Прочитано",
        wishlist: "Хочу прочитать",
      },
      noBooks: "Тут будут ваши книжки!",
      form: {
        title: "Название",
        description: "Описание",
        add: "Добавить",
        save: "Сохранить",
      },
      actions: {
        title: "Выберите действие",
        moveToRead: "Переместить в прочитанные",
        moveToWishlist: "Переместить в не прочитанные",
        edit: "Изменить",
        delete: "Удалить",
        dismiss: "Закрыть",
      },
    },
  },
});
