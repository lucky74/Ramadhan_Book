import { Language } from '../contexts/LanguageContext';

export interface LocalizedContent {
  id: string;
  en: string;
  ar: string;
}

export interface Cerpen {
  id: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  dalil: Record<Language, string>;
}

const STORAGE_KEY = "ramadhan_ebook_data_v4";

const INITIAL_DATA: Cerpen[] = [
  {
    id: "1",
    title: {
      id: "Ketika Wahyu Turun di Tengah Kegelapan",
      en: "When Revelation Descended in the Midst of Darkness",
      ar: "عندما نزل الوحي في وسط الظلام"
    },
    content: {
      id: `Makkah kala itu tidak gelap oleh malam, tetapi oleh kejahiliyahan. Bukan karena kurangnya cahaya matahari, melainkan karena manusia mematikan cahaya akal dan nurani. Berhala berdiri megah di sekitar Ka’bah, sementara keadilan diinjak, perempuan direndahkan, orang miskin ditindas, dan kebenaran diperdagangkan. Bani ‘Ashar—sebagaimana kabilah-kabilah lain—hidup dalam kebanggaan palsu, memuliakan nasab namun mematikan akhlak.

Muhammad bin ‘Abdillah ﷺ gelisah. Kegelisahan itu bukan kegelisahan seorang intelektual yang sibuk berdebat, melainkan kegelisahan seorang hamba yang hatinya hidup. Ia menyaksikan kerusakan moral, ketidakadilan sosial, dan penyembahan kepada selain Allah—lalu bertanya dalam diam: sampai kapan manusia menipu dirinya sendiri?

Ia tidak memimpin seminar, tidak menulis risalah, tidak membangun panggung retorika. Ia memilih menyendiri. Gua Hira menjadi saksi bahwa perubahan besar selalu lahir dari kejujuran batin yang dalam. Di sanalah Nabi ﷺ bertahun-tahun beribadah, merenung, dan membersihkan hati—sebagai bentuk protes sunyi terhadap dunia yang rusak.

Lalu datanglah wahyu.

Ironis. Perintah pertama adalah membaca, sementara yang diperintah adalah seorang yang tidak bisa membaca dan menulis. Muhammad ﷺ menjawab dengan jujur: “Aku tidak bisa membaca.” Namun justru di titik ketidakmampuan manusia itulah kuasa Allah bekerja.

Allah tidak memilih profesor, tidak menunggu gelar, tidak meminta ijazah. Allah memilih hati yang jujur, akal yang hidup, dan keberanian untuk memikul amanah.

Inilah tamparan pertama bagi umat Islam sepanjang zaman.

Nabi ﷺ yang ummi—tidak bisa membaca dan menulis—membangun peradaban paling agung dalam sejarah. Sementara umat yang mengaku berilmu hari ini, dengan ribuan kitab dan kajian, justru berjalan di tempat. Islam dipersempit menjadi wacana, dipenjara dalam forum, dan dilumpuhkan menjadi rutinitas tanpa keberanian.

Allah telah berjanji:

Janji ini bukan untuk mereka yang sombong dengan pengetahuan, tetapi untuk mereka yang mau memahami Al-Qur’an dengan ketundukan dan tanggung jawab.

Pertanyaannya bukan lagi: apakah kita paham?
Melainkan: apakah kita peduli?

Untuk apa Allah memberi akal, jika akal itu hanya dipakai untuk membenarkan kemalasan? Untuk apa ilmu, jika ia tidak melahirkan keberpihakan kepada kebenaran? Untuk apa puasa, jika ia tidak menghidupkan keberanian menegakkan Islam dalam seluruh aspek kehidupan?

Rasulullah ﷺ bersabda:

Ramadhan bukan bulan pelarian. Ia adalah bulan konfrontasi—antara iman dan kepalsuan, antara keberanian dan kenyamanan. Puasa bukan sekadar menahan lapar, tetapi menahan diri dari sikap pengecut terhadap kerusakan umat.

Wahyu pertama bukan turun di istana, tetapi di gua. Bukan kepada bangsawan, tetapi kepada hamba yang jujur. Ini pesan keras bagi kita semua: perubahan tidak menunggu sempurna, perubahan dimulai dari kepedulian.

Jika Nabi ﷺ yang tidak bisa membaca dan menulis mampu membangun peradaban dengan wahyu dan keberanian, maka apa alasan kita—yang merasa pintar—untuk terus berdiam?

Ramadhan telah datang.
Pertanyaannya: apakah iman kita ikut bangkit, atau kembali tertidur dalam ritual tanpa makna?`,
      en: `Mecca at that time was not dark because of the night, but because of ignorance (Jahiliyyah). Not because of the lack of sunlight, but because humans extinguished the light of reason and conscience. Idols stood magnificently around the Kaaba, while justice was trampled, women were demeaned, the poor were oppressed, and truth was traded. The 'Ashar tribe—like other tribes—lived in false pride, glorifying lineage but killing morality.

Muhammad bin 'Abdullah ﷺ was restless. That restlessness was not the restlessness of an intellectual busy debating, but the restlessness of a servant whose heart was alive. He witnessed moral decay, social injustice, and the worship of others besides Allah—then asked in silence: how long will humans deceive themselves?

He did not lead a seminar, did not write a treatise, did not build a rhetoric stage. He chose to be alone. Cave Hira became a witness that great change is always born from deep inner honesty. It was there that the Prophet ﷺ spent years worshipping, contemplating, and purifying his heart—as a form of silent protest against a broken world.

Then came the revelation.

Ironic. The first command was to read, while the one commanded was one who could not read or write. Muhammad ﷺ answered honestly: "I cannot read." But precisely at the point of human inability, Allah's power works.

Allah did not choose a professor, did not wait for a degree, did not ask for a diploma. Allah chose an honest heart, a living mind, and the courage to bear the trust.

This is the first slap for the Muslim Ummah throughout the ages.

The unlettered Prophet ﷺ—unable to read and write—built the greatest civilization in history. While the Ummah that claims to be knowledgeable today, with thousands of books and studies, is walking in place. Islam is narrowed into discourse, imprisoned in forums, and paralyzed into routines without courage.

Allah has promised:

This promise is not for those who are arrogant with knowledge, but for those who are willing to understand the Qur'an with submission and responsibility.

The question is no longer: do we understand?
But: do we care?

What is the use of Allah giving reason, if that reason is only used to justify laziness? What is the use of knowledge, if it does not give birth to partiality towards the truth? What is the use of fasting, if it does not revive the courage to uphold Islam in all aspects of life?

The Messenger of Allah ﷺ said:

Ramadan is not a month of escape. It is a month of confrontation—between faith and falsehood, between courage and comfort. Fasting is not just holding back hunger, but holding back oneself from cowardice towards the damage of the Ummah.

The first revelation did not descend in a palace, but in a cave. Not to a nobleman, but to an honest servant. This is a hard message for us all: change does not wait for perfection, change starts from caring.

If the Prophet ﷺ who could not read and write was able to build a civilization with revelation and courage, then what is our excuse—who feel smart—to keep remaining silent?

Ramadan has come.
The question is: does our faith rise with it, or fall back asleep in meaningless rituals?`,
      ar: `لم تكن مكة في ذلك الوقت مظلمة بسبب الليل، بل بسبب الجاهلية. ليس بسبب نقص ضوء الشمس، بل لأن البشر أطفأوا نور العقل والضمير. وقفت الأصنام شامخة حول الكعبة، بينما داسوا العدالة، وأهانوا النساء، واضطهدوا الفقراء، وتمت المتاجرة بالحقيقة. عاشت قبيلة "عشر" - مثل القبائل الأخرى - في فخر زائف، تمجد النسب ولكن تقتل الأخلاق.

كان محمد بن عبد الله ﷺ قلقاً. لم يكن ذلك القلق قلق مثقف مشغول بالجدال، بل قلق عبد قلبه حي. شاهد الفساد الأخلاقي، والظلم الاجتماعي، وعبادة غير الله - ثم سأل في صمت: إلى متى يخدع البشر أنفسهم؟

لم يقد ندوة، ولم يكتب رسالة، ولم يبن مسرحاً للخطابة. اختار أن ينعزل. أصبح غار حراء شاهداً على أن التغيير العظيم يولد دائماً من الصدق الداخلي العميق. هناك قضى النبي ﷺ سنوات يتعبد، ويتأمل، ويطهر قلبه - كشكل من أشكال الاحتجاج الصامت ضد عالم محطم.

ثم جاء الوحي.

يا للمفارقة. كان الأمر الأول هو القراءة، بينما المأمور هو شخص لا يستطيع القراءة والكتابة. أجاب محمد ﷺ بصدق: "ما أنا بقارئ". ولكن في نقطة العجز البشري هذه بالتحديد تعمل قدرة الله.

لم يختر الله أستاذاً، ولم ينتظر شهادة، ولم يطلب دبلومًا. اختار الله قلباً صادقاً، وعقلاً حياً، وشجاعة لحمل الأمانة.

هذه هي الصفعة الأولى للأمة الإسلامية عبر العصور.

النبي الأمي ﷺ - الذي لا يقرأ ولا يكتب - بنى أعظم حضارة في التاريخ. بينما الأمة التي تدعي العلم اليوم، مع آلاف الكتب والدراسات، تراوح مكانها. تم تضييق الإسلام ليصبح مجرد خطاب، وسجن في المنتديات، وشل ليصبح روتيناً بلا شجاعة.

لقد وعد الله:

هذا الوعد ليس لأولئك المتكبرين بالعلم، بل لأولئك المستعدين لفهم القرآن بخضوع ومسؤولية.

السؤال لم يعد: هل نفهم؟
بل: هل نهتم؟

ما فائدة أن يعطي الله العقل، إذا كان ذلك العقل يستخدم فقط لتبرير الكسل؟ ما فائدة العلم، إذا لم يلد انحيازاً للحقيقة؟ ما فائدة الصيام، إذا لم يحيي الشجاعة لإقامة الإسلام في جميع جوانب الحياة؟

قال رسول الله ﷺ:

رمضان ليس شهر هروب. إنه شهر مواجهة - بين الإيمان والباطل، بين الشجاعة والراحة. الصيام ليس مجرد الامتناع عن الجوع، بل الامتناع عن الجبن تجاه فساد الأمة.

لم ينزل الوحي الأول في قصر، بل في غار. ليس لنبيل، بل لعبد صادق. هذه رسالة قاسية لنا جميعاً: التغيير لا ينتظر الكمال، التغيير يبدأ من الاهتمام.

إذا كان النبي ﷺ الذي لا يقرأ ولا يكتب قادراً على بناء حضارة بالوحي والشجاعة، فما هو عذرنا - ونحن نشعر بالذكاء - لنبقى صامتين؟

قد جاء رمضان.
السؤال هو: هل ينهض إيماننا معه، أم يعود للنوم في طقوس بلا معنى؟`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"Iqra’ bismi rabbika alladzi khalaq."</strong><br>
“Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan.”<br>
(QS. Al-‘Alaq: 1)</p>
<br>
<p style="text-align: center;"><strong>"Dia mengajarkan manusia apa yang tidak diketahuinya."</strong><br>
(QS. Al-‘Alaq: 5)</p>
<br>
<p style="text-align: center;"><strong>"Kemudian sesungguhnya Kamilah yang akan menjelaskannya."</strong><br>
(QS. Al-Qiyamah: 19)</p>
<br>
<p style="text-align: center;"><strong>"Dan sungguh, Kami telah mudahkan Al-Qur’an untuk peringatan, maka adakah orang yang mau mengambil pelajaran?"</strong><br>
(QS. Al-Qamar: 17)</p>
<br>
<p style="text-align: center;"><strong>"Barang siapa di antara kalian melihat kemungkaran, maka hendaklah ia mengubahnya dengan tangannya; jika tidak mampu, maka dengan lisannya; dan jika tidak mampu, maka dengan hatinya—dan itu adalah selemah-lemahnya iman."</strong><br>
(HR. Muslim)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"Read in the name of your Lord who created."</strong><br>
(QS. Al-‘Alaq: 1)</p>
<br>
<p style="text-align: center;"><strong>"He taught man that which he knew not."</strong><br>
(QS. Al-‘Alaq: 5)</p>
<br>
<p style="text-align: center;"><strong>"Then indeed, upon Us is its clarification."</strong><br>
(QS. Al-Qiyamah: 19)</p>
<br>
<p style="text-align: center;"><strong>"And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?"</strong><br>
(QS. Al-Qamar: 17)</p>
<br>
<p style="text-align: center;"><strong>"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; and if he cannot, then with his heart—and that is the weakest of faith."</strong><br>
(Hadith Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"اقرأ باسم ربك الذي خلق."</strong><br>
(سورة العلق: 1)</p>
<br>
<p style="text-align: center;"><strong>"علم الإنسان ما لم يعلم."</strong><br>
(سورة العلق: 5)</p>
<br>
<p style="text-align: center;"><strong>"ثم إن علينا بيانه."</strong><br>
(سورة القيامة: 19)</p>
<br>
<p style="text-align: center;"><strong>"ولقد يسرنا القرآن للذكر فهل من مدكر."</strong><br>
(سورة القمر: 17)</p>
<br>
<p style="text-align: center;"><strong>"من رأى منكم منكراً فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان."</strong><br>
(رواه مسلم)</p>`
    }
  }
];

export function getCerpen(): Cerpen[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
      return INITIAL_DATA;
    }
    // Check if the data structure matches the new version (has 'id' in title)
    // If not, reset to initial data to avoid errors
    if (parsed.length > 0 && typeof parsed[0].title === 'string') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
        return INITIAL_DATA;
    }
    return parsed;
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
  return INITIAL_DATA;
}

export function getCerpenById(id: string): Cerpen | undefined {
  const data = getCerpen();
  return data.find((c) => c.id === id);
}

export function saveCerpen(newItem: Cerpen) {
  const data = getCerpen();
  const index = data.findIndex((c) => c.id === newItem.id);
  
  if (index >= 0) {
    data[index] = newItem;
  } else {
    data.push(newItem);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
