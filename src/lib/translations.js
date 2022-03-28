import lang from './lang.json';

export default ({
  en: {
    lang,
    menu: {
      notification: 'You have {{count:gt; 0:{{count}} new {{count; 1:message; default:messages}}!; default:no messages...}}',
    },
    content: {
      title: 'Welcome to SvelteKit',
      info: 'You can now access all your language mutations using <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
      text: 'Visit <a href="{{link}}">kit.svelte.dev</a> to read the documentation',
    },
    page: 'Page',
    header: {
      title: 'test',
      lang: 'language'
    },
    drawer: {
      title: 'Hello world',
      subtitle: 'happy 3 time 4 time 5 time'
    },
    menus: {
      menu1: 'Home',
      menu2: 'User',
      menu3: 'Room'
    },
    login: {
      title: 'Login',
      username: 'User Name',
      password: 'Password'
    },
    gender: {
      mail: 'Mail',
      femail: 'Femail'
    },
    user: {
      titleName: 'TitleName',
      gender: 'Gender',
      title: 'User',
      fullname: 'FullName',
      taxid: 'Tax ID',
      age: 'Age',
      birthdate: 'BirthDate',
      tel: 'Tel',
      addUser: 'Add User',
      name: 'FirstName',
      surname: 'LastName',
      addr: 'Address',
      search: 'Search',
      searchName: 'By Name',
      searchTaxId: 'By TaxID',
      searchTel: 'By Tel'
    },
    room: {
      title: 'Room Number : ',
      search: 'Search',
      searchRoom: 'Search by room number'
    },
    btn: {
      ok: 'OK',
      cancel: 'Cancel',
      add: 'Add',
      delete: 'Delete',
      save: 'Save',

    },
    title: {
      mr: 'Mr.',
      ms: 'Ms.',
      mrs: 'Mrs.',
      menu: 'My Menu Hotel'
    },
  },
  th: {
    lang,
    menu: {
      notification: '{{count:gt; 0:Máte {{count}} {{count:gte; 1:novou zprávu; 2:nové zprávy; 5:nových zpráv}}!; default:Nemáte žádné zprávy...}}',
    },
    content: {
      title: 'Vítejte ve SvelteKit',
      info: 'Nyní máte přístup ke všem jazykovým mutacím prostřednictvím <code>{$l(LOCALE, TRANSLATION_KEY)}</code>:',
      text: 'Dokumentace je k přečtení na <a href="{{link}}">kit.svelte.dev</a>',
    },
    page: 'หน้าจอ',
    header: {
      title: 'ทดสอบ',
      lang: 'ภาษา'
    },
    drawer: {
      title: 'สวัสดีวันจันทร์',
      subtitle: 'มีความสุข สนุก สนานสำราญ เริงใจ'
    },
    menus: {
      menu1: 'หน้าแรก',
      menu2: 'ข้อมูลผู้ใช้งานระบบ',
      menu3: 'ข้อมูลห้องพัก'
    },
    login: {
      title: 'เข้าสู่ระบบ',
      username: 'ชื่อผู้ใช้',
      password: 'รหัสผ่าน'
    },
    user: {
      titleName: 'คำนำหน้าชื่อ',
      gender: 'เพศ',
      title: 'ข้อมูลผู้ใช้งานระบบ',
      fullname: 'ชื่อ - สกุล',
      taxid: 'เลขบัตรประชาชน',
      age: 'อายุ',
      birthdate: 'วันเกิด',
      tel: 'เบอร์โทร',
      addUser: 'เพิ่มข้อมูล ผู้ใช้งาน',
      name: 'ชื่อ',
      surname: 'นามสกุล',
      addr: 'ที่อยู่',
      search: 'ค้นหา',
      searchName: 'ชื่อ',
      searchTaxId: 'เลขบัตรประชาชน',
      searchTel: 'เบอร์โทร'
    },
    room: {
      title: 'เลขที่ห้อง : ',
      search: 'ค้นหา',
      searchRoom: 'ค้นหาด้วยเลขห้อง'
    },
    btn: {
      ok: 'ตกลง',
      cancel: 'ยกเลิก',
      add: 'เพิ่ม',
      delete: 'ลบ',
      save: 'บันทึก'
    },
    gender: {
      mail: 'ชาย',
      femail: 'หญิง'
    },
    title: {
      mr: 'นาย',
      ms: 'นางสาว',
      mrs: 'นาง',
      menu: 'ระบบโรงแรม'
    },
  },
});