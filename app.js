'use strict';

/* =========================================
   1. الترجمات (عربي / إنجليزي)
   ========================================= */
const I18N = {
  ar: {
    appName:'جَدوَل · Jadwal', appTag:'إدارة الجدول الدراسي بذكاء',
    toggleTheme:'الوضع الليلي', changeLang:'تغيير اللغة',
    tabHome:'الرئيسية', tabTeachers:'المعلمون', tabClasses:'الصفوف', tabSchedule:'الجدول', tabReports:'التقارير', tabSettings:'الإعدادات',
    labelTeachers:'معلم', labelClasses:'صف', labelSubjects:'مادة', labelWeekly:'حصة أسبوعيًا',
    genSettings:'إعدادات التوليد', periodsPerDay:'عدد الحصص في اليوم', periodsHint:'عادة 6-8', schoolDays:'أيام الدراسة',
    days5:'5 أيام (أحد-خميس)', days6:'6 أيام (إضافة السبت)',
    generate:'توليد الجدول تلقائيًا', generating:'جاري التوليد...',
    shareTitle:'مشاركة البيانات', shareRole:'الصلاحية', roleEditorOpt:'محرر', roleViewerOpt:'مشاهد',
    createLink:'إنشاء رابط', copy:'نسخ', copied:'تم النسخ ✓',
    howToUse:'كيف تستخدم؟', step1:'أضف الصفوف أولاً', step2:'أضف المعلم واملأ بياناته', step3:'حدد أوقات عدم توفره', step4:'اضغط توليد', step5:'اطبع أو حمّل',
    teachersList:'المعلمون', addTeacher:'إضافة معلم', editTeacher:'تعديل معلم',
    teacherName:'اسم المعلم', teacherNamePlaceholder:'أحمد محمد',
    dailyLimitSection:'الحد اليومي', maxDaily:'أقصى حصص في اليوم',
    maxDailyHint:'السعة الأسبوعية = الحد اليومي × أيام الدوام',
    workingDaysLabel:'أيام الدوام', workingDaysHint:'اختر أيام عمل المعلم',
    assignments:'الصفوف والمواد', addAssignment:'إضافة صف/مادة',
    assignmentsHint:'حدد عدد الحصص لكل مادة',
    summary:'ملخص', basicInfo:'المعلومات الأساسية',
    addClass:'إضافة صف', className:'اسم الصف', classNamePlaceholder:'الأول أ', stage:'المرحلة',
    primary:'ابتدائي', middle:'متوسط', secondary:'إعدادي', classesList:'الصفوف',
    add:'إضافة', save:'حفظ', cancel:'إلغاء', delete:'حذف',
    viewBy:'عرض حسب', viewByClass:'الصف', viewByTeacher:'المعلم', select:'اختر',
    printOptions:'خيارات الطباعة', paperSize:'حجم الورق', orientation:'الاتجاه',
    landscape:'أفقي (عرضي)', portrait:'عمودي (طولي)',
    colorMode:'لون الجدول', colorTheme:'لون الواجهة الحالي', colorBlue:'أزرق', colorGreen:'أخضر', colorPurple:'بنفسجي', colorOrange:'برتقالي', colorRed:'أحمر', colorGray:'رمادي', colorBw:'أبيض وأسود',
    printCurrent:'طباعة الحالي', printAll:'طباعة الكل',
    excelCurrent:'Excel الحالي', excelAll:'Excel شامل',
    totalRequired:'المطلوب', totalPlaced:'الموزعة', warningsCount:'تحذيرات',
    teachersDistribution:'توزيع المعلمين', classesDistribution:'توزيع الصفوف', warningsList:'التحذيرات',
    termInfo:'بيانات الفصل', termName:'اسم الفصل', startDate:'البداية', endDate:'النهاية',
    holidays:'العطل', holidayName:'المناسبة', holidayDate:'التاريخ',
    backup:'نسخ احتياطي', download:'تحميل', restore:'استعادة', dangerZone:'منطقة الخطر', resetAll:'حذف الكل',
    unavailTitle:'أوقات عدم التوفر', unavailHint:'انقر لتبديل الحالة', saveClose:'حفظ وإغلاق',
    noTeachers:'لا يوجد معلمون بعد', noClasses:'لا توجد صفوف بعد',
    noSchedule:'لم يتم توليد الجدول بعد', noScheduleHint:'اذهب للرئيسية واضغط توليد',
    classSchedule:'جدول الصف', teacherSchedule:'جدول المعلم',
    hours:'حصة', days:'أيام',
    deleteConfirmTeacher:'حذف المعلم وكل مواده؟', deleteConfirmClass:'حذف الصف وكل مواده؟',
    deleteConfirmReset:'حذف كل البيانات؟',
    needName:'ادخل الاسم', needWorkingDays:'اختر يوم دوام واحد على الأقل',
    needClassOrSubject:'أضف صفًا ومادة واحدة على الأقل', exists:'موجود مسبقًا',
    added:'تم ✓', updated:'تم ✓', deleted:'تم ✓',
    generated:'تم التوليد ✓', partialGen:'حصة لم توزع', error:'حدث خطأ',
    noData:'لا يوجد جدول', downloaded:'تم التحميل ✓',
    shareReady:'الرابط جاهز ✓', importedFromLink:'تم الاستيراد ✓',
    termSaved:'تم الحفظ ✓', holidayAdded:'تمت الإضافة ✓', noHolidays:'لا توجد عطل',
    restored:'تمت الاستعادة ✓', invalidFile:'ملف غير صالح', saved:'تم الحفظ ✓',
    selectEntity:'اختر عنصرًا', unavailable:'محظورة',
    statusOK:'✅ يمكن الحفظ والتوليد', statusWarn:'⚠️ السعة ممتلئة',
    statusDangerDays:'❌ اختر يوم دوام', statusDangerOver:'❌ الحصص أكثر من السعة',
    statusWarnZero:'⚠️ أضف صفًا', capacity:'السعة', totalAssigned:'المطلوبة',
    workingDays:'أيام الدوام', dailyLimit:'يومي',
    capacityFormula:'{d} × {m} = {c}',
    remaining:'متبقٍ {n}',
    classLabel:'الصف', subjectPlaceholder:'المادة',
    addClassesFirst:'أضف صفوفًا أولاً',
    cannotGenerate:'لا يمكن التوليد:', fixThenRetry:'عالج المشاكل',
    partialGenerated:'توليد جزئي:',
    excelGenerated:'تم إنشاء ملف Excel ✓',
    printAllHint:'على A3 أفقي، كل المعلمين في صفحة واحدة',
    needHours:'أدخل عدد الحصص',
    dayColHeader:'اليوم'
  },
  en: {
    appName:'Jadwal · جَدوَل', appTag:'Smart School Scheduling',
    toggleTheme:'Theme', changeLang:'Language',
    tabHome:'Home', tabTeachers:'Teachers', tabClasses:'Classes', tabSchedule:'Schedule', tabReports:'Reports', tabSettings:'Settings',
    labelTeachers:'Teachers', labelClasses:'Classes', labelSubjects:'Subjects', labelWeekly:'Weekly hours',
    genSettings:'Generation Settings', periodsPerDay:'Periods per day', periodsHint:'usually 6-8', schoolDays:'School days',
    days5:'5 days (Sun-Thu)', days6:'6 days (add Saturday)',
    generate:'Generate schedule', generating:'Generating...',
    shareTitle:'Share Data', shareRole:'Access', roleEditorOpt:'Editor', roleViewerOpt:'Viewer',
    createLink:'Create link', copy:'Copy', copied:'Copied ✓',
    howToUse:'How to use?', step1:'Add classes first', step2:'Add teacher with info', step3:'Set unavailable times', step4:'Click Generate', step5:'Print or download',
    teachersList:'Teachers', addTeacher:'Add Teacher', editTeacher:'Edit Teacher',
    teacherName:'Teacher name', teacherNamePlaceholder:'John Smith',
    dailyLimitSection:'Daily Limit', maxDaily:'Max hours per day',
    maxDailyHint:'Weekly capacity = daily × working days',
    workingDaysLabel:'Working Days', workingDaysHint:'Choose working days',
    assignments:'Classes & Subjects', addAssignment:'Add Class/Subject',
    assignmentsHint:'Enter hours per subject',
    summary:'Summary', basicInfo:'Basic Info',
    addClass:'Add Class', className:'Class name', classNamePlaceholder:'Grade 1A', stage:'Stage',
    primary:'Primary', middle:'Middle', secondary:'Secondary', classesList:'Classes',
    add:'Add', save:'Save', cancel:'Cancel', delete:'Delete',
    viewBy:'View by', viewByClass:'Class', viewByTeacher:'Teacher', select:'Select',
    printOptions:'Print Options', paperSize:'Paper size', orientation:'Orientation',
    landscape:'Landscape', portrait:'Portrait',
    colorMode:'Table Color', colorTheme:'Theme Color', colorBlue:'Blue', colorGreen:'Green', colorPurple:'Purple', colorOrange:'Orange', colorRed:'Red', colorGray:'Gray', colorBw:'Black & White',
    printCurrent:'Print Current', printAll:'Print All',
    excelCurrent:'Excel Current', excelAll:'Excel All',
    totalRequired:'Required', totalPlaced:'Placed', warningsCount:'Warnings',
    teachersDistribution:'Teachers Distribution', classesDistribution:'Classes Distribution', warningsList:'Warnings',
    termInfo:'Term Info', termName:'Term name', startDate:'Start date', endDate:'End date',
    holidays:'Holidays', holidayName:'Holiday name', holidayDate:'Date',
    backup:'Backup', download:'Download', restore:'Restore', dangerZone:'Danger Zone', resetAll:'Delete All',
    unavailTitle:'Unavailable Times', unavailHint:'Click to toggle', saveClose:'Save & Close',
    noTeachers:'No teachers yet', noClasses:'No classes yet',
    noSchedule:'Schedule not generated yet', noScheduleHint:'Go to Home and click Generate',
    classSchedule:'Class Schedule', teacherSchedule:'Teacher Schedule',
    hours:'hours', days:'days',
    deleteConfirmTeacher:'Delete teacher and all subjects?', deleteConfirmClass:'Delete class and all subjects?',
    deleteConfirmReset:'Delete all data?',
    needName:'Enter name', needWorkingDays:'Choose at least one day',
    needClassOrSubject:'Add at least one class & subject', exists:'Already exists',
    added:'Done ✓', updated:'Done ✓', deleted:'Done ✓',
    generated:'Generated ✓', partialGen:'unplaced hours', error:'Error',
    noData:'No schedule', downloaded:'Downloaded ✓',
    shareReady:'Link ready ✓', importedFromLink:'Imported ✓',
    termSaved:'Saved ✓', holidayAdded:'Added ✓', noHolidays:'No holidays',
    restored:'Restored ✓', invalidFile:'Invalid file', saved:'Saved ✓',
    selectEntity:'Select an item', unavailable:'blocked',
    statusOK:'✅ Ready', statusWarn:'⚠️ Full capacity',
    statusDangerDays:'❌ Choose a day', statusDangerOver:'❌ Over capacity',
    statusWarnZero:'⚠️ Add assignment', capacity:'Capacity', totalAssigned:'Required',
    workingDays:'Working days', dailyLimit:'Daily',
    capacityFormula:'{d} × {m} = {c}',
    remaining:'{n} spare',
    classLabel:'Class', subjectPlaceholder:'Subject',
    addClassesFirst:'Add classes first',
    cannotGenerate:'Cannot generate:', fixThenRetry:'Fix issues',
    partialGenerated:'Partially generated:',
    excelGenerated:'Excel file created ✓',
    printAllHint:'On A3 landscape, all teachers on one page',
    needHours:'Enter hours',
    dayColHeader:'Day'
  }
};

