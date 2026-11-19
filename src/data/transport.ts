export const transportSrtn = {
  website: {
    label: "الموقع الرسمي",
    href: "http://www.srtgn.com.tn/site/index.php",
    display: "srtgn.com.tn",
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/SRTGNabeul2016/",
  },
  tip: "المواعيد تتبدّل في العطل و رمضان — تابع الموقع الرسمي و صفحة Facebook باش تبقى على الخط.",
};

export const transportAbonnement = {
  amount: "45 DT للسماستر",
  place: "المندوبية الجهوية للنقل بزغوان",
  mapUrl: "https://maps.app.goo.gl/UfdajEeBSjHBsX8q8",
  docs: ["نسخة بطاقة تعريف", "زوز تصاور", "نسخة شهادة ترسيم"],
};

export const transportRoutes = [
  {
    id: "louage",
    name: "لواج تونس-زغوان",
    type: "shared_taxi",
    from: "تونس (باب عليوة)",
    to: "زغوان (قدام الايزات)",
    fare: 5.350,
    fareUnit: "دينار",
    schedule: "متوفر طوال النهار",
    notes: "تنجم تعمل contact مع لواجيست يجيك قدام الايزات (قروب 8 من ناس)",
    contact: { name: "قيس", phone: "98202339" },
  },
  {
    id: "bus_confort",
    name: "كار كونفور",
    type: "bus",
    from: "تونس (باب عليوة)",
    to: "زغوان (قدام الايزات)",
    fare: 4.000,
    fareUnit: "دينار",
    schedule: "6:30 صباح (أول كار)",
    notes: "كار مريح، يتعدى من قدام الايزات",
  },
  {
    id: "bus_normal",
    name: "كار عادية",
    type: "bus",
    from: "تونس (باب عليوة)",
    to: "زغوان",
    fare: 3.400,
    fareUnit: "دينار",
    schedule: "7:15 صباح",
    notes: "تتعدى من فوشانة و المحمدية",
  },
  {
    id: "bus_return",
    name: "كيران من زغوان",
    type: "bus",
    from: "زغوان",
    to: "تونس",
    fare: 3.400,
    fareUnit: "دينار",
    schedule: "10:00 / 12:00 / 15:00 / 16:00 / 17:30",
    notes: "يتعدى من قدام الايزات",
  },
  {
    id: "bus_special",
    name: "كار سباسيال للريستو",
    type: "bus",
    from: "المبيت",
    to: "الريستو",
    schedule: "18:00",
    notes: "كار خاص للمبيت الجامعي للأولاد — أبونمان فقط",
    abonnement: transportAbonnement.amount,
  },
  {
    id: "local_bus",
    name: "نقل محلي (كار 8 صباح)",
    type: "bus",
    from: "زغوان (المحطة / السونتر)",
    to: "الايزات",
    fare: 0.9,
    fareUnit: "دينار",
    schedule: "8:00 صباح",
    notes: "تذكرة أو أبونمان — يوصل للايزات",
  },
];

/** Tips not already covered by route cards or the abonnement block. */
export const transportTips = [
  "🚌 محطة الكار بحثة مبيت الأولاد 🛑",
  "الأسوام متاع النقل الكل بين السونتر و الايزات متفوتش دينار",
];

/** Evening / availability warnings — practical student advice. */
export const transportWarnings = [
  {
    title: "بعد 17:30",
    text: "آخر كار ماشي لتونس يتعدى على الايزات تقريباً على 17:30. بعدها صعيب برشا تلقى كار و حتى النقل المحلي.",
  },
  {
    title: "بلاصة قريبة باش تلقى نقل",
    text: "إذا ما لقيتش نقل قدّام المعهد، تنجم تمشي للمقرن. بلاصة قريبة وعادةً تلقى منها نقل لعدة وجهات.",
  },
];

/**
 * Bus departure times for routes serving Zaghouan, transcribed from the SRTGN
 * winter timetable (valid from 1 September 2023 — the latest one published).
 * Marks: "*" no service Sundays & public holidays; "①" Sundays & public holidays only.
 * Update `busTimetableSource` when SRTGN publishes a new timetable.
 */
export const busTimetableSource = {
  label: "جدول SRTGN الشتوي — ساري من 1 سبتمبر 2023 (آخر جدول منشور)",
  updated: "2023-09-01",
};

export const busTimetableNotes = [
  { mark: "*", text: "ما تخدمش نهار الأحد و العطل الرسمية" },
  { mark: "①", text: "تخدم كان نهار الأحد و العطل الرسمية" },
] as const;

export type BusRoute = {
  id: string;
  name: string;
  lines: string;
  from: { label: string; times: string[] };
  to: { label: string; times: string[] };
};

export const busTimetables: BusRoute[] = [
  {
    id: "zaghouan-tunis",
    name: "زغوان ⇄ تونس",
    lines: "840 / 802",
    from: {
      label: "من زغوان",
      times: ["05:00*", "05:45*", "06:45*", "08:00", "10:00*", "12:00", "13:00*", "14:00", "15:00*", "16:00", "17:30*"],
    },
    to: {
      label: "من تونس",
      times: ["06:30*", "07:15*", "08:30*", "09:30", "11:30*", "13:30", "14:30*", "15:30", "16:00①", "16:30*", "18:00", "19:00*"],
    },
  },
  {
    id: "zaghouan-nabeul",
    name: "زغوان ⇄ نابل",
    lines: "841 / 141 / 940",
    from: { label: "من زغوان", times: ["05:00", "06:15", "11:00", "13:00", "15:00", "18:00"] },
    to: { label: "من نابل", times: ["05:30", "07:30", "09:30", "14:30", "15:30", "17:00"] },
  },
  {
    id: "zaghouan-sousse",
    name: "زغوان ⇄ سوسة",
    lines: "842",
    from: { label: "من زغوان", times: ["06:00"] },
    to: { label: "من سوسة", times: ["10:30"] },
  },
];