let currentLang = localStorage.getItem('jadwal-lang') || 'ar';
const t = (k) => (I18N[currentLang] && I18N[currentLang][k]) || k;
const tf = (k, v) => { let s = t(k); Object.keys(v||{}).forEach(x => { s = s.replace('{'+x+'}', v[x]); }); return s; };

const ALL_DAY_KEYS = ['sun','mon','tue','wed','thu','sat'];
const DAY_NAMES = {
  ar:{sun:'الأحد',mon:'الاثنين',tue:'الثلاثاء',wed:'الأربعاء',thu:'الخميس',sat:'السبت'},
  en:{sun:'Sunday',mon:'Monday',tue:'Tuesday',wed:'Wednesday',thu:'Thursday',sat:'Saturday'}
};
const getDayKeys = () => ALL_DAY_KEYS.slice(0, Math.max(1, Math.min(6, state.settings.days || 5)));
const dayName = (key) => DAY_NAMES[currentLang]?.[key] || key;

/* =========================================
   2. حالة التطبيق
   ========================================= */
const defaultState = () => ({
  teachers: [], classes: [], requirements: [],
  schedule: null,
  settings: { periods: 7, days: 5 },
  calendar: { term:'', startDate:'', endDate:'', holidays:[] },
  role: 'admin'
});
let state = defaultState();

let saveTimer = null;
function save(){ clearTimeout(saveTimer); saveTimer = setTimeout(() => { try{ localStorage.setItem('jadwal-state', JSON.stringify(state)); }catch(e){} }, 300); }
function saveNow(){ clearTimeout(saveTimer); try{ localStorage.setItem('jadwal-state', JSON.stringify(state)); }catch(e){} }

function load(){
  try{
    const s = localStorage.getItem('jadwal-state');
    if(!s) return;
    const p = JSON.parse(s);
    state = { ...defaultState(), ...p };
    if(!state.calendar) state.calendar = defaultState().calendar;
    if(!state.role) state.role = 'admin';
    if(!state.settings) state.settings = { periods: 7, days: 5 };
    if(!state.teachers) state.teachers = [];
    if(!state.classes) state.classes = [];
    if(!state.requirements) state.requirements = [];

    state.teachers = state.teachers.filter(tc => tc && tc.id && tc.name).map(tc => {
      const wd = Array.isArray(tc.workingDays) && tc.workingDays.length > 0 ? tc.workingDays : ['sun','mon','tue','wed','thu'];
      const maxDay = Math.max(1, parseInt(tc.maxDay) || 6);
      return {
        ...tc, maxDay, maxWeek: maxDay * wd.length, workingDays: wd,
        unavailable: Array.isArray(tc.unavailable) ? tc.unavailable : [],
        stage: tc.stage || 'primary'
      };
    });
    state.classes = state.classes.filter(c => c && c.id && c.name);
    const classIds = new Set(state.classes.map(c => c.id));
    const teacherIds = new Set(state.teachers.map(t => t.id));
    state.requirements = state.requirements
      .filter(r => r && r.id && classIds.has(r.classId) && teacherIds.has(r.teacherId))
      .map(r => ({ ...r, weekly: Math.max(1, parseInt(r.weekly) || 1), subject: String(r.subject || '') }));
    if(state.schedule && (typeof state.schedule !== 'object' || !state.schedule.grid)) state.schedule = null;
  }catch(e){ console.error(e); state = defaultState(); }
}

const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2,8);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function toast(msg, type=''){
  try{
    const el = document.getElementById('toast');
    if(!el) return;
    el.textContent = msg;
    el.className = 'toast show ' + type;
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), 3200);
  }catch(e){}
}
function debounce(fn, ms){ let t; return function(...a){ clearTimeout(t); t = setTimeout(() => fn.apply(this,a), ms); }; }

/* =========================================
   3. الثيم (نهاري/ليلي)
   ========================================= */
document.documentElement.setAttribute('data-theme', localStorage.getItem('jadwal-theme') || 'light');

function updateThemeIcon(){
  const theme = document.documentElement.getAttribute('data-theme');
  document.getElementById('theme-icon').innerHTML = '<use href="#' + (theme === 'light' ? 'i-moon' : 'i-sun') + '"/>';
}

document.getElementById('theme-btn').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('jadwal-theme', next);
  updateThemeIcon();
});

/* =========================================
   4. التبويبات واللغة
   ========================================= */
function goToTab(name){
  const btn = document.querySelector('[data-tab="' + name + '"]');
  if(btn) btn.click();
}
window.goToTab = goToTab;

document.querySelectorAll('.tabs button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.tabs button').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    const panel = document.getElementById(b.dataset.tab);
    if(panel) panel.classList.add('active');
    if(b.dataset.tab === 'reports') try{ renderReports(); }catch(e){}
    if(b.dataset.tab === 'settings') try{ renderSettings(); }catch(e){}
    if(b.dataset.tab === 'schedule') try{ renderScheduleSelect(); }catch(e){}
  });
});

function applyLanguage(){
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if(!key) return;
    const span = el.querySelector('span');
    if(span) span.textContent = t(key);
    else if(!el.querySelector('*')) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.querySelectorAll('[data-i18n-title]').forEach(el => el.title = t(el.dataset.i18nTitle));
  document.querySelectorAll('option[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));

  const tmTitle = document.getElementById('tm-title');
  if(tmTitle){
    const isEdit = tmTitle.dataset.edit === '1';
    tmTitle.innerHTML = '<svg><use href="#' + (isEdit ? 'i-edit' : 'i-user-plus') + '"/></svg> <span>' + t(isEdit ? 'editTeacher' : 'addTeacher') + '</span>';
  }

  try{ render(); }catch(e){}
  try{ updateTeacherSummary(); }catch(e){}
  try{ renderScheduleSelect(); }catch(e){}
}

document.getElementById('lang-btn').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('jadwal-lang', currentLang);
  applyLanguage();
  const activeTab = document.querySelector('.tabs button.active');
  if(activeTab){
    if(activeTab.dataset.tab === 'reports') renderReports();
    if(activeTab.dataset.tab === 'settings') renderSettings();
    if(activeTab.dataset.tab === 'schedule') renderScheduleSelect();
  }
});

/* =========================================
   5. نافذة المعلم (إضافة / تعديل)
   ========================================= */
let tmWorkingDays = [];
let tmAssignments = [];
let tmEditId = null;

function openTeacherModal(editId){
  try{
    if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
    if(!editId && state.classes.length === 0){ toast(t('addClassesFirst'), 'error'); return; }

    tmEditId = editId || null;
    const tmTitle = document.getElementById('tm-title');
    tmTitle.dataset.edit = editId ? '1' : '0';
    tmTitle.innerHTML = '<svg><use href="#' + (editId ? 'i-edit' : 'i-user-plus') + '"/></svg> <span>' + t(editId ? 'editTeacher' : 'addTeacher') + '</span>';

    document.getElementById('tm-name').value = '';
    document.getElementById('tm-stage').value = 'primary';
    document.getElementById('tm-max-day').value = 6;
    tmWorkingDays = getDayKeys().slice();
    tmAssignments = [{ classId:'', subject:'', weekly:'' }];

    if(editId){
      const teacher = state.teachers.find(x => x.id === editId);
      if(!teacher){ toast(t('error'), 'error'); return; }
      document.getElementById('tm-name').value = teacher.name || '';
      document.getElementById('tm-stage').value = teacher.stage || 'primary';
      document.getElementById('tm-max-day').value = teacher.maxDay || 6;
      tmWorkingDays = Array.isArray(teacher.workingDays) ? teacher.workingDays.filter(k => getDayKeys().includes(k)) : getDayKeys().slice();
      if(tmWorkingDays.length === 0) tmWorkingDays = getDayKeys().slice();
      const reqs = state.requirements.filter(r => r.teacherId === editId);
      if(reqs.length > 0) tmAssignments = reqs.map(r => ({ classId: r.classId, subject: r.subject, weekly: r.weekly }));
    }
    renderWorkingDaysCheckboxes();
    renderAssignmentsRows();
    updateTeacherSummary();
    document.getElementById('teacher-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
  }catch(e){ console.error(e); toast(t('error'), 'error'); }
}
window.openTeacherModal = openTeacherModal;

function closeTeacherModal(){
  document.getElementById('teacher-modal').classList.remove('show');
  document.body.style.overflow = '';
}
window.closeTeacherModal = closeTeacherModal;

function renderWorkingDaysCheckboxes(){
  const el = document.getElementById('tm-working-days');
  if(!el) return;
  const dayKeys = getDayKeys();
  tmWorkingDays = tmWorkingDays.filter(k => dayKeys.includes(k));
  el.innerHTML = dayKeys.map(k => {
    const checked = tmWorkingDays.includes(k);
    return '<div class="day-checkbox"><input type="checkbox" id="wd-' + k + '" data-day="' + k + '" ' + (checked?'checked':'') + '><label for="wd-' + k + '">' + esc(dayName(k)) + '</label></div>';
  }).join('');
  el.querySelectorAll('input[data-day]').forEach(input => {
    input.addEventListener('change', () => {
      const k = input.dataset.day;
      if(input.checked){ if(!tmWorkingDays.includes(k)) tmWorkingDays.push(k); }
      else { tmWorkingDays = tmWorkingDays.filter(x => x !== k); }
      updateTeacherSummary();
    });
  });
}

function renderAssignmentsRows(){
  const el = document.getElementById('tm-assignments');
  if(!el) return;
  if(tmAssignments.length === 0) tmAssignments.push({ classId:'', subject:'', weekly:'' });
  el.innerHTML = tmAssignments.map((a, i) => {
    const classOptions = state.classes.map(c => '<option value="' + c.id + '"' + (a.classId===c.id?' selected':'') + '>' + esc(c.name) + '</option>').join('');
    return '<div class="assignment-row" data-index="' + i + '">' +
      '<select class="assign-class" data-i="' + i + '"><option value="">-- ' + t('classLabel') + ' --</option>' + classOptions + '</select>' +
      '<input type="text" class="assign-subject" data-i="' + i + '" value="' + esc(a.subject) + '" placeholder="' + t('subjectPlaceholder') + '">' +
      '<input type="number" class="assign-weekly" data-i="' + i + '" value="' + (a.weekly || '') + '" min="1" max="15" placeholder="' + t('hours') + '" title="' + t('hours') + '">' +
      '<button type="button" class="remove-btn" onclick="removeAssignmentRow(' + i + ')"><svg><use href="#i-x"/></svg></button>' +
    '</div>';
  }).join('');
  el.querySelectorAll('.assign-class').forEach(s => s.addEventListener('change', (e) => {
    const i = parseInt(e.target.dataset.i);
    if(tmAssignments[i]) tmAssignments[i].classId = e.target.value;
    updateTeacherSummary();
  }));
  el.querySelectorAll('.assign-subject').forEach(s => s.addEventListener('input', (e) => {
    const i = parseInt(e.target.dataset.i);
    if(tmAssignments[i]) tmAssignments[i].subject = e.target.value;
  }));
  el.querySelectorAll('.assign-weekly').forEach(s => s.addEventListener('input', (e) => {
    const i = parseInt(e.target.dataset.i);
    if(tmAssignments[i]) tmAssignments[i].weekly = parseInt(e.target.value) || 0;
    updateTeacherSummary();
  }));
}

function addAssignmentRow(){ tmAssignments.push({ classId:'', subject:'', weekly:'' }); renderAssignmentsRows(); updateTeacherSummary(); }
window.addAssignmentRow = addAssignmentRow;
function removeAssignmentRow(i){
  if(tmAssignments.length <= 1) tmAssignments[0] = { classId:'', subject:'', weekly:'' };
  else tmAssignments.splice(i, 1);
  renderAssignmentsRows(); updateTeacherSummary();
}
window.removeAssignmentRow = removeAssignmentRow;

function updateTeacherSummary(){
  try{
    const summaryEl = document.getElementById('tm-summary');
    if(!summaryEl) return;
    const maxDay = Math.max(1, parseInt(document.getElementById('tm-max-day').value) || 6);
    const wDays = tmWorkingDays.length;
    const capacity = maxDay * wDays;
    const totalAssigned = tmAssignments.reduce((s, a) => s + (parseInt(a.weekly) || 0), 0);

    let statusClass = 'ok', statusText = t('statusOK'), saveDisabled = false;
    if(wDays === 0){ statusClass = 'danger'; statusText = t('statusDangerDays'); saveDisabled = true; }
    else if(totalAssigned > capacity){ statusClass = 'danger'; statusText = t('statusDangerOver') + ' (' + totalAssigned + ' > ' + capacity + ')'; saveDisabled = true; }
    else if(totalAssigned === 0){ statusClass = 'warn'; statusText = t('statusWarnZero'); saveDisabled = true; }
    else if(totalAssigned === capacity){ statusClass = 'warn'; statusText = t('statusWarn'); }
    else { statusText = t('statusOK') + ' — ' + tf('remaining', { n: capacity - totalAssigned }); }

    summaryEl.innerHTML = '<div class="summary-grid">' +
      '<div class="summary-item"><div class="lbl">' + t('workingDays') + '</div><div class="val">' + wDays + '</div></div>' +
      '<div class="summary-item"><div class="lbl">' + t('dailyLimit') + '</div><div class="val">' + maxDay + '</div></div>' +
      '<div class="summary-item"><div class="lbl">' + t('capacity') + '</div><div class="val">' + capacity + '</div></div>' +
      '<div class="summary-item ' + (totalAssigned > capacity ? 'danger' : totalAssigned === capacity ? 'warn' : '') + '"><div class="lbl">' + t('totalAssigned') + '</div><div class="val">' + totalAssigned + '</div></div>' +
      '</div><div class="summary-status ' + statusClass + '">' + statusText + '</div>' +
      '<div class="form-hint" style="margin-top:8px;text-align:center">' + tf('capacityFormula', { d: wDays, m: maxDay, c: capacity }) + '</div>';

    const saveBtn = document.getElementById('tm-save-btn');
    if(saveBtn) saveBtn.disabled = saveDisabled;
  }catch(e){}
}

function saveTeacherFromModal(){
  try{
    if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
    const name = document.getElementById('tm-name').value.trim();
    const stage = document.getElementById('tm-stage').value;
    const maxDay = Math.max(1, parseInt(document.getElementById('tm-max-day').value) || 6);
    const wDays = tmWorkingDays.length;

    if(!name){ toast(t('needName'), 'error'); return; }
    if(wDays === 0){ toast(t('needWorkingDays'), 'error'); return; }

    const capacity = maxDay * wDays;
    const valid = tmAssignments.filter(a => a.classId && a.subject.trim() && (parseInt(a.weekly) || 0) > 0);
    const totalAssigned = valid.reduce((s, a) => s + (parseInt(a.weekly)||0), 0);

    if(valid.length === 0){ toast(t('needClassOrSubject'), 'error'); return; }
    if(totalAssigned > capacity){ toast(t('statusDangerOver'), 'error'); return; }
    if(state.teachers.some(x => x.name === name && x.id !== tmEditId)){ toast(t('exists'), 'error'); return; }

    const teacherId = tmEditId || genId();
    if(tmEditId){
      const teacher = state.teachers.find(x => x.id === tmEditId);
      if(!teacher){ toast(t('error'), 'error'); return; }
      teacher.name = name; teacher.stage = stage; teacher.maxDay = maxDay;
      teacher.maxWeek = capacity; teacher.workingDays = tmWorkingDays.slice();
      state.requirements = state.requirements.filter(r => r.teacherId !== tmEditId);
    } else {
      state.teachers.push({ id: teacherId, name, stage, maxDay, maxWeek: capacity, workingDays: tmWorkingDays.slice(), unavailable: [] });
    }

    valid.forEach(a => {
      state.requirements.push({ id: genId(), teacherId, classId: a.classId, subject: a.subject.trim(), weekly: parseInt(a.weekly) || 1 });
    });

    state.schedule = null;
    saveNow(); closeTeacherModal(); render();
    toast(tmEditId ? t('updated') : t('added'), 'success');
  }catch(e){ console.error(e); toast(t('error'), 'error'); }
}
window.saveTeacherFromModal = saveTeacherFromModal;

/* =========================================
   6. الصفوف
   ========================================= */
document.getElementById('add-class-btn').addEventListener('click', () => {
  try{
    if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
    const name = document.getElementById('class-name').value.trim();
    const stage = document.getElementById('class-stage').value;
    if(!name){ toast(t('needName'), 'error'); return; }
    if(state.classes.some(x => x.name === name)){ toast(t('exists'), 'error'); return; }
    state.classes.push({ id: genId(), name, stage });
    document.getElementById('class-name').value = '';
    save(); render(); toast(t('added'), 'success');
  }catch(e){}
});

document.getElementById('add-teacher-btn').addEventListener('click', () => openTeacherModal(null));

window.deleteTeacher = (id) => {
  if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
  if(!confirm(t('deleteConfirmTeacher'))) return;
  state.teachers = state.teachers.filter(x => x.id !== id);
  state.requirements = state.requirements.filter(x => x.teacherId !== id);
  state.schedule = null;
  saveNow(); render(); toast(t('deleted'));
};
window.deleteClass = (id) => {
  if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
  if(!confirm(t('deleteConfirmClass'))) return;
  state.classes = state.classes.filter(x => x.id !== id);
  state.requirements = state.requirements.filter(x => x.classId !== id);
  state.schedule = null;
  saveNow(); render(); toast(t('deleted'));
};

/* =========================================
   7. أوقات عدم التوفر
   ========================================= */
let editingTeacherId = null;
window.openUnavailModal = (teacherId) => {
  try{
    if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
    const teacher = state.teachers.find(x => x.id === teacherId);
    if(!teacher) return;
    editingTeacherId = teacherId;
    document.getElementById('modal-teacher-name').textContent = teacher.name;
    renderUnavailGrid();
    document.getElementById('modal').classList.add('show');
    document.body.style.overflow = 'hidden';
  }catch(e){}
};

function renderUnavailGrid(){
  try{
    const teacher = state.teachers.find(x => x.id === editingTeacherId);
    if(!teacher) return;
    const unavailable = teacher.unavailable || [];
    const periods = Math.max(1, state.settings.periods || 7);
    const teacherDays = (teacher.workingDays || getDayKeys()).filter(k => getDayKeys().includes(k));
    if(teacherDays.length === 0){ document.getElementById('modal-grid').innerHTML = '<div class="empty-state"><p>' + t('noClasses') + '</p></div>'; return; }
    let html = '<div class="table-scroll"><table class="unavail-table"><thead><tr><th>#</th>';
    for(let p = 1; p <= periods; p++) html += '<th>' + p + '</th>';
    html += '</tr></thead><tbody>';
    teacherDays.forEach(d => {
      html += '<tr><td class="day-cell">' + esc(dayName(d)) + '</td>';
      for(let p = 1; p <= periods; p++){
        const key = d + '-' + p;
        const blocked = unavailable.includes(key);
        html += '<td class="' + (blocked ? 'unavail' : 'avail') + '" data-key="' + esc(key) + '">' + (blocked ? '✕' : '✓') + '</td>';
      }
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    document.getElementById('modal-grid').innerHTML = html;
    document.querySelectorAll('#modal-grid td[data-key]').forEach(cell => {
      cell.addEventListener('click', () => {
        const tt = state.teachers.find(x => x.id === editingTeacherId);
        if(!tt) return;
        if(!tt.unavailable) tt.unavailable = [];
        const key = cell.dataset.key;
        const i = tt.unavailable.indexOf(key);
        if(i >= 0) tt.unavailable.splice(i, 1); else tt.unavailable.push(key);
        save();
        renderUnavailGrid();
      });
    });
  }catch(e){}
}
document.getElementById('modal-close').addEventListener('click', () => { document.getElementById('modal').classList.remove('show'); document.body.style.overflow = ''; });
document.getElementById('modal-save').addEventListener('click', () => { document.getElementById('modal').classList.remove('show'); document.body.style.overflow = ''; render(); toast(t('saved'), 'success'); });
document.getElementById('modal').addEventListener('click', (e) => { if(e.target.id === 'modal'){ document.getElementById('modal').classList.remove('show'); document.body.style.overflow = ''; } });
document.getElementById('teacher-modal').addEventListener('click', (e) => { if(e.target.id === 'teacher-modal') closeTeacherModal(); });

/* =========================================
   8. الرسم الأساسي للصفحة
   ========================================= */
function render(){
  try{
    document.getElementById('stat-teachers').textContent = state.teachers.length;
    document.getElementById('stat-classes').textContent = state.classes.length;
    document.getElementById('stat-requirements').textContent = state.requirements.length;
    document.getElementById('stat-hours').textContent = state.requirements.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
    renderTeachers(); renderClasses(); renderScheduleSelect(); renderAlerts();
    applyRole();
  }catch(e){}
}

function renderTeachers(){
  const el = document.getElementById('teachers-list');
  if(!el) return;
  if(state.teachers.length === 0){
    el.innerHTML = '<div class="empty-state"><svg><use href="#i-users"/></svg><p>' + t('noTeachers') + '</p></div>';
    return;
  }
  const stages = { primary:'primary', middle:'middle', secondary:'secondary' };
  el.innerHTML = state.teachers.map(tc => {
    const reqs = state.requirements.filter(r => r.teacherId === tc.id);
    const totalWeekly = reqs.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
    const wDays = (tc.workingDays || getDayKeys()).filter(k => getDayKeys().includes(k));
    const capacity = (tc.maxDay || 6) * wDays.length;
    const unavailCount = (tc.unavailable || []).length;
    const fillPct = capacity > 0 ? Math.round((totalWeekly/capacity)*100) : 0;
    const fillClass = fillPct > 100 ? 'danger' : fillPct > 90 ? 'warning' : 'success';

    const assignmentsHTML = reqs.length > 0
      ? '<div class="assignments-preview">' + reqs.map(r => {
          const cls = state.classes.find(c => c.id === r.classId);
          return '<span class="assign-chip"><svg><use href="#i-book"/></svg>' + esc(r.subject) + ' · ' + esc(cls ? cls.name : '?') + ' <b>(' + r.weekly + ')</b></span>';
        }).join('') + '</div>'
      : '';

    const dayChips = wDays.map(k => '<span class="badge badge-info">' + esc(dayName(k).slice(0,3)) + '</span>').join('');

    const actions = state.role === 'viewer' ? '' :
      '<div class="actions">' +
        '<button class="icon-btn" onclick="openTeacherModal(\'' + tc.id + '\')"><svg><use href="#i-edit"/></svg></button>' +
        '<button class="icon-btn" onclick="openUnavailModal(\'' + tc.id + '\')"><svg><use href="#i-clock"/></svg></button>' +
        '<button class="icon-btn danger" onclick="deleteTeacher(\'' + tc.id + '\')"><svg><use href="#i-trash"/></svg></button>' +
      '</div>';

    return '<div class="list-item"><div class="info">' +
      '<div class="title">' + esc(tc.name) + ' <span class="badge badge-primary">' + t(stages[tc.stage] || 'primary') + '</span></div>' +
      '<div class="meta">' +
        '<span class="badge badge-' + fillClass + '"><svg><use href="#i-chart"/></svg>' + totalWeekly + ' / ' + capacity + '</span>' +
        '<span class="badge badge-primary"><svg><use href="#i-calendar"/></svg>' + wDays.length + ' ' + t('days') + '</span>' +
        (unavailCount > 0 ? '<span class="badge badge-danger"><svg><use href="#i-clock"/></svg>' + unavailCount + '</span>' : '') +
      '</div><div class="meta" style="margin-top:5px">' + dayChips + '</div>' + assignmentsHTML +
      '</div>' + actions + '</div>';
  }).join('');
}

function renderClasses(){
  const el = document.getElementById('classes-list');
  if(!el) return;
  if(state.classes.length === 0){
    el.innerHTML = '<div class="empty-state"><svg><use href="#i-building"/></svg><p>' + t('noClasses') + '</p></div>';
    return;
  }
  const stages = { primary:'primary', middle:'middle', secondary:'secondary' };
  el.innerHTML = state.classes.map(c => {
    const reqs = state.requirements.filter(r => r.classId === c.id);
    const totalWeekly = reqs.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
    const actions = state.role === 'viewer' ? '' :
      '<button class="icon-btn danger" onclick="deleteClass(\'' + c.id + '\')"><svg><use href="#i-trash"/></svg></button>';
    return '<div class="list-item"><div class="info"><div class="title">' + esc(c.name) +
      ' <span class="badge badge-primary">' + t(stages[c.stage] || 'primary') + '</span></div>' +
      '<div class="meta"><span class="badge badge-success"><svg><use href="#i-clock"/></svg>' + totalWeekly + ' ' + t('hours') + '</span>' +
      '<span class="badge badge-info"><svg><use href="#i-book"/></svg>' + reqs.length + '</span></div>' +
      '</div>' + actions + '</div>';
  }).join('');
}

function renderScheduleSelect(){
  try{
    const view = document.getElementById('schedule-view').value;
    const sel = document.getElementById('schedule-entity');
    if(!sel) return;
    const cur = sel.value;
    if(view === 'class') sel.innerHTML = state.classes.map(c => '<option value="' + c.id + '">' + esc(c.name) + '</option>').join('');
    else sel.innerHTML = state.teachers.map(tc => '<option value="' + tc.id + '">' + esc(tc.name) + '</option>').join('');
    if(cur && [...sel.options].some(o => o.value === cur)) sel.value = cur;
    renderScheduleDisplay();
  }catch(e){}
}

function analyzeConstraints(){
  const alerts = [];
  try{
    const dayKeys = getDayKeys();
    const days = dayKeys.length;
    const periods = Math.max(1, state.settings.periods || 7);
    const slotsPerClass = days * periods;

    state.classes.forEach(cls => {
      const reqs = state.requirements.filter(r => r.classId === cls.id);
      const required = reqs.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
      if(required > slotsPerClass) alerts.push({ type:'error', text: cls.name + ': ' + required + ' > ' + slotsPerClass });
      reqs.forEach(r => {
        if((parseInt(r.weekly)||0) > days) alerts.push({ type:'error', text: r.subject + ' · ' + cls.name + ': ' + r.weekly + ' > ' + days + ' days' });
      });
    });

    state.teachers.forEach(tc => {
      const reqs = state.requirements.filter(r => r.teacherId === tc.id);
      const required = reqs.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
      const wDays = (tc.workingDays || dayKeys).filter(k => dayKeys.includes(k));
      const capacity = wDays.length * (tc.maxDay || 6);
      if(required > capacity) alerts.push({ type:'error', text: tc.name + ': ' + required + ' > ' + capacity });
      reqs.forEach(r => {
        if((parseInt(r.weekly)||0) > wDays.length) alerts.push({ type:'error', text: tc.name + ' · ' + r.subject + ': ' + r.weekly + ' > ' + wDays.length });
      });
    });

    if(alerts.length === 0 && state.teachers.length > 0 && state.classes.length > 0 && state.requirements.length > 0){
      alerts.push({ type:'success', text: currentLang === 'ar' ? 'كل البيانات متوازنة ✅' : 'All data balanced ✅' });
    }
  }catch(e){}
  return alerts;
}

function renderAlerts(){
  const container = document.getElementById('alerts-container');
  if(!container) return;
  const alerts = analyzeConstraints();
  if(alerts.length === 0){ container.innerHTML = ''; return; }
  const icons = { error:'i-x-circle', warning:'i-alert', success:'i-check-circle', info:'i-info' };
  container.innerHTML = alerts.map(a => '<div class="alert alert-' + a.type + '"><svg><use href="#' + icons[a.type] + '"/></svg><span>' + a.text + '</span></div>').join('');
}

/* =========================================
   9. خوارزمية التوليد
   ========================================= */
function shuffle(a){ for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; }

function tryGenerate(){
  const periods = Math.max(1, parseInt(state.settings.periods) || 7);
  const dayKeys = getDayKeys();
  const grid = {};
  state.classes.forEach(c => {
    grid[c.id] = {};
    dayKeys.forEach(d => { grid[c.id][d] = {}; for(let p = 1; p <= periods; p++) grid[c.id][d][p] = null; });
  });
  const tBusy = {}, tDayCnt = {}, tWeekCnt = {};
  const classSubjectDay = {};
  state.teachers.forEach(tc => {
    tBusy[tc.id] = {}; tDayCnt[tc.id] = {}; tWeekCnt[tc.id] = 0;
    dayKeys.forEach(d => { tBusy[tc.id][d] = {}; for(let p = 1; p <= periods; p++) tBusy[tc.id][d][p] = false; tDayCnt[tc.id][d] = 0; });
  });
  state.classes.forEach(c => { classSubjectDay[c.id] = {}; });

  const tasks = [];
  state.requirements.forEach(r => { const w = parseInt(r.weekly) || 0; for(let i = 0; i < w; i++) tasks.push({ ...r, weekly: parseInt(r.weekly) || 0 }); });
  tasks.sort((a, b) => {
    const ta = state.teachers.find(x => x.id === a.teacherId);
    const tb = state.teachers.find(x => x.id === b.teacherId);
    const wA = (ta?.workingDays || dayKeys).length;
    const wB = (tb?.workingDays || dayKeys).length;
    if(wA !== wB) return wA - wB;
    return b.weekly - a.weekly;
  });

  const unplaced = [];
  for(const task of tasks){
    const teacher = state.teachers.find(x => x.id === task.teacherId);
    if(!teacher || !grid[task.classId]){ unplaced.push(task); continue; }
    const unavail = teacher.unavailable || [];
    const workingDays = (teacher.workingDays || dayKeys).filter(k => dayKeys.includes(k));
    if(workingDays.length === 0){ unplaced.push(task); continue; }
    const maxDay = Math.max(1, parseInt(teacher.maxDay) || 6);
    const maxWeek = maxDay * workingDays.length;

    if(!classSubjectDay[task.classId][task.subject]) classSubjectDay[task.classId][task.subject] = {};

    const candidates = [];
    for(const d of workingDays){
      if(tDayCnt[teacher.id][d] >= maxDay) continue;
      if(tWeekCnt[teacher.id] >= maxWeek) continue;
      if((classSubjectDay[task.classId][task.subject][d] || 0) >= 1) continue;
      for(let p = 1; p <= periods; p++){
        if(unavail.includes(d + '-' + p)) continue;
        if(grid[task.classId][d][p]) continue;
        if(tBusy[teacher.id][d][p]) continue;
        let priority = 0;
        priority -= tDayCnt[teacher.id][d] * 100;
        let classDayCount = 0;
        for(let pp = 1; pp <= periods; pp++) if(grid[task.classId][d][pp]) classDayCount++;
        priority -= classDayCount * 50;
        priority += Math.random() * 10;
        candidates.push({ d, p, priority });
      }
    }
    if(candidates.length === 0){ unplaced.push(task); continue; }
    candidates.sort((a, b) => b.priority - a.priority);
    const best = candidates[0];
    grid[task.classId][best.d][best.p] = { teacherId: teacher.id, subject: task.subject };
    tBusy[teacher.id][best.d][best.p] = true;
    tDayCnt[teacher.id][best.d]++;
    tWeekCnt[teacher.id]++;
    classSubjectDay[task.classId][task.subject][best.d] = (classSubjectDay[task.classId][task.subject][best.d] || 0) + 1;
  }
  return { grid, unplaced };
}

function generateSchedule(){
  try{
    if(state.teachers.length === 0){ toast(t('noTeachers'), 'error'); return; }
    if(state.classes.length === 0){ toast(t('noClasses'), 'error'); return; }
    if(state.requirements.length === 0){ toast(t('needClassOrSubject'), 'error'); return; }

    const preErrors = analyzeConstraints().filter(a => a.type === 'error');
    if(preErrors.length > 0){
      alert(t('cannotGenerate') + '\n\n' + preErrors.map(e => '• ' + e.text).join('\n') + '\n\n' + t('fixThenRetry'));
      return;
    }

    let best = null;
    const startTime = Date.now();
    for(let i = 0; i < 150; i++){
      if(Date.now() - startTime > 6000) break;
      const r = tryGenerate();
      if(!best || r.unplaced.length < best.unplaced.length) best = r;
      if(best.unplaced.length === 0) break;
    }
    state.schedule = best;
    save();
    goToTab('schedule');
    if(best.unplaced.length === 0) toast(t('generated'), 'success');
    else toast(best.unplaced.length + ' ' + t('partialGen'), 'error');
  }catch(e){ console.error(e); toast(t('error'), 'error'); }
}

document.getElementById('generate-btn').addEventListener('click', () => {
  try{
    state.settings.periods = Math.max(4, Math.min(10, parseInt(document.getElementById('periods-count').value) || 7));
    state.settings.days = Math.max(5, Math.min(6, parseInt(document.getElementById('days-count').value) || 5));
    save();
    const btn = document.getElementById('generate-btn');
    btn.disabled = true;
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> ' + t('generating');
    setTimeout(() => { try{ generateSchedule(); }catch(e){} btn.innerHTML = orig; btn.disabled = false; }, 60);
  }catch(e){}
});

/* =========================================
   10. عرض الجدول
   ========================================= */
function renderScheduleDisplay(){
  try{
    const el = document.getElementById('schedule-display');
    if(!el) return;
    const view = document.getElementById('schedule-view').value;
    const id = document.getElementById('schedule-entity').value;
    if(!state.schedule || !state.schedule.grid){
      el.innerHTML = '<div class="empty-state"><svg><use href="#i-calendar"/></svg><p>' + t('noSchedule') + '</p><p style="font-size:11px;margin-top:6px">' + t('noScheduleHint') + '</p></div>';
      return;
    }
    if(!id){ el.innerHTML = '<div class="empty-state"><p>' + t('selectEntity') + '</p></div>'; return; }
    const periods = Math.max(1, state.settings.periods || 7);
    const dayKeys = getDayKeys();
    const grid = state.schedule.grid;
    let title = '', dataFn;
    if(view === 'class'){
      const cls = state.classes.find(x => x.id === id);
      if(!cls){ return; }
      title = '📅 ' + t('classSchedule') + ' — ' + esc(cls.name);
      dataFn = (d,p) => {
        const cell = grid[id] && grid[id][d] && grid[id][d][p];
        if(!cell) return null;
        const tc = state.teachers.find(x => x.id === cell.teacherId);
        return { main: cell.subject, sub: tc ? tc.name : '' };
      };
    } else {
      const tc = state.teachers.find(x => x.id === id);
      if(!tc){ return; }
      title = '📅 ' + t('teacherSchedule') + ' — ' + esc(tc.name);
      dataFn = (d,p) => {
        for(const c of state.classes){
          const cell = grid[c.id] && grid[c.id][d] && grid[c.id][d][p];
          if(cell && cell.teacherId === id) return { main: cell.subject, sub: c.name };
        }
        return null;
      };
    }
    
    const namesAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر'];
    let html = '<h2>' + title + '</h2><div class="table-scroll"><table class="schedule-table"><thead><tr><th>' + t('dayColHeader') + '</th>';
    for(let p = 1; p <= periods; p++) {
       const label = currentLang === 'ar' ? 'الدرس ' + (namesAr[p-1] || p) : 'Lesson ' + p;
       html += '<th>' + label + '</th>';
    }
    html += '</tr></thead><tbody>';
    dayKeys.forEach(d => {
      html += '<tr><td class="day-cell">' + esc(dayName(d)) + '</td>';
      for(let p = 1; p <= periods; p++){
        const c = dataFn(d,p);
        if(c) html += '<td class="slot-filled"><span class="subject-name">' + esc(c.main) + '</span><span class="teacher-name">' + esc(c.sub) + '</span></td>';
        else html += '<td class="slot-empty">—</td>';
      }
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    el.innerHTML = html;
    
    // استدعاء الدالة الخاصة بالألوان بعد رسم الجدول
    setTimeout(() => {
      const colorSelect = document.getElementById('table-color');
      if(colorSelect) applyTableColor(colorSelect.value);
    }, 50);
  }catch(e){}
}

/* =========================================
   11. دوال مساعدة للطباعة
   ========================================= */
function buildMiniScheduleHTML(view, id, opts){
  const periods = Math.max(1, state.settings.periods || 7);
  const dayKeys = getDayKeys();
  const grid = state.schedule?.grid || {};
  const size = opts.size || 'A4';

  let title = '';
  let dataFn;

  if(view === 'class'){
    const cls = state.classes.find(c => c.id === id);
    if(!cls) return '';
    title = cls.name;
    dataFn = (d, p) => {
      const cell = grid[id]?.[d]?.[p];
      if(!cell) return null;
      const tc = state.teachers.find(x => x.id === cell.teacherId);
      return { main: cell.subject, sub: tc?.name || '' };
    };
  } else {
    const tc = state.teachers.find(x => x.id === id);
    if(!tc) return '';
    title = tc.name;
    dataFn = (d, p) => {
      for(const c of state.classes){
        const cell = grid[c.id]?.[d]?.[p];
        if(cell && cell.teacherId === id) return { main: cell.subject, sub: c.name };
      }
      return null;
    };
  }

  const fs = size === 'A3' ? (opts.compact ? '7pt' : '9pt') : (opts.compact ? '6pt' : '8pt');
  const subFs = size === 'A3' ? (opts.compact ? '6pt' : '7pt') : (opts.compact ? '5pt' : '6pt');
  const titleFs = size === 'A3' ? '11pt' : '9pt';
  const cellPad = opts.compact ? '2pt 1pt' : '3pt 2pt';

  const namesAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر'];
  
  let html = `<div class="mini-schedule"><div class="mini-title">${esc(title)}</div>`;
  html += `<table class="mini-table"><thead><tr><th class="corner">${t('dayColHeader')}</th>`;
  for(let p = 1; p <= periods; p++) {
    let label = p;
    if (!opts.compact) {
       label = currentLang === 'ar' ? 'الدرس ' + (namesAr[p-1] || p) : 'Lesson ' + p;
    } else {
       label = 'ح' + p;
    }
    html += `<th>${label}</th>`;
  }
  html += `</tr></thead><tbody>`;
  dayKeys.forEach(d => {
    html += `<tr><td class="day-cell">${esc(dayName(d))}</td>`;
    for(let p = 1; p <= periods; p++){
      const c = dataFn(d, p);
      if(c){
        html += `<td class="slot-filled"><span class="subject-name">${esc(c.main)}</span><span class="teacher-name">${esc(c.sub)}</span></td>`;
      } else {
        html += `<td class="slot-empty">—</td>`;
      }
    }
    html += `</tr>`;
  });
  html += `</tbody></table></div>`;
  return html;
}

/* =========================================
   12. الطباعة
   ========================================= */
function openPrintWindow(scope){
  try{
    if(!state.schedule || !state.schedule.grid){
      toast(t('noData'), 'error');
      return;
    }

    const size = document.getElementById('print-size').value;
    const orient = document.getElementById('print-orientation').value;
    const colorMode = document.getElementById('table-color').value;

    let content = '';
    let pageConfig = '';

    if(scope === 'all'){
      if(state.teachers.length === 0){ toast(t('noTeachers'), 'error'); return; }
      const isA3 = size === 'A3';
      const isLandscape = orient === 'landscape';
      const teacherCount = state.teachers.length;

      if(isA3 && isLandscape){
        let cols = 2;
        if (teacherCount > 4 && teacherCount <= 9) cols = 3;
        else if (teacherCount > 9) cols = 4;
        const compact = teacherCount > 6;
        
        let fs, subFs, titleFs, cellPad;
        if (teacherCount <= 4) {
          fs = '11pt'; subFs = '9pt'; titleFs = '15pt'; cellPad = '6px 4px';
        } else if (teacherCount <= 9) {
          fs = '8pt'; subFs = '7pt'; titleFs = '11pt'; cellPad = '4px 2px';
        } else {
          fs = '6pt'; subFs = '5pt'; titleFs = '9pt'; cellPad = '2px 1px';
        }

        content = `<div class="print-grid" style="grid-template-columns: repeat(${cols}, 1fr); gap: 15px; height: 100vh; align-content: stretch;">`;
        state.teachers.forEach(tc => {
          content += `<div class="print-item" style="display: flex; flex-direction: column; justify-content: center;">${buildMiniScheduleHTML('teacher', tc.id, { size, compact })}</div>`;
        });
        content += `</div>`;
        pageConfig = `@page { size: A3 landscape; margin: 0.5cm; }`;
        
        content = `<style>
          .mini-table th { font-size: ${fs}; padding: ${cellPad}; }
          .mini-table td { font-size: ${fs}; padding: ${cellPad}; }
          .mini-table .subject-name { font-size: ${fs}; }
          .mini-table .teacher-name { font-size: ${subFs}; }
          .mini-title { font-size: ${titleFs}; }
        </style>` + content;

      } else if(isA3 && !isLandscape){
        const compact = teacherCount > 4;
        content = `<div class="print-grid" style="grid-template-columns: repeat(2, 1fr); gap: 10px;">`;
        state.teachers.forEach(tc => {
          content += `<div class="print-item">${buildMiniScheduleHTML('teacher', tc.id, { size, compact })}</div>`;
        });
        content += `</div>`;
        pageConfig = `@page { size: A3 portrait; margin: 0.8cm; }`;
      } else if(!isA3 && isLandscape){
        content = `<div class="print-grid" style="grid-template-columns: repeat(2, 1fr); gap: 8px;">`;
        state.teachers.forEach(tc => {
          content += `<div class="print-item">${buildMiniScheduleHTML('teacher', tc.id, { size, compact: true })}</div>`;
        });
        content += `</div>`;
        pageConfig = `@page { size: A4 landscape; margin: 0.6cm; }`;
      } else {
        state.teachers.forEach((tc, i) => {
          if(i > 0) content += '<div style="page-break-before: always; height: 0;"></div>';
          content += `<div class="print-item">${buildMiniScheduleHTML('teacher', tc.id, { size, compact: false })}</div>`;
        });
        pageConfig = `@page { size: A4 portrait; margin: 1cm; }`;
      }
    } else {
      const view = document.getElementById('schedule-view').value;
      const id = document.getElementById('schedule-entity').value;
      if(!id){ toast(t('selectEntity'), 'error'); return; }
      content = `<div class="print-item">${buildMiniScheduleHTML(view, id, { size, compact: false })}</div>`;
      pageConfig = `@page { size: ${size} ${orient}; margin: ${orient === 'portrait' ? '1cm' : '0.6cm'}; }`;
    }

    const titleFs = size === 'A3' ? '11pt' : '10pt';
    const fs = size === 'A3' ? '8pt' : '7pt';
    const subFs = size === 'A3' ? '7pt' : '6pt';

    let colors = {};
    if (colorMode === 'bw') {
      colors = { headerBg: '#333333', headerText: '#ffffff', dayBg: '#e5e5e5', filledBg: '#f5f5f5', emptyBg: '#ffffff', border: '#999999', text: '#000000', subText: '#333333' };
    } else if (colorMode === 'blue') {
      colors = { headerBg: '#3b82f6', headerText: '#ffffff', dayBg: '#dbeafe', filledBg: '#eff6ff', emptyBg: '#ffffff', border: '#93c5fd', text: '#1e3a8a', subText: '#1d4ed8' };
    } else if (colorMode === 'green') {
      colors = { headerBg: '#10b981', headerText: '#ffffff', dayBg: '#d1fae5', filledBg: '#ecfdf5', emptyBg: '#ffffff', border: '#6ee7b7', text: '#064e3b', subText: '#047857' };
    } else if (colorMode === 'purple') {
      colors = { headerBg: '#8b5cf6', headerText: '#ffffff', dayBg: '#ede9fe', filledBg: '#f5f3ff', emptyBg: '#ffffff', border: '#c4b5fd', text: '#4c1d95', subText: '#6d28d9' };
    } else if (colorMode === 'orange') {
      colors = { headerBg: '#f97316', headerText: '#ffffff', dayBg: '#ffedd5', filledBg: '#fff7ed', emptyBg: '#ffffff', border: '#fdba74', text: '#7c2d12', subText: '#c2410c' };
    } else if (colorMode === 'red') {
      colors = { headerBg: '#ef4444', headerText: '#ffffff', dayBg: '#fee2e2', filledBg: '#fef2f2', emptyBg: '#ffffff', border: '#fca5a5', text: '#7f1d1d', subText: '#b91c1c' };
    } else if (colorMode === 'gray') {
      colors = { headerBg: '#64748b', headerText: '#ffffff', dayBg: '#f1f5f9', filledBg: '#f8fafc', emptyBg: '#ffffff', border: '#cbd5e1', text: '#1e293b', subText: '#475569' };
    } else {
      colors = { headerBg: '#10b981', headerText: '#ffffff', dayBg: '#d1fae5', filledBg: '#ecfdf5', emptyBg: '#ffffff', border: '#6ee7b7', text: '#064e3b', subText: '#047857' };
    }

    const html = `<!DOCTYPE html>
<html lang="${currentLang}" dir="${currentLang === 'ar' ? 'rtl' : 'ltr'}">
<head>
<meta charset="UTF-8">
<title>${scope === 'all' ? (currentLang === 'ar' ? 'جميع المعلمين' : 'All Teachers') : (currentLang === 'ar' ? 'الجدول' : 'Schedule')}</title>
<style>
${pageConfig}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Tajawal', 'Segoe UI', sans-serif;
  color: ${colors.text};
  background: #fff;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  padding: 0;
}
.print-grid {
  display: grid;
  width: 100%;
}
.print-item {
  break-inside: avoid;
  page-break-inside: avoid;
  overflow: hidden;
  position: relative;
}
.mini-schedule {
  width: 100%;
  margin-bottom: 20px;
}
.mini-title {
  font-size: ${titleFs};
  font-weight: 800;
  text-align: center;
  margin-bottom: 3px;
  color: ${colors.headerBg};
  padding: 2px 4px;
  background: ${colors.dayBg};
  border-radius: 4px;
}
.mini-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}
.mini-table th {
  background: ${colors.headerBg};
  color: ${colors.headerText};
  font-size: ${fs};
  font-weight: 700;
  padding: 3px 1px;
  border: 1px solid ${colors.headerBg};
  text-align: center;
}
.mini-table th.corner {
  width: 55px;
}
.mini-table td {
  font-size: ${fs};
  padding: 2px 1px;
  border: 1px solid ${colors.border};
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
}
.mini-table .day-cell {
  background: ${colors.dayBg};
  font-weight: 700;
  color: ${colors.text};
  font-size: ${fs};
}
.mini-table .slot-filled {
  background: ${colors.filledBg};
}
.mini-table .slot-empty {
  background: ${colors.emptyBg};
  color: #bbb;
}
.subject-name {
  display: block;
  font-weight: 700;
  font-size: ${fs};
  color: ${colors.text};
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.teacher-name {
  display: block;
  font-size: ${subFs};
  color: ${colors.subText};
  opacity: 0.85;
  line-height: 1.1;
  margin-top: 1px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.print-signature {
  text-align: center;
  font-size: 9pt;
  color: #666;
  margin-top: 15px;
  font-weight: 600;
}
.print-signature span {
  display: inline-block;
  padding: 4px 12px;
  background: #f3f4f6;
  border-radius: 20px;
  color: #374151;
}
</style>
</head>
<body>
${content}
<div class="print-signature"><span>تم التصميم بواسطة Jadwal · ${currentLang === 'ar' ? 'للتواصل:' : 'Contact:'} @HJS_98</span></div>
<script>
window.onload = function(){
  setTimeout(function(){ window.print(); }, 500);
};
window.onafterprint = function(){
  setTimeout(function(){ window.close(); }, 100);
};
<\/script>
</body>
</html>`;

    const win = window.open('', '_blank');
    if(!win){ toast(currentLang === 'ar' ? 'الرجاء السماح بالنوافذ المنبثقة' : 'Please allow popups', 'error'); return; }
    win.document.open();
    win.document.write(html);
    win.document.close();

    toast(currentLang === 'ar' ? 'جاري فتح نافذة الطباعة...' : 'Opening print dialog...', 'success');
  }catch(e){
    console.error(e);
    toast(t('error') + ': ' + e.message, 'error');
  }
}

document.getElementById('print-current-btn').addEventListener('click', () => openPrintWindow('current'));
document.getElementById('print-all-btn').addEventListener('click', () => openPrintWindow('all'));

/* =========================================
   13. Excel و CSV و PNG
   ========================================= */
function buildScheduleMatrix(view, id){
  const periods = Math.max(1, state.settings.periods || 7);
  const dayKeys = getDayKeys();
  const grid = state.schedule?.grid || {};
  const rows = [['#'].concat(Array.from({length: periods}, (_, i) => 'P' + (i+1)))];
  dayKeys.forEach(d => {
    const row = [dayName(d)];
    for(let p = 1; p <= periods; p++){
      let txt = '';
      if(view === 'class'){
        const c = grid[id]?.[d]?.[p];
        if(c){ const tc = state.teachers.find(x => x.id === c.teacherId); txt = c.subject + (tc ? ' - ' + tc.name : ''); }
      } else {
        for(const cls of state.classes){
          const c = grid[cls.id]?.[d]?.[p];
          if(c && c.teacherId === id){ txt = c.subject + ' - ' + cls.name; break; }
        }
      }
      row.push(txt);
    }
    rows.push(row);
  });
  return rows;
}

function getCurrentEntityName(){
  const view = document.getElementById('schedule-view').value;
  const id = document.getElementById('schedule-entity').value;
  if(!id) return 'schedule';
  if(view === 'class'){ const c = state.classes.find(x => x.id === id); return c ? c.name : 'class'; }
  const tc = state.teachers.find(x => x.id === id);
  return tc ? tc.name : 'teacher';
}

document.getElementById('excel-current-btn').addEventListener('click', () => {
  try{
    const view = document.getElementById('schedule-view').value;
    const id = document.getElementById('schedule-entity').value;
    if(!id || !state.schedule || typeof XLSX === 'undefined'){ toast(t('noData'), 'error'); return; }
    const wb = XLSX.utils.book_new();
    const matrix = buildScheduleMatrix(view, id);
    const ws = XLSX.utils.aoa_to_sheet(matrix);
    ws['!cols'] = [{ wch: 12 }].concat(Array(matrix[0].length - 1).fill({ wch: 18 }));
    XLSX.utils.book_append_sheet(wb, ws, 'Schedule');
    XLSX.writeFile(wb, 'schedule_' + getCurrentEntityName() + '.xlsx');
    toast(t('excelGenerated'), 'success');
  }catch(e){ console.error(e); toast(t('error'), 'error'); }
});

document.getElementById('excel-all-btn').addEventListener('click', () => {
  try{
    if(!state.schedule || typeof XLSX === 'undefined'){ toast(t('noData'), 'error'); return; }
    const wb = XLSX.utils.book_new();

    const summaryRows = [
      [currentLang === 'ar' ? 'ملخص شامل' : 'Summary'],
      [],
      [currentLang === 'ar' ? 'المعلم' : 'Teacher',
       currentLang === 'ar' ? 'المرحلة' : 'Stage',
       currentLang === 'ar' ? 'أيام الدوام' : 'Working Days',
       currentLang === 'ar' ? 'الحد اليومي' : 'Daily Limit',
       currentLang === 'ar' ? 'السعة الأسبوعية' : 'Weekly Capacity',
       currentLang === 'ar' ? 'الحصص المطلوبة' : 'Required Hours',
       currentLang === 'ar' ? 'الحصص الموزعة' : 'Placed Hours']
    ];

    state.teachers.forEach(tc => {
      const reqs = state.requirements.filter(r => r.teacherId === tc.id);
      const required = reqs.reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
      const wDays = (tc.workingDays || getDayKeys()).length;
      const capacity = (tc.maxDay || 6) * wDays;

      let placed = 0;
      const dayKeys = getDayKeys();
      state.classes.forEach(c => {
        dayKeys.forEach(d => {
          for(let p = 1; p <= (state.settings.periods||7); p++){
            const cell = state.schedule.grid[c.id]?.[d]?.[p];
            if(cell && cell.teacherId === tc.id) placed++;
          }
        });
      });

      const stageMap = { primary: 'ابتدائي', middle: 'متوسط', secondary: 'إعدادي' };
      summaryRows.push([
        tc.name,
        stageMap[tc.stage] || tc.stage,
        wDays,
        tc.maxDay || 6,
        capacity,
        required,
        placed
      ]);
    });

    const summaryWs = XLSX.utils.aoa_to_sheet(summaryRows);
    summaryWs['!cols'] = [{ wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 15 }, { wch: 15 }, { wch: 15 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, currentLang === 'ar' ? 'ملخص' : 'Summary');

    state.teachers.forEach(tc => {
      const matrix = buildScheduleMatrix('teacher', tc.id);
      const ws = XLSX.utils.aoa_to_sheet(matrix);
      ws['!cols'] = [{ wch: 12 }].concat(Array(matrix[0].length - 1).fill({ wch: 16 }));
      let sheetName = tc.name.replace(/[*?:/\\\[\]]/g, '').substring(0, 28);
      if(!sheetName) sheetName = 'Teacher';
      let n = 1;
      let finalName = sheetName;
      while(wb.SheetNames.includes(finalName)){
        finalName = sheetName + (n++);
      }
      XLSX.utils.book_append_sheet(wb, ws, finalName);
    });

    state.classes.forEach(c => {
      const matrix = buildScheduleMatrix('class', c.id);
      const ws = XLSX.utils.aoa_to_sheet(matrix);
      ws['!cols'] = [{ wch: 12 }].concat(Array(matrix[0].length - 1).fill({ wch: 16 }));
      let sheetName = c.name.replace(/[*?:/\\\[\]]/g, '').substring(0, 28);
      if(!sheetName) sheetName = 'Class';
      let n = 1;
      let finalName = sheetName;
      while(wb.SheetNames.includes(finalName)){
        finalName = sheetName + (n++);
      }
      XLSX.utils.book_append_sheet(wb, ws, finalName);
    });

    const filename = 'jadwal_all_' + new Date().toISOString().slice(0,10) + '.xlsx';
    XLSX.writeFile(wb, filename);
    toast(t('excelGenerated'), 'success');
  }catch(e){ console.error(e); toast(t('error') + ': ' + e.message, 'error'); }
});

document.getElementById('csv-btn').addEventListener('click', () => {
  try{
    const view = document.getElementById('schedule-view').value;
    const id = document.getElementById('schedule-entity').value;
    if(!id || !state.schedule){ toast(t('noData'), 'error'); return; }
    const matrix = buildScheduleMatrix(view, id);
    let csv = '\uFEFF';
    matrix.forEach(row => { csv += row.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',') + '\n'; });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'schedule_' + getCurrentEntityName() + '.csv'; a.click();
    URL.revokeObjectURL(url); toast(t('downloaded'), 'success');
  }catch(e){}
});

document.getElementById('png-btn').addEventListener('click', () => {
  try{
    if(!state.schedule || typeof html2canvas === 'undefined'){ toast(t('noData'), 'error'); return; }
    
    const el = document.getElementById('schedule-display');
    const clone = el.cloneNode(true);
    
    const wrapper = document.createElement('div');
    wrapper.style.position = 'fixed';
    wrapper.style.left = '-9999px';
    wrapper.style.top = '0';
    wrapper.style.background = document.documentElement.getAttribute('data-theme') === 'light' ? '#ffffff' : '#041f1c';
    wrapper.style.padding = '40px';
    wrapper.style.borderRadius = '16px';
    wrapper.style.width = 'max-content';
    wrapper.style.minWidth = '800px';
    
    const scroller = clone.querySelector('.table-scroll');
    if(scroller) {
      scroller.style.overflow = 'visible';
      scroller.style.width = 'auto';
    }
    
    const table = clone.querySelector('.schedule-table');
    if(table) {
      table.style.minWidth = '100%';
      table.style.width = '100%';
      table.style.tableLayout = 'auto';
    }
    
    wrapper.appendChild(clone);
    document.body.appendChild(wrapper);
    
    setTimeout(() => {
      html2canvas(wrapper, { backgroundColor: null, scale: 2 }).then(canvas => {
        canvas.toBlob(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url; a.download = 'schedule_' + getCurrentEntityName() + '.png'; a.click();
          URL.revokeObjectURL(url); toast(t('downloaded'), 'success');
          document.body.removeChild(wrapper);
        });
      }).catch((err) => { 
        console.error(err);
        document.body.removeChild(wrapper);
        toast(t('error'), 'error'); 
      });
    }, 100);
    
  }catch(e){ console.error(e); toast(t('error'), 'error'); }
});

/* =========================================
   14. المشاركة (رابط)
   ========================================= */
document.getElementById('share-btn').addEventListener('click', () => {
  try{
    const role = document.getElementById('share-role').value || 'editor';
    const data = { teachers: state.teachers, classes: state.classes, requirements: state.requirements, settings: state.settings, calendar: state.calendar, role };
    const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(data));
    const url = window.location.href.split('#')[0] + '#data=' + compressed;
    document.getElementById('share-url').value = url;
    document.getElementById('share-box').style.display = 'flex';
    document.getElementById('share-hint').textContent = (url.length/1024).toFixed(1) + ' KB';
    toast(t('shareReady'), 'success');
    document.getElementById('share-url').select();
  }catch(e){ toast(t('error'), 'error'); }
});
document.getElementById('copy-url-btn').addEventListener('click', async () => {
  const input = document.getElementById('share-url');
  try{ await navigator.clipboard.writeText(input.value); toast(t('copied'), 'success'); }
  catch(e){ input.select(); document.execCommand('copy'); toast(t('copied'), 'success'); }
});
function loadFromURL(){
  try{
    const hash = window.location.hash;
    if(!hash.startsWith('#data=')) return false;
    const json = LZString.decompressFromEncodedURIComponent(hash.slice(6));
    if(!json) return false;
    const data = JSON.parse(json);
    if(data.teachers) state.teachers = data.teachers;
    if(data.classes) state.classes = data.classes;
    if(data.requirements) state.requirements = data.requirements;
    if(data.settings) state.settings = { ...state.settings, ...data.settings };
    if(data.calendar) state.calendar = data.calendar;
    if(data.role) state.role = data.role;
    saveNow();
    history.replaceState(null, '', window.location.pathname + window.location.search);
    toast(t('importedFromLink'), 'success');
    return true;
  }catch(e){ return false; }
}

/* =========================================
   15. التقارير والإعدادات
   ========================================= */
function renderReports(){
  try{
    let totalRequired = 0, totalPlaced = 0;
    state.requirements.forEach(r => totalRequired += (parseInt(r.weekly)||0));
    if(state.schedule && state.schedule.grid){
      const dayKeys = getDayKeys();
      state.classes.forEach(c => {
        dayKeys.forEach(d => {
          for(let p = 1; p <= (state.settings.periods||7); p++){
            if(state.schedule.grid[c.id]?.[d]?.[p]) totalPlaced++;
          }
        });
      });
    }
    const warnings = analyzeConstraints();
    document.getElementById('report-total-required').textContent = totalRequired;
    document.getElementById('report-total-placed').textContent = totalPlaced;
    document.getElementById('report-warnings').textContent = warnings.filter(w => w.type !== 'success').length;

    const tc = document.getElementById('teacher-chart');
    if(state.teachers.length === 0) tc.innerHTML = '<div class="empty-state"><p>' + t('noTeachers') + '</p></div>';
    else {
      tc.innerHTML = state.teachers.map(t => {
        const hours = state.requirements.filter(r => r.teacherId === t.id).reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
        const wDays = (t.workingDays || []).filter(k => getDayKeys().includes(k)).length;
        const cap = (t.maxDay || 6) * wDays;
        const pct = cap > 0 ? Math.min(100, (hours / cap) * 100) : 0;
        const cls = hours > cap ? 'danger' : hours > cap * 0.85 ? 'warn' : '';
        return '<div class="chart-bar-container"><div class="chart-bar-label"><span>' + esc(t.name) + '</span><span>' + hours + ' / ' + cap + '</span></div><div class="chart-bar"><div class="chart-bar-fill ' + cls + '" style="width:' + pct + '%"></div></div></div>';
      }).join('');
    }

    const cc = document.getElementById('class-chart');
    if(state.classes.length === 0) cc.innerHTML = '<div class="empty-state"><p>' + t('noClasses') + '</p></div>';
    else {
      const slots = (state.settings.days||5) * (state.settings.periods||7);
      cc.innerHTML = state.classes.map(c => {
        const hours = state.requirements.filter(r => r.classId === c.id).reduce((s,r) => s + (parseInt(r.weekly)||0), 0);
        const pct = Math.min(100, (hours / slots) * 100);
        const cls = hours > slots ? 'danger' : hours > slots * 0.9 ? 'warn' : '';
        return '<div class="chart-bar-container"><div class="chart-bar-label"><span>' + esc(c.name) + '</span><span>' + hours + ' / ' + slots + '</span></div><div class="chart-bar"><div class="chart-bar-fill ' + cls + '" style="width:' + pct + '%"></div></div></div>';
      }).join('');
    }

    const wl = document.getElementById('warnings-list');
    if(warnings.length === 0) wl.innerHTML = '<div class="alert alert-success"><svg><use href="#i-check-circle"/></svg><span>' + (currentLang==='ar'?'كل البيانات متوازنة':'All data balanced') + '</span></div>';
    else {
      const icons = { error:'i-x-circle', warning:'i-alert', success:'i-check-circle', info:'i-info' };
      wl.innerHTML = warnings.map(w => '<div class="alert alert-' + w.type + '"><svg><use href="#' + icons[w.type] + '"/></svg><span>' + w.text + '</span></div>').join('');
    }
  }catch(e){}
}

function renderSettings(){
  try{
    document.getElementById('term-name').value = state.calendar.term || '';
    document.getElementById('term-start').value = state.calendar.startDate || '';
    document.getElementById('term-end').value = state.calendar.endDate || '';
    renderHolidays();
  }catch(e){}
}
function renderHolidays(){
  const el = document.getElementById('holidays-list');
  const list = state.calendar.holidays || [];
  if(list.length === 0){ el.innerHTML = '<div class="empty-state" style="padding:20px"><p>' + t('noHolidays') + '</p></div>'; return; }
  el.innerHTML = list.map((h, i) => '<div class="holiday-item"><span>🎉 ' + esc(h.name) + ' — ' + esc(h.date) + '</span><button onclick="deleteHoliday(' + i + ')">' + t('delete') + '</button></div>').join('');
}
window.deleteHoliday = (i) => { if(state.role === 'viewer'){ toast(t('error'), 'error'); return; } state.calendar.holidays.splice(i, 1); save(); renderHolidays(); };
document.getElementById('save-term-btn').addEventListener('click', () => {
  try{ state.calendar.term = document.getElementById('term-name').value.trim(); state.calendar.startDate = document.getElementById('term-start').value; state.calendar.endDate = document.getElementById('term-end').value; save(); toast(t('termSaved'), 'success'); }catch(e){}
});
document.getElementById('add-holiday-btn').addEventListener('click', () => {
  try{
    const name = document.getElementById('holiday-name').value.trim();
    const date = document.getElementById('holiday-date').value;
    if(!name || !date){ toast(t('needName'), 'error'); return; }
    if(!state.calendar.holidays) state.calendar.holidays = [];
    state.calendar.holidays.push({ name, date });
    document.getElementById('holiday-name').value = ''; document.getElementById('holiday-date').value = '';
    save(); renderHolidays(); toast(t('holidayAdded'), 'success');
  }catch(e){}
});

document.getElementById('backup-btn').addEventListener('click', () => {
  try{
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'jadwal-backup-' + new Date().toISOString().slice(0,10) + '.json'; a.click();
    URL.revokeObjectURL(url); toast(t('downloaded'), 'success');
  }catch(e){}
});
document.getElementById('restore-btn').addEventListener('click', () => document.getElementById('restore-input').click());
document.getElementById('restore-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try{
      const data = JSON.parse(ev.target.result);
      if(!data.teachers || !data.classes) throw new Error('invalid');
      state = { ...defaultState(), ...data };
      saveNow(); load(); render(); toast(t('restored'), 'success');
    }catch(err){ toast(t('invalidFile'), 'error'); }
  };
  reader.readAsText(file);
  e.target.value = '';
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if(state.role === 'viewer'){ toast(t('error'), 'error'); return; }
  if(!confirm(t('deleteConfirmReset'))) return;
  state = defaultState(); saveNow();
  document.getElementById('periods-count').value = 7;
  document.getElementById('days-count').value = 5;
  render(); toast(t('deleted'));
});

/* =========================================
   16. التشغيل الأولي
   ========================================= */
function applyRole(){
  const isViewer = state.role === 'viewer';
  document.querySelectorAll('[data-admin-only]').forEach(el => { el.style.display = isViewer ? 'none' : ''; });
}

function init(){
  try{
    updateThemeIcon();
    loadFromURL();
    load();
    document.getElementById('periods-count').value = state.settings.periods || 7;
    document.getElementById('days-count').value = state.settings.days || 5;
    applyLanguage();
  }catch(e){
    console.error(e);
    state = defaultState();
    try{ render(); }catch(e2){}
  }
}
init();

document.getElementById('periods-count').addEventListener('change', debounce(() => {
  state.settings.periods = Math.max(4, Math.min(10, parseInt(document.getElementById('periods-count').value) || 7));
  save();
}, 400));
document.getElementById('days-count').addEventListener('change', debounce(() => {
  state.settings.days = Math.max(5, Math.min(6, parseInt(document.getElementById('days-count').value) || 5));
  save(); render();
}, 400));

/* =========================================
   17. تحديث ألوان الجدول في الشاشة الرئيسية
   ========================================= */
function applyTableColor(colorMode) {
  const table = document.querySelector('.schedule-table');
  if(!table) return;
  
  table.removeAttribute('style');
  
  let colors = {};
  if (colorMode === 'bw') {
    colors = { header: '#333', day: '#e5e5e5', filled: '#f5f5f5', text: '#000', sub: '#333' };
  } else if (colorMode === 'blue') {
    colors = { header: '#3b82f6', day: '#dbeafe', filled: '#eff6ff', text: '#1e3a8a', sub: '#1d4ed8' };
  } else if (colorMode === 'green') {
    colors = { header: '#10b981', day: '#d1fae5', filled: '#ecfdf5', text: '#064e3b', sub: '#047857' };
  } else if (colorMode === 'purple') {
    colors = { header: '#8b5cf6', day: '#ede9fe', filled: '#f5f3ff', text: '#4c1d95', sub: '#6d28d9' };
  } else if (colorMode === 'orange') {
    colors = { header: '#f97316', day: '#ffedd5', filled: '#fff7ed', text: '#7c2d12', sub: '#c2410c' };
  } else if (colorMode === 'red') {
    colors = { header: '#ef4444', day: '#fee2e2', filled: '#fef2f2', text: '#7f1d1d', sub: '#b91c1c' };
  } else if (colorMode === 'gray') {
    colors = { header: '#64748b', day: '#f1f5f9', filled: '#f8fafc', text: '#1e293b', sub: '#475569' };
  } else {
    const style = getComputedStyle(document.documentElement);
    colors = { 
      header: style.getPropertyValue('--primary').trim() || '#10b981',
      day: 'rgba(16,185,129,0.15)', 
      filled: 'rgba(16,185,129,0.1)', 
      text: style.getPropertyValue('--primary2').trim() || '#059669',
      sub: style.getPropertyValue('--text-dim').trim() || '#047857'
    };
  }

  const ths = table.querySelectorAll('th');
  ths.forEach(th => {
    if(!th.classList.contains('day-cell')) {
      th.style.setProperty('background', colors.header, 'important');
      th.style.setProperty('color', '#fff', 'important');
    }
  });

  const dayCells = table.querySelectorAll('.day-cell');
  dayCells.forEach(td => {
    td.style.setProperty('background', colors.day, 'important');
    td.style.setProperty('color', colors.text, 'important');
  });

  const filledCells = table.querySelectorAll('.slot-filled');
  filledCells.forEach(td => {
    td.style.setProperty('background', colors.filled, 'important');
    td.style.setProperty('color', colors.text, 'important');
  });

  const subjectNames = table.querySelectorAll('.subject-name');
  subjectNames.forEach(span => {
    span.style.setProperty('color', colors.text, 'important');
  });

  const teacherNames = table.querySelectorAll('.teacher-name');
  teacherNames.forEach(span => {
    span.style.setProperty('color', colors.sub, 'important');
  });
}

document.getElementById('table-color').addEventListener('change', (e) => {
  applyTableColor(e.target.value);
  renderScheduleDisplay();
});

// ربط الأحداث
document.getElementById('schedule-view').addEventListener('change', renderScheduleSelect);
document.getElementById('schedule-entity').addEventListener('change', renderScheduleDisplay);

// تسجيل Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => console.log('SW Error:', err));
  });
}
