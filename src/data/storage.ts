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

Janji ini bukan untuk mereka yang sombong dengan pengetahuan, tetapi untuk mereka yang mau memahami Al-Qur’an dengan ketundukan dan tanggung jawab.

Pertanyaannya bukan lagi: apakah kita paham?
Melainkan: apakah kita peduli?

Untuk apa Allah memberi akal, jika akal itu hanya dipakai untuk membenarkan kemalasan? Untuk apa ilmu, jika ia tidak melahirkan keberpihakan kepada kebenaran? Untuk apa puasa, jika ia tidak menghidupkan keberanian menegakkan Islam dalam seluruh aspek kehidupan?

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

This promise is not for those who are arrogant with knowledge, but for those who are willing to understand the Qur'an with submission and responsibility.

The question is no longer: do we understand?
But: do we care?

What is the use of Allah giving reason, if that reason is only used to justify laziness? What is the use of knowledge, if it does not give birth to partiality towards the truth? What is the use of fasting, if it does not revive the courage to uphold Islam in all aspects of life?

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

هذا الوعد ليس لأولئك المتكبرين بالعلم، بل لأولئك المستعدين لفهم القرآن بخضوع ومسؤولية.

السؤال لم يعد: هل نفهم؟
بل: هل نهتم؟

ما فائدة أن يعطي الله العقل، إذا كان ذلك العقل يستخدم فقط لتبرير الكسل؟ ما فائدة العلم، إذا لم يلد انحيازاً للحقيقة؟ ما فائدة الصيام، إذا لم يحيي الشجاعة لإقامة الإسلام في جميع جوانب الحياة؟

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
  },
  {
    id: "2",
    title: {
      id: "Iman yang Dibuktikan, Bukan Dinyanyikan",
      en: "Faith Proven, Not Sung",
      ar: "الإيمان المثبت، لا المغنى به"
    },
    content: {
      id: `Dakwah itu berat. Jika terasa ringan, besar kemungkinan ia telah kehilangan keikhlasannya. Sejak awal, Islam tidak pernah menjanjikan kenyamanan—yang dijanjikan hanyalah kebenaran, dan kebenaran selalu menuntut harga.

Rasulullah ﷺ memulai dakwahnya di Makkah bukan dengan sambutan, tetapi dengan caci maki. Bukan dengan penghormatan, tetapi dengan pemboikotan, penyiksaan, dan ancaman nyawa. Para sahabat tidak hanya diuji imannya, tetapi dihancurkan kenyamanannya. Ada yang diseret di padang pasir, ada yang dipukul hingga pingsan, ada yang dipaksa memilih antara Islam atau keluarga.

Namun mereka bertahan.

Bukan karena Islam menjanjikan dunia, tetapi karena iman mereka nyata—bukan sekadar pengakuan lisan.

Hari ini, kita mengaku beriman, tetapi dakwah terasa pahit sedikit saja sudah mengeluh. Ketika Islam dihina, syariat diabaikan, dan umat dilemahkan, kita justru berkata: "Yang penting iman di hati."

Pertanyaannya: iman yang tidak melahirkan sikap, masih pantaskah disebut iman?

Puasa bukan sekadar ibadah personal. Ia adalah latihan ketaatan total. Dan sejarah mencatat: puasa pertama umat Islam langsung diikuti ujian paling berat—perang.

Perang Badar.

Kaum Muslimin berjumlah 313 orang, dengan persenjataan seadanya.
Kaum Quraisy berjumlah sekitar 1.000 orang, lengkap dengan perlengkapan perang.

Secara logika manusia, ini bukan pertempuran—ini bunuh diri.
Secara matematika, ini kekalahan yang pasti.

Namun iman tidak tunduk pada statistik.

Inilah pelajaran yang menghantam keras umat Islam sepanjang zaman:
kemenangan tidak lahir dari jumlah, tetapi dari iman dan takwa.

Puasa mereka bukan puasa yang memanjakan diri.
Iman mereka bukan iman yang bersembunyi.
Dakwah mereka bukan dakwah yang mencari aman.

Bandingkan dengan hari ini.

Syariat Islam tidak tegak, tetapi kita merasa baik-baik saja.
Umat terpecah, tetapi kita sibuk dengan urusan pribadi.
Islam hanya hidup di masjid dan kajian, tetapi mati dalam sistem kehidupan.

Lalu kita berkata: "Kami beriman."

Puasa tanpa pembuktian hanyalah ritual.
Iman tanpa pengorbanan hanyalah klaim.
Dan dakwah tanpa risiko hanyalah hiburan rohani.

Badar mengajarkan satu hal yang tidak pernah berubah:
Allah bersama orang-orang yang beriman dan bertakwa, bukan dengan mereka yang hanya pandai berbicara.

Ramadhan hari kedua ini seharusnya membuat kita bertanya dengan jujur:
Jika iman diuji hari ini—
bukan dengan perang, tetapi dengan keberanian bersikap—
apakah kita masih berdiri, atau memilih aman?

Karena iman sejati tidak pernah bertanya, "Apa risikonya?"
Ia bertanya, "Apa kewajiban saya di hadapan Allah?"`,
      en: `Da'wah is heavy. If it feels light, it is very likely that it has lost its sincerity. From the beginning, Islam never promised comfort—what was promised was only the truth, and the truth always demands a price.

The Messenger of Allah ﷺ started his da'wah in Mecca not with a welcome, but with abuse. Not with respect, but with boycotts, torture, and threats to life. The companions were not only tested in their faith, but their comfort was destroyed. Some were dragged in the desert, some were beaten until unconscious, some were forced to choose between Islam or family.

But they endured.

Not because Islam promised the world, but because their faith was real—not just verbal confession.

Today, we claim to believe, but when da'wah feels a little bitter, we complain. When Islam is insulted, Sharia is ignored, and the Ummah is weakened, we instead say: "The important thing is faith in the heart."

The question is: is faith that does not give birth to an attitude still worthy of being called faith?

Fasting is not just personal worship. It is a practice of total obedience. And history records: the first fasting of Muslims was immediately followed by the heaviest test—war.

Battle of Badr.

The Muslims numbered 313 people, with makeshift weapons.
The Quraysh numbered about 1,000 people, complete with war equipment.

Logically, this is not a battle—this is suicide.
Mathematically, this is a certain defeat.

But faith does not bow to statistics.

This is a lesson that hits Muslims hard throughout the ages:
victory is not born from numbers, but from faith and piety.

Their fasting was not fasting that pampered themselves.
Their faith was not faith that hid.
Their da'wah was not da'wah that sought safety.

Compare it with today.

Islamic Sharia is not upright, but we feel fine.
The Ummah is divided, but we are busy with personal affairs.
Islam only lives in mosques and studies, but dies in the system of life.

Then we say: "We believe."

Fasting without proof is just a ritual.
Faith without sacrifice is just a claim.
And da'wah without risk is just spiritual entertainment.

Badr taught one thing that never changes:
Allah is with those who believe and fear Him, not with those who are only good at talking.

This second day of Ramadan should make us ask honestly:
If faith is tested today—
not with war, but with the courage to take a stand—
are we still standing, or choosing safety?

Because true faith never asks, "What is the risk?"
It asks, "What is my duty before Allah?"`,
      ar: `الدعوة ثقيلة. إذا شعرت أنها خفيفة، فمن المحتمل جدًا أنها فقدت إخلاصها. منذ البداية، لم يعد الإسلام أبدًا بالراحة - ما وعد به كان الحق فقط، والحق يتطلب دائمًا ثمنًا.

بدأ رسول الله ﷺ دعوته في مكة ليس بالترحيب، بل بالشتائم. ليس بالاحترام، بل بالمقاطعة والتعذيب والتهديد بالقتل. لم يختبر الصحابة في إيمانهم فحسب، بل دمرت راحتهم. سُحب البعض في الصحراء، وضُرب البعض حتى فقدوا الوعي، وأُجبر البعض على الاختيار بين الإسلام أو العائلة.

لكنهم صمدوا.

ليس لأن الإسلام وعد بالدنيا، بل لأن إيمانهم كان حقيقيًا - وليس مجرد اعتراف لفظي.

اليوم، ندعي الإيمان، ولكن عندما تشعر الدعوة بمرارة قليلة، نشتكي. عندما يُهان الإسلام، وتُتجاهل الشريعة، وتضعف الأمة، نقول بدلاً من ذلك: "المهم هو الإيمان في القلب".

السؤال هو: هل الإيمان الذي لا يولد موقفًا لا يزال يستحق أن يسمى إيمانًا؟

الصيام ليس مجرد عبادة شخصية. إنه ممارسة للطاعة الكاملة. ويسجل التاريخ: أول صيام للمسلمين تبعه مباشرة أصعب اختبار - الحرب.

غزوة بدر.

كان عدد المسلمين 313 شخصًا، بأسلحة بدائية.
كان عدد قريش حوالي 1000 شخص، كاملين بمعدات الحرب.

منطقياً، هذه ليست معركة - هذا انتحار.
حسابياً، هذه هزيمة مؤكدة.

لكن الإيمان لا يخضع للإحصاءات.

هذا درس يضرب المسلمين بقوة عبر العصور:
النصر لا يولد من العدد، بل من الإيمان والتقوى.

لم يكن صيامهم صياماً يدلل أنفسهم.
لم يكن إيمانهم إيمانًا يختبئ.
لم تكن دعوتهم دعوة تبحث عن الأمان.

قارن ذلك باليوم.

الشريعة الإسلامية ليست قائمة، لكننا نشعر بأننا بخير.
الأمة منقسمة، لكننا مشغولون بالشؤون الشخصية.
الإسلام يعيش فقط في المساجد والدراسات، لكنه يموت في نظام الحياة.

ثم نقول: "نحن نؤمن".

الصيام بلا برهان مجرد طقس.
الإيمان بلا تضحية مجرد ادعاء.
والدعوة بلا مخاطرة مجرد ترفيه روحي.

علمت بدر شيئًا واحدًا لا يتغير أبدًا:
الله مع الذين آمنوا واتقوا، لا مع الذين يجيدون الكلام فقط.

هذا اليوم الثاني من رمضان يجب أن يجعلنا نسأل بصدق:
إذا اختبر الإيمان اليوم -
ليس بالحرب، بل بشجاعة اتخاذ موقف -
هل ما زلنا صامدين، أم نختار الأمان؟

لأن الإيمان الحقيقي لا يسأل أبدًا: "ما هي المخاطرة؟"
إنه يسأل: "ما هو واجبي أمام الله؟"`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"Apakah manusia mengira bahwa mereka akan dibiarkan hanya dengan mengatakan, 'Kami telah beriman,' sedang mereka tidak diuji?"</strong><br>
(QS. Al-‘Ankabut: 2)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ</div>
<p style="text-align: center;"><strong>"Dan sungguh, Allah telah menolong kamu dalam Perang Badar, padahal kamu dalam keadaan lemah."</strong><br>
(QS. Ali ‘Imran: 123)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ</div>
<p style="text-align: center;"><strong>"Maka (sebenarnya) bukan kamu yang membunuh mereka, melainkan Allah yang membunuh mereka, dan bukan engkau yang melempar ketika engkau melempar, tetapi Allah yang melempar."</strong><br>
(QS. Al-Anfal: 17)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ</div>
<p style="text-align: center;"><strong>"(Ingatlah) ketika kamu memohon pertolongan kepada Tuhanmu, lalu Dia mengabulkanmu: 'Sesungguhnya Aku akan mendatangkan bala bantuan kepadamu dengan seribu malaikat yang datang berturut-turut.'"</strong><br>
(QS. Al-Anfal: 9)</p>
<br>
<p style="text-align: center;"><strong>"Barang siapa tidak peduli terhadap urusan kaum Muslimin, maka ia bukan bagian dari mereka."</strong><br>
(HR. Al-Hakim, hasan)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"Do the people think that they will be left to say, 'We believe' and they will not be tried?"</strong><br>
(QS. Al-‘Ankabut: 2)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ</div>
<p style="text-align: center;"><strong>"And Allah had certainly already aided you at Badr while you were few in number."</strong><br>
(QS. Ali ‘Imran: 123)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ</div>
<p style="text-align: center;"><strong>"And you did not kill them, but it was Allah who killed them. And you threw not, [O Muhammad], when you threw, but it was Allah who threw."</strong><br>
(QS. Al-Anfal: 17)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ</div>
<p style="text-align: center;"><strong>"[Remember] when you asked help of your Lord, and He answered you, 'Indeed, I will reinforce you with a thousand from the angels, following one another.'"</strong><br>
(QS. Al-Anfal: 9)</p>
<br>
<p style="text-align: center;"><strong>"Whoever does not care about the affairs of the Muslims, then he is not part of them."</strong><br>
(HR. Al-Hakim, hasan)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"أحسب الناس أن يتركوا أن يقولوا آمنا وهم لا يفتنون"</strong><br>
(سورة العنكبوت: 2)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنْتُمْ أَذِلَّةٌ</div>
<p style="text-align: center;"><strong>"ولقد نصركم الله ببدر وأنتم أذلة"</strong><br>
(سورة آل عمران: 123)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ ۚ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ</div>
<p style="text-align: center;"><strong>"فلم تقتلوهم ولكن الله قتلهم وما رميت إذ رميت ولكن الله رمى"</strong><br>
(سورة الأنفال: 17)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُمْ بِأَلْفٍ مِنَ الْمَلَائِكَةِ مُرْدِفِينَ</div>
<p style="text-align: center;"><strong>"إذ تستغيثون ربكم فاستجاب لكم أني ممدكم بألف من الملائكة مردفين"</strong><br>
(سورة الأنفال: 9)</p>
<br>
<p style="text-align: center;"><strong>"من لم يهتم بأمر المسلمين فليس منهم"</strong><br>
(رواه الحاكم، حسن)</p>`
    }
  },
  {
    id: "3",
    title: {
      id: "Untuk Apa Kita Berdagang?",
      en: "What Do We Trade For?",
      ar: "لماذا نتاجر؟"
    },
    content: {
      id: `Sejak awal, Islam tidak pernah memusuhi perdagangan. Justru Islam lahir dan tumbuh di tangan para pedagang. Nabi Muhammad ﷺ adalah pedagang. Abu Bakar pedagang. Umar pedagang. Utsman pedagang. Abdurrahman bin Auf pedagang. Hampir seluruh tulang punggung umat Islam generasi awal adalah ahli bisnis dan niaga.

Namun pertanyaannya bukan: apakah Islam membolehkan berdagang?
Pertanyaan yang jauh lebih penting adalah: untuk apa kita berdagang?

Jika berdagang hanya untuk memenuhi nafkah hidup, maka sesungguhnya kita telah salah niat sejak awal. Karena urusan rezeki, Allah telah menegaskannya tanpa syarat.

Ayat ini tidak mengatakan jika ia berdagang, jika ia pintar, atau jika ia punya modal. Rezeki dijamin karena Allah menciptakan makhluk tersebut, bukan karena kecerdikan manusia.

Maka jika tujuan berdagang hanya untuk hidup, sesungguhnya itu urusan yang sudah Allah selesaikan.

Lalu mengapa Nabi dan para sahabat berdagang?
Jawabannya satu: untuk menopang dakwah Islam.

Lihat Abu Bakar Ash-Shiddiq radhiyallahu ‘anhu. Ketika Rasulullah ﷺ membutuhkan harta untuk perjuangan, Abu Bakar datang membawa seluruh hartanya.

Umar bin Khattab radhiyallahu ‘anhu—yang dikenal tegas dan kuat—pun mengakui keunggulan Abu Bakar.

Umar bersedekah setengah hartanya. Abu Bakar memberikan semuanya.
Bukan karena Abu Bakar tidak cinta keluarga, tetapi karena ia yakin Allah tidak akan menyia-nyiakan orang yang menolong agama-Nya.

Abdurrahman bin Auf radhiyallahu ‘anhu adalah pedagang ulung. Ia kaya raya, namun kekayaannya tidak pernah menetap di tangannya. Ketika Madinah membutuhkan, hartanya mengalir. Ketika umat kesulitan, ia hadir.

Utsman bin Affan radhiyallahu ‘anhu membeli sumur Raumah untuk umat. Ia membiayai pasukan dalam Perang Tabuk.

Mereka semua berdagang. Mereka semua kaya.
Namun tidak satu pun dari mereka menjadikan harta sebagai tujuan hidup.

Bandingkan dengan kita hari ini.
Kita berdagang demi ego.
Menumpuk harta demi status.
Bekerja siang malam demi warisan.
Islam cukup di lisan, tetapi tidak di laporan keuangan.
Agama cukup di masjid, tetapi tidak di neraca bisnis.

Kita takut miskin jika berinfaq, seolah-olah rezeki berada di tangan kita—bukan di tangan Allah.

Puasa hari ketiga ini seharusnya meluruskan orientasi kita:
hidup bukan untuk harta, harta diciptakan untuk agama.

Jika bisnis tidak menopang dakwah, maka ia hanya akan memperpanjang cinta dunia.
Jika kekayaan tidak memperkuat umat, maka ia akan menjadi beban di akhirat.

Ramadhan mengajarkan kita menahan lapar agar kita mengerti:
yang kita kejar selama ini bukan kebutuhan, tetapi keserakahan.

Maka hari ini, mari bertanya dengan jujur kepada diri sendiri:
Apakah bisnis kita sedang membela Islam—atau justru menjauhkan kita darinya?

Karena para sahabat berdagang untuk agama Allah.
Sementara kita—jika tidak hati-hati—bisa saja memperdagangkan agama demi dunia.`,
      en: `From the beginning, Islam has never been hostile to trade. In fact, Islam was born and grew in the hands of merchants. Prophet Muhammad ﷺ was a merchant. Abu Bakr was a merchant. Umar was a merchant. Uthman was a merchant. Abdurrahman bin Auf was a merchant. Almost the entire backbone of the early Muslim generation were experts in business and commerce.

But the question is not: does Islam allow trading?
The far more important question is: what do we trade for?

If trading is only to meet living expenses, then we have truly had the wrong intention from the start. Because regarding sustenance (rizq), Allah has affirmed it unconditionally.

The verse does not say if he trades, if he is smart, or if he has capital. Sustenance is guaranteed because Allah created the creature, not because of human ingenuity.

So if the goal of trading is only to survive, truly that is a matter that Allah has already settled.

Then why did the Prophet and the companions trade?
The answer is one: to support the da'wah of Islam.

Look at Abu Bakr Ash-Siddiq radhiyallahu ‘anhu. When the Messenger of Allah ﷺ needed wealth for the struggle, Abu Bakr came bringing all his wealth.

Umar bin Khattab radhiyallahu ‘anhu—known to be firm and strong—also admitted Abu Bakr's superiority.

Umar gave half his wealth in charity. Abu Bakr gave it all.
Not because Abu Bakr did not love his family, but because he was certain Allah would not waste those who help His religion.

Abdurrahman bin Auf radhiyallahu ‘anhu was a master merchant. He was wealthy, yet his wealth never stayed in his hands. When Medina needed it, his wealth flowed. When the Ummah was in difficulty, he was present.

Uthman bin Affan radhiyallahu ‘anhu bought the Raumah well for the Ummah. He financed the army in the Battle of Tabuk.

They all traded. They were all rich.
But not one of them made wealth the goal of life.

Compare with us today.
We trade for ego.
Piling up wealth for status.
Working day and night for inheritance.
Islam is enough on the tongue, but not in the financial report.
Religion is enough in the mosque, but not in the business balance sheet.

We are afraid of poverty if we give infaq, as if sustenance is in our hands—not in Allah's hands.

This third day of fasting should straighten our orientation:
life is not for wealth, wealth is created for religion.

If business does not support da'wah, then it will only prolong the love of the world.
If wealth does not strengthen the Ummah, then it will become a burden in the Hereafter.

Ramadan teaches us to hold back hunger so we understand:
what we have been chasing all this time is not need, but greed.

So today, let us ask honestly to ourselves:
Is our business defending Islam—or actually distancing us from it?

Because the companions traded for the religion of Allah.
While we—if not careful—could be trading religion for the world.`,
      ar: `منذ البداية، لم يعادِ الإسلام التجارة أبدًا. بل ولد الإسلام ونما على أيدي التجار. كان النبي محمد ﷺ تاجرًا. وكان أبو بكر تاجرًا. وعمر تاجرًا. وعثمان تاجرًا. وعبد الرحمن بن عوف تاجرًا. كان العمود الفقري للجيل الأول من المسلمين تقريبًا من خبراء التجارة والأعمال.

لكن السؤال ليس: هل يسمح الإسلام بالتجارة؟
السؤال الأهم بكثير هو: لماذا نتاجر؟

إذا كانت التجارة فقط لتلبية نفقات المعيشة، فقد أخطأنا النية منذ البداية. لأن مسألة الرزق، قد تكفل الله بها دون شروط.

لا تقول الآية إذا تاجر، أو إذا كان ذكيًا، أو إذا كان لديه رأس مال. الرزق مضمون لأن الله خلق المخلوق، وليس بسبب براعة الإنسان.

لذا إذا كان الهدف من التجارة هو العيش فقط، فهذا أمر قد فرغ الله منه.

إذن لماذا تاجر النبي والصحابة؟
الجواب واحد: لدعم دعوة الإسلام.

انظر إلى أبي بكر الصديق رضي الله عنه. عندما احتاج رسول الله ﷺ إلى المال للكفاح، جاء أبو بكر بكل ماله.

عمر بن الخطاب رضي الله عنه - المعروف بالحزم والقوة - اعترف أيضًا بتفوق أبي بكر.

تصدق عمر بنصف ماله. وقدم أبو بكر ماله كله.
ليس لأن أبا بكر لم يحب عائلته، بل لأنه كان على يقين أن الله لن يضيع من ينصر دينه.

كان عبد الرحمن بن عوف رضي الله عنه تاجرًا ماهرًا. كان ثريًا، لكن ثروته لم تستقر أبدًا في يديه. عندما احتاجت المدينة، تدفقت أمواله. عندما كانت الأمة في ضائقة، كان حاضرًا.

اشترى عثمان بن عفان رضي الله عنه بئر رومة للأمة. ومول الجيش في غزوة تبوك.

كلهم تاجروا. كلهم كانوا أغنياء.
لكن لم يجعل أي منهم المال هدفًا للحياة.

قارن ذلك بنا اليوم.
نحن نتاجر من أجل الأنا.
نكدس المال من أجل المكانة.
نعمل ليل نهار من أجل الميراث.
الإسلام يكفي في اللسان، ولكن ليس في التقرير المالي.
الدين يكفي في المسجد، ولكن ليس في الميزانية التجارية.

نخاف الفقر إذا أنفقنا، وكأن الرزق بأيدينا - وليس بيد الله.

صيام هذا اليوم الثالث يجب أن يصحح اتجاهنا:
الحياة ليست للمال، المال خلق للدين.

إذا لم تدعم التجارة الدعوة، فإنها لن تؤدي إلا إلى إطالة حب الدنيا.
إذا لم تقو الثروة الأمة، فستكون عبئًا في الآخرة.

يعلمنا رمضان الإمساك عن الجوع لنفهم:
أن ما نطارده طوال هذا الوقت ليس حاجة، بل جشع.

لذا اليوم، لنسأل أنفسنا بصدق:
هل تدافع تجارتنا عن الإسلام - أم تبعدنا عنه في الواقع؟

لأن الصحابة تاجروا لدين الله.
بينما نحن - إذا لم نكن حذرين - قد نتاجر بالدين من أجل الدنيا.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا</div>
<p style="text-align: center;"><strong>"Dan tidak ada satu pun makhluk melata di bumi melainkan Allah-lah yang menjamin rezekinya."</strong><br>
(QS. Hud: 6)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
<p style="text-align: center;"><strong>"Wahai orang-orang yang beriman, jika kamu menolong agama Allah, niscaya Dia akan menolongmu dan meneguhkan kedudukanmu."</strong><br>
(QS. Muhammad: 7)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُم بِالْفَحْشَاءِ ۖ وَاللَّهُ يَعِدُكُم مَّغْفِرَةً مِّنْهُ وَفَضْلًا</div>
<p style="text-align: center;"><strong>"Setan menjanjikan kamu kemiskinan dan menyuruh kamu berbuat keji, sedangkan Allah menjanjikan ampunan dan karunia."</strong><br>
(QS. Al-Baqarah: 268)</p>
<br>
<p style="text-align: center;"><strong>"Apa yang engkau sisakan untuk keluargamu, wahai Abu Bakar? Ia menjawab: 'Aku tinggalkan untuk mereka Allah dan Rasul-Nya.'"</strong><br>
(HR. Abu Dawud dan At-Tirmidzi, hasan shahih)</p>
<br>
<p style="text-align: center;"><strong>"Aku tidak akan pernah bisa mengalahkan Abu Bakar dalam kebaikan."</strong><br>
(HR. At-Tirmidzi)</p>
<br>
<p style="text-align: center;"><strong>"Abdurrahman bin Auf akan masuk surga dengan merangkak."</strong><br>
(HR. Ahmad)</p>
<br>
<p style="text-align: center;"><strong>"Tidak ada sesuatu pun yang membahayakan Utsman setelah hari ini."</strong><br>
(HR. At-Tirmidzi, shahih)</p>
<br>
<p style="text-align: center;"><strong>"Tidak akan bergeser kedua kaki seorang hamba pada hari kiamat sampai ia ditanya tentang hartanya: dari mana ia peroleh dan ke mana ia belanjakan."</strong><br>
(HR. At-Tirmidzi, hasan shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا</div>
<p style="text-align: center;"><strong>"And there is no creature on earth but that upon Allah is its provision."</strong><br>
(QS. Hud: 6)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
<p style="text-align: center;"><strong>"O you who have believed, if you support Allah, He will support you and plant firmly your feet."</strong><br>
(QS. Muhammad: 7)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُم بِالْفَحْشَاءِ ۖ وَاللَّهُ يَعِدُكُم مَّغْفِرَةً مِّنْهُ وَفَضْلًا</div>
<p style="text-align: center;"><strong>"Satan promises you poverty and orders you to immorality, while Allah promises you forgiveness from Him and bounty."</strong><br>
(QS. Al-Baqarah: 268)</p>
<br>
<p style="text-align: center;"><strong>"What have you left for your family, O Abu Bakr? He replied: 'I have left for them Allah and His Messenger.'"</strong><br>
(HR. Abu Dawud and At-Tirmidzi)</p>
<br>
<p style="text-align: center;"><strong>"I have never competed with Abu Bakr in any good deed but that he outstripped me to it."</strong><br>
(HR. At-Tirmidzi)</p>
<br>
<p style="text-align: center;"><strong>"Abdurrahman bin Auf will enter Paradise crawling."</strong><br>
(HR. Ahmad)</p>
<br>
<p style="text-align: center;"><strong>"Nothing will harm Uthman after what he has done today."</strong><br>
(HR. At-Tirmidzi)</p>
<br>
<p style="text-align: center;"><strong>"The feet of a servant will not move on the Day of Resurrection until he is asked about his wealth: from where he acquired it and in what he spent it."</strong><br>
(HR. At-Tirmidzi)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا</div>
<p style="text-align: center;"><strong>"وما من دابة في الأرض إلا على الله رزقها"</strong><br>
(سورة هود: 6)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
<p style="text-align: center;"><strong>"يا أيها الذين آمنوا إن تنصروا الله ينصركم ويثبت أقدامكم"</strong><br>
(سورة محمد: 7)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُم بِالْفَحْشَاءِ ۖ وَاللَّهُ يَعِدُكُم مَّغْفِرَةً مِّنْهُ وَفَضْلًا</div>
<p style="text-align: center;"><strong>"الشيطان يعدكم الفقر ويأمركم بالفحشاء والله يعدكم مغفرة منه وفضلا"</strong><br>
(سورة البقرة: 268)</p>
<br>
<p style="text-align: center;"><strong>"ما أبقيت لأهلك؟ قال: أبقيت لهم الله ورسوله"</strong><br>
(رواه أبو داود والترمذي)</p>
<br>
<p style="text-align: center;"><strong>"ما سبقت أبا بكر إلى خير إلا سبقني إليه"</strong><br>
(رواه الترمذي)</p>
<br>
<p style="text-align: center;"><strong>"يدخل عبد الرحمن بن عوف الجنة حبوا"</strong><br>
(رواه أحمد)</p>
<br>
<p style="text-align: center;"><strong>"ما ضر عثمان ما عمل بعد اليوم"</strong><br>
(رواه الترمذي)</p>
<br>
<p style="text-align: center;"><strong>"لا تزول قدما عبد يوم القيامة حتى يسأل عن ... وعن ماله من أين اكتسبه وفيم أنفقه"</strong><br>
(رواه الترمذي)</p>`
    }
  },
  {
    id: "4",
            title: {
              id: "Ketika Harta dan Kekuasaan Berubah Menjadi Amanah",
              en: "When Wealth and Power Turn into Trust",
              ar: "عندما تتحول الثروة والسلطة إلى أمانة"
            },
            content: {
              id: `Islam tidak pernah memusuhi harta.
Islam tidak alergi terhadap kekuasaan.

Yang Islam perangi sejak awal adalah keserakahan dan pengkhianatan terhadap amanah.

Sejarah mencatat dengan jujur: Islam pernah memimpin peradaban dunia. Dan ketika Islam memimpin, keadilan bukan jargon, tetapi sistem yang hidup. Masalah umat hari ini bukan karena Islam tidak mampu memimpin, melainkan karena umat Islam sendiri takut memikul amanah kepemimpinan.

Hari ini, harta dicurigai. Kekuasaan dianggap kotor. Politik dipandang najis. Akibatnya, umat Islam menjauh dari urusan kepemimpinan, lalu kekuasaan jatuh ke tangan mereka yang tidak takut kepada Allah. Setelah itu umat mengeluh, marah, dan kecewa—namun tetap enggan mengambil tanggung jawab.

Padahal Rasulullah ﷺ tidak lari dari kekuasaan. Beliau membangunnya. Negara Madinah bukan kecelakaan sejarah, melainkan hasil dakwah yang sadar arah dan tujuan. Dalam Islam, kekuasaan bukan untuk dinikmati, tetapi untuk dihisab.

Para sahabat memahami ini dengan sangat dalam.

Abu Bakar Ash-Shiddiq radhiyallahu ‘anhu tidak melihat jabatan sebagai kehormatan, tetapi sebagai beban. Ia tidak menjanjikan kemakmuran, melainkan kejujuran. Ia membuka pintu kritik terhadap dirinya sendiri. Inilah kepemimpinan yang lahir dari iman, bukan dari ambisi.

Umar bin Khattab radhiyallahu ‘anhu bahkan hidup dalam kegelisahan. Ia takut kepada Allah bukan karena kurang ibadah, tetapi karena sadar bahwa setiap penderitaan rakyat adalah tanggung jawab kekuasaan. Dalam Islam, penguasa tidak bersembunyi di balik prosedur, tetapi berdiri paling depan saat hisab.

Bandingkan dengan kondisi hari ini.

Jalan rusak dianggap biasa.
Kemiskinan dianggap takdir.
Kezaliman dianggap risiko jabatan.

Lalu kita berkata dengan enteng: "Yang penting shalat."

Padahal shalat yang benar seharusnya melahirkan keberanian moral, kepekaan sosial, dan tanggung jawab peradaban. Iman yang hidup tidak mungkin tenang melihat kezaliman dilegalkan dan ketidakadilan dinormalisasi.

Peradaban Islam tidak runtuh karena kekurangan harta atau kekuasaan. Ia runtuh ketika amanah dikhianati. Ketika jabatan diwariskan, hukum diperdagangkan, dan harta ditumpuk untuk kepentingan pribadi, saat itulah ruh Islam mulai ditinggalkan—meskipun simbol-simbol agama masih berdiri megah.

Umat Islam hari ini sering terjebak dalam kontradiksi yang memalukan: ingin Islam berjaya, tetapi menolak sistem yang membuat Islam berjaya. Ingin keadilan, tetapi alergi pada pembahasan kekuasaan. Ingin kemuliaan, tetapi hanya sibuk pada ibadah personal.

Puasa Ramadhan hari keempat ini seharusnya meluruskan arah iman kita. Iman bukan hanya urusan sajadah, tetapi juga urusan kepemimpinan, keadilan, dan amanah peradaban. Jika umat Islam terus menjauh dari tanggung jawab ini, maka dunia akan terus dipimpin tanpa nilai Ilahi—dan itu bukan konspirasi, melainkan akibat langsung dari kelalaian umat sendiri.

Islam tidak diturunkan untuk kalah.
Islam diturunkan untuk mengatur kehidupan manusia dengan keadilan Allah.

Pertanyaan yang seharusnya kita ajukan hari ini bukan lagi:
"Apakah kekuasaan itu kotor?"

Tetapi pertanyaan yang jauh lebih jujur dan menakutkan:
"Apakah kita masih layak dipercaya memegang amanah Allah?"`,
              en: `Islam has never been hostile to wealth.
Islam is not allergic to power.

What Islam has fought from the beginning is greed and betrayal of trust (amanah).

History records honestly: Islam once led world civilization. And when Islam led, justice was not jargon, but a living system. The problem of the Ummah today is not because Islam is incapable of leading, but because the Muslims themselves are afraid to bear the trust of leadership.

Today, wealth is suspected. Power is considered dirty. Politics is viewed as impure. As a result, Muslims stay away from leadership affairs, then power falls into the hands of those who do not fear Allah. After that, the people complain, get angry, and are disappointed—but still reluctant to take responsibility.

Whereas the Messenger of Allah ﷺ did not run from power. He built it. The State of Medina was not a historical accident, but the result of da'wah that was conscious of direction and purpose. In Islam, power is not to be enjoyed, but to be held accountable for.

The companions understood this very deeply.

Abu Bakr Ash-Siddiq radhiyallahu ‘anhu did not see office as an honor, but as a burden. He did not promise prosperity, but honesty. He opened the door to criticism against himself. This is leadership born of faith, not ambition.

Umar bin Khattab radhiyallahu ‘anhu even lived in anxiety. He feared Allah not because of lack of worship, but because he realized that every suffering of the people is the responsibility of power. In Islam, the ruler does not hide behind procedures, but stands at the forefront during reckoning (hisab).

Compare with the condition today.

Damaged roads are considered normal.
Poverty is considered destiny.
Tyranny is considered an occupational hazard.

Then we say lightly: "The important thing is prayer."

Whereas true prayer should give birth to moral courage, social sensitivity, and civilizational responsibility. Living faith cannot be calm seeing tyranny legalized and injustice normalized.

Islamic civilization did not collapse because of a lack of wealth or power. It collapsed when trust was betrayed. When office was inherited, law was traded, and wealth was piled up for personal interest, that was when the spirit of Islam began to be abandoned—even though religious symbols still stood tall.

Muslims today are often trapped in a shameful contradiction: wanting Islam to triumph, but rejecting the system that makes Islam triumph. Wanting justice, but allergic to discussing power. Wanting glory, but only busy with personal worship.

Fasting on this fourth day of Ramadan should straighten the direction of our faith. Faith is not just a matter of the prayer rug, but also a matter of leadership, justice, and civilizational trust. If Muslims continue to stay away from this responsibility, then the world will continue to be led without Divine values—and that is not a conspiracy, but a direct result of the negligence of the Ummah itself.

Islam was not sent down to lose.
Islam was sent down to regulate human life with Allah's justice.

The question we should ask today is no longer:
"Is power dirty?"

But a far more honest and frightening question:
"Are we still worthy of being trusted to hold Allah's trust?"`,
              ar: `لم يعادِ الإسلام الثروة أبدًا.
الإسلام ليس لديه حساسية تجاه السلطة.

ما حاربه الإسلام منذ البداية هو الجشع وخيانة الأمانة.

يسجل التاريخ بصدق: قاد الإسلام حضارة العالم ذات يوم. وعندما قاد الإسلام، لم تكن العدالة شعارًا، بل نظامًا حيًا. مشكلة الأمة اليوم ليست لأن الإسلام غير قادر على القيادة، بل لأن المسلمين أنفسهم يخافون من حمل أمانة القيادة.

اليوم، الثروة مشبوهة. السلطة تعتبر قذرة. السياسة ينظر إليها على أنها نجسة. ونتيجة لذلك، يبتعد المسلمون عن شؤون القيادة، فتسقط السلطة في أيدي من لا يخافون الله. بعد ذلك، يشتكي الناس، ويغضبون، ويصابون بخيبة أمل - لكنهم ما زالوا مترددين في تحمل المسؤولية.

بينما لم يهرب رسول الله ﷺ من السلطة. بل بناها. لم تكن دولة المدينة حادثة تاريخية، بل نتيجة دعوة واعية بالاتجاه والهدف. في الإسلام، السلطة ليست للمتعة، بل للحساب.

فهم الصحابة هذا بعمق شديد.

لم ير أبو بكر الصديق رضي الله عنه المنصب تشريفًا، بل تكليفًا. لم يعد بالرخاء، بل بالصدق. فتح باب النقد لنفسه. هذه هي القيادة النابعة من الإيمان، لا من الطموح.

حتى أن عمر بن الخطاب رضي الله عنه عاش في قلق. كان يخاف الله ليس بسبب قلة العبادة، بل لأنه أدرك أن كل معاناة للشعب هي مسؤولية السلطة. في الإسلام، لا يختبئ الحاكم خلف الإجراءات، بل يقف في المقدمة عند الحساب.

قارن ذلك بالوضع اليوم.

الطرق المدمرة تعتبر أمرًا عاديًا.
الفقر يعتبر قدرًا.
الظلم يعتبر من مخاطر الوظيفة.

ثم نقول باستخفاف: "المهم هو الصلاة".

بينما الصلاة الحقيقية يجب أن تلد الشجاعة الأخلاقية، والحساسية الاجتماعية، والمسؤولية الحضارية. الإيمان الحي لا يمكن أن يهدأ وهو يرى الظلم مقننًا والجور مطبعًا.

لم تنهار الحضارة الإسلامية بسبب نقص الثروة أو السلطة. انهارت عندما خيانت الأمانة. عندما تم توريث المناصب، والمتاجرة بالقانون، وتكديس الثروة للمصلحة الشخصية، عندها بدأت روح الإسلام تُهجر - رغم أن الرموز الدينية ما زالت شامخة.

المسلمون اليوم غالبًا ما يقعون في تناقض مخز: يريدون للإسلام أن ينتصر، لكنهم يرفضون النظام الذي يجعل الإسلام ينتصر. يريدون العدالة، لكنهم لديهم حساسية من مناقشة السلطة. يريدون العزة، لكنهم مشغولون فقط بالعبادة الشخصية.

صيام هذا اليوم الرابع من رمضان يجب أن يصحح اتجاه إيماننا. الإيمان ليس مجرد مسألة سجادة صلاة، بل هو أيضًا مسألة قيادة، وعدالة، وأمانة حضارية. إذا استمر المسلمون في الابتعاد عن هذه المسؤولية، فسيستمر العالم في القيادة بدون قيم إلهية - وهذه ليست مؤامرة، بل نتيجة مباشرة لإهمال الأمة نفسها.

لم يُنزل الإسلام ليُهزم.
أنزل الإسلام لينظم حياة البشر بعدل الله.

السؤال الذي يجب أن نطرحه اليوم لم يعد:
"هل السلطة قذرة؟"

بل سؤال أكثر صدقًا وإخافة بكثير:
"هل ما زلنا نستحق أن نؤتمن على أمانة الله؟"`
            },
            dalil: {
              id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ</div>
            <p style="text-align: center;"><strong>"Sesungguhnya Allah menyuruh kamu menyampaikan amanah kepada yang berhak menerimanya, dan apabila kamu menetapkan hukum di antara manusia, hendaklah kamu menetapkannya dengan adil."</strong><br>
            (QS. An-Nisa: 58)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ</div>
            <p style="text-align: center;"><strong>"Dan janganlah kamu cenderung kepada orang-orang yang zalim, yang menyebabkan kamu disentuh api neraka."</strong><br>
            (QS. Hud: 113)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَكَذَٰلِكَ نُوَلِّي بَعْضَ الظَّالِمِينَ بَعْضًا بِمَا كَانُوا يَكْسِبُونَ</div>
            <p style="text-align: center;"><strong>"Dan demikianlah Kami jadikan sebagian orang-orang zalim itu menjadi pemimpin bagi sebagian yang lain, disebabkan apa yang mereka kerjakan."</strong><br>
            (QS. Al-An’am: 129)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
            <p style="text-align: center;"><strong>"Wahai orang-orang yang beriman, jika kamu menolong agama Allah, niscaya Dia akan menolongmu dan meneguhkan kedudukanmu."</strong><br>
            (QS. Muhammad: 7)</p>
            <br>
            <p style="text-align: center;"><strong>"Setiap kalian adalah pemimpin, dan setiap kalian akan dimintai pertanggungjawaban atas kepemimpinannya."</strong><br>
            (HR. Bukhari dan Muslim)</p>
            <br>
            <p style="text-align: center;"><strong>"Sesungguhnya dunia ini manis dan hijau, dan Allah menjadikan kalian sebagai khalifah di dalamnya, lalu Dia akan melihat bagaimana kalian berbuat."</strong><br>
            (HR. Muslim)</p>`,
              en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ</div>
            <p style="text-align: center;"><strong>"Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice."</strong><br>
            (QS. An-Nisa: 58)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ</div>
            <p style="text-align: center;"><strong>"And do not incline toward those who do wrong, lest you be touched by the Fire."</strong><br>
            (QS. Hud: 113)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَكَذَٰلِكَ نُوَلِّي بَعْضَ الظَّالِمِينَ بَعْضًا بِمَا كَانُوا يَكْسِبُونَ</div>
            <p style="text-align: center;"><strong>"And thus will We make some of the wrongdoers allies of others for what they used to earn."</strong><br>
            (QS. Al-An’am: 129)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
            <p style="text-align: center;"><strong>"O you who have believed, if you support Allah, He will support you and plant firmly your feet."</strong><br>
            (QS. Muhammad: 7)</p>
            <br>
            <p style="text-align: center;"><strong>"Every one of you is a shepherd and is responsible for his flock."</strong><br>
            (HR. Bukhari and Muslim)</p>
            <br>
            <p style="text-align: center;"><strong>"The world is sweet and green, and verily Allah is going to install you as vicegerent in it in order to see how you act."</strong><br>
            (HR. Muslim)</p>`,
              ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُم بَيْنَ النَّاسِ أَن تَحْكُمُوا بِالْعَدْلِ</div>
            <p style="text-align: center;"><strong>"إن الله يأمركم أن تؤدوا الأمانات إلى أهلها وإذا حكمتم بين الناس أن تحكموا بالعدل"</strong><br>
            (سورة النساء: 58)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ</div>
            <p style="text-align: center;"><strong>"ولا تركنوا إلى الذين ظلموا فتمسكم النار"</strong><br>
            (سورة هود: 113)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">وَكَذَٰلِكَ نُوَلِّي بَعْضَ الظَّالِمِينَ بَعْضًا بِمَا كَانُوا يَكْسِبُونَ</div>
            <p style="text-align: center;"><strong>"وكذلك نولي بعض الظالمين بعضا بما كانوا يكسبون"</strong><br>
            (سورة الأنعام: 129)</p>
            <br>
            <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
            <p style="text-align: center;"><strong>"يا أيها الذين آمنوا إن تنصروا الله ينصركم ويثبت أقدامكم"</strong><br>
            (سورة محمد: 7)</p>
            <br>
            <p style="text-align: center;"><strong>"كلكم راع وكلكم مسئول عن رعيته"</strong><br>
            (رواه البخاري ومسلم)</p>
            <br>
            <p style="text-align: center;"><strong>"إن الدنيا حلوة خضرة وإن الله مستخلفكم فيها فينظر كيف تعملون"</strong><br>
            (رواه مسلم)</p>`
            }
          }
        ,
  {
    id: "5",
    title: {
      id: "Ilmu Pengetahuan, Ulama, dan Negara dalam Peradaban Islam",
      en: "Knowledge, Scholars, and the State in Islamic Civilization",
      ar: "العلم والعلماء والدولة في الحضارة الإسلامية"
    },
    content: {
      id: `Islam tidak pernah miskin ilmu. Yang miskin adalah keberanian umatnya untuk menegakkan ilmu sebagai fondasi peradaban. Sejak awal, wahyu pertama tidak turun dengan perintah berkuasa atau menguasai harta, melainkan perintah membaca, berpikir, dan memahami. Ilmu dalam Islam bukan aksesori spiritual, bukan pula pajangan akademik. Ilmu adalah senjata peradaban.

Namun hari ini, ilmu dipersempit menjadi sekadar ijazah. Ulama dipersempit menjadi penceramah. Cendekiawan dipersempit menjadi komentator. Dan negara merasa cukup berjalan tanpa dituntun wahyu. Inilah tragedi besar umat Islam: ilmu ada, tetapi tidak memimpin; ulama ada, tetapi tidak menggiring; negara berdiri, tetapi tanpa arah ilahiah.

Dalam sejarah Islam, ulama bukan pelengkap negara, melainkan penuntun negara. Imam Abu Hanifah dipenjara karena menolak tunduk pada kekuasaan zalim. Imam Malik dicambuk karena fatwanya mengganggu legitimasi penguasa. Imam Ahmad disiksa karena mempertahankan akidah dari intervensi politik. Mereka tidak netral, karena kebenaran tidak pernah netral.

Hari ini, banyak ulama memilih aman. Aman dari penjara, aman dari tekanan, aman dari konflik. Tetapi aman yang dibayar dengan diam terhadap kezaliman adalah pengkhianatan terhadap amanah ilmu. Ilmu yang tidak membela kebenaran akan menjadi saksi yang memberatkan di hadapan Allah.

Cendekiawan Muslim pun tidak luput. Banyak yang fasih berbicara tentang Islam sebagai objek kajian, tetapi gagap ketika Islam harus ditegakkan sebagai sistem kehidupan. Islam dijadikan bahan diskusi, bukan arah perjuangan. Mereka bangga menjadi 'objektif', padahal objektivitas yang menanggalkan iman hanyalah bentuk lain dari ketakutan.

Negara, di sisi lain, sering memandang agama cukup berada di masjid dan mimbar. Negara ingin stabilitas tanpa kebenaran, ketertiban tanpa keadilan, dan pembangunan tanpa arah akhirat. Padahal dalam Islam, negara adalah alat untuk menegakkan keadilan, bukan tujuan itu sendiri. Kekuasaan tanpa ilmu akan melahirkan tirani, dan ilmu tanpa kekuasaan akan terpinggirkan.

Peradaban Islam tidak lahir dari kompromi antara kebenaran dan kebatilan. Ia lahir dari keberanian ulama menegur penguasa, dari kesungguhan ilmuwan mengabdikan ilmunya untuk umat, dan dari negara yang tunduk kepada hukum Allah. Ketika ketiganya terpisah, runtuhlah peradaban, meski masjid tetap ramai dan gelar akademik terus bertambah.

Maka Ramadhan ini seharusnya mengguncang para ulama, cendekiawan, dan pejabat. Puasa bukan sekadar menahan lapar, tetapi menahan diri dari menjadi pengecut di hadapan kebenaran. Ilmu bukan untuk menyelamatkan posisi, tetapi untuk menyelamatkan umat. Negara bukan untuk dilayani, tetapi untuk melayani amanah Allah.

Jika ulama takut, ilmu mandul. Jika cendekiawan diam, umat kehilangan arah. Jika negara sombong, keadilan mati. Dan jika semua merasa aman-aman saja, maka pantaslah kita bertanya: di mana letak iman yang kita banggakan itu?`,
      en: `Islam has never been poor in knowledge. What is poor is the courage of its people to establish knowledge as the foundation of civilization. From the beginning, the first revelation did not descend with a command to rule or master wealth, but a command to read, think, and understand. Knowledge in Islam is not a spiritual accessory, nor an academic display. Knowledge is a weapon of civilization.

But today, knowledge is narrowed down to just a diploma. Scholars are narrowed down to preachers. Intellectuals are narrowed down to commentators. And the state feels sufficient to run without being guided by revelation. This is the great tragedy of the Muslim Ummah: knowledge exists, but it does not lead; scholars exist, but they do not guide; the state stands, but without divine direction.

In Islamic history, scholars were not complements to the state, but guides to the state. Imam Abu Hanifah was imprisoned for refusing to bow to unjust power. Imam Malik was flogged because his fatwa disturbed the legitimacy of the ruler. Imam Ahmad was tortured for defending the creed from political intervention. They were not neutral, because truth is never neutral.

Today, many scholars choose to be safe. Safe from prison, safe from pressure, safe from conflict. But safety paid for by silence in the face of injustice is a betrayal of the trust of knowledge. Knowledge that does not defend the truth will be an incriminating witness before Allah.

Muslim intellectuals are not exempt either. Many are fluent in talking about Islam as an object of study, but stutter when Islam must be upheld as a system of life. Islam is made into a discussion material, not a direction of struggle. They are proud to be 'objective', whereas objectivity that strips away faith is just another form of fear.

The state, on the other hand, often views religion as sufficient to be in mosques and pulpits. The state wants stability without truth, order without justice, and development without the direction of the hereafter. Whereas in Islam, the state is a tool to uphold justice, not an end in itself. Power without knowledge will beget tyranny, and knowledge without power will be marginalized.

Islamic civilization was not born from a compromise between truth and falsehood. It was born from the courage of scholars to rebuke rulers, from the seriousness of scientists dedicating their knowledge to the Ummah, and from a state that submits to Allah's law. When these three are separated, civilization collapses, even if mosques remain crowded and academic titles continue to increase.

So this Ramadan should shake the scholars, intellectuals, and officials. Fasting is not just refraining from hunger, but refraining from being a coward in the face of truth. Knowledge is not to save positions, but to save the Ummah. The state is not to be served, but to serve Allah's trust.

If scholars are afraid, knowledge is barren. If intellectuals are silent, the Ummah loses direction. If the state is arrogant, justice dies. And if everyone feels safe, then it is fitting for us to ask: where is the faith we are proud of?`,
      ar: `لم يكن الإسلام أبدًا فقيرًا في العلم. الفقير هو شجاعة أهله في إقامة العلم كأساس للحضارة. منذ البداية، لم ينزل الوحي الأول بأمر بالحكم أو السيطرة على الثروة، بل بأمر بالقراءة والتفكير والفهم. العلم في الإسلام ليس إكسسوارًا روحيًا، ولا عرضًا أكاديميًا. العلم هو سلاح الحضارة.

ولكن اليوم، تم تضييق العلم ليصبح مجرد شهادة. تم تضييق العلماء ليصبحوا خطباء. تم تضييق المثقفين ليصبحوا معلقين. وتشعر الدولة أنها تكفي للسير دون أن تهتدي بالوحي. هذه هي المأساة الكبرى للأمة الإسلامية: العلم موجود، لكنه لا يقود؛ العلماء موجودون، لكنهم لا يوجهون؛ الدولة قائمة، لكن بلا توجيه إلهي.

في التاريخ الإسلامي، لم يكن العلماء تكملة للدولة، بل موجهين للدولة. سُجن الإمام أبو حنيفة لرفضه الرضوخ للسلطة الظالمة. جُلد الإمام مالك لأن فتواه أزعجت شرعية الحاكم. عُذب الإمام أحمد لدفاعه عن العقيدة من التدخل السياسي. لم يكونوا محايدين، لأن الحق ليس محايدًا أبدًا.

اليوم، يختار العديد من العلماء الأمان. الأمان من السجن، الأمان من الضغط، الأمان من الصراع. لكن الأمان الذي يُدفع ثمنه بالصمت أمام الظلم هو خيانة لأمانة العلم. العلم الذي لا يدافع عن الحق سيكون شاهدًا مدينًا أمام الله.

المثقفون المسلمون ليسوا معفيين أيضًا. الكثير منهم فصحاء في الحديث عن الإسلام كموضوع للدراسة، لكنهم يتلعثمون عندما يجب إقامة الإسلام كنظام حياة. يُجعل الإسلام مادة للنقاش، وليس اتجاهًا للكفاح. إنهم فخورون بكونهم 'موضوعيين'، في حين أن الموضوعية التي تجرد الإيمان هي مجرد شكل آخر من أشكال الخوف.

الدولة، من ناحية أخرى، غالبًا ما ترى أن الدين يكفي أن يكون في المساجد والمنابر. تريد الدولة الاستقرار بلا حق، والنظام بلا عدل، والتنمية بلا اتجاه الآخرة. بينما في الإسلام، الدولة وسيلة لإقامة العدل، وليست غاية في حد ذاتها. السلطة بلا علم ستولد الطغيان، والعلم بلا سلطة سيكون مهمشًا.

لم تولد الحضارة الإسلامية من مساومة بين الحق والباطل. ولدت من شجاعة العلماء في توبيخ الحكام، ومن جدية العلماء في تكريس علمهم للأمة، ومن دولة تخضع لشرع الله. عندما تنفصل هذه الثلاثة، تنهار الحضارة، حتى لو ظلت المساجد مزدحمة واستمرت الألقاب الأكاديمية في الازدياد.

لذا يجب أن يهز هذا الرمضان العلماء والمثقفين والمسؤولين. الصيام ليس مجرد الامتناع عن الجوع، بل الامتناع عن الجبن في مواجهة الحق. العلم ليس لإنقاذ المناصب، بل لإنقاذ الأمة. الدولة ليست لتُخدم، بل لتخدم أمانة الله.

إذا خاف العلماء، فالعلم عقيم. وإذا صمت المثقفون، فقدت الأمة الاتجاه. وإذا تكبرت الدولة، مات العدل. وإذا شعر الجميع بالأمان، فمن الجدير بنا أن نسأل: أين الإيمان الذي نفتخر به؟`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan."</strong><br>
(QS. Al-Alaq: 1)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</div>
<p style="text-align: center;"><strong>"Allah akan mengangkat derajat orang-orang yang beriman di antara kamu dan orang-orang yang diberi ilmu beberapa derajat."</strong><br>
(QS. Al-Mujadilah: 11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنزَلْنَا مِنَ الْبَيِّنَاتِ وَالْهُدَىٰ</div>
<p style="text-align: center;"><strong>"Sesungguhnya orang-orang yang menyembunyikan apa yang telah Kami turunkan berupa keterangan-keterangan dan petunjuk..."</strong><br>
(QS. Al-Baqarah: 159)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا</div>
<p style="text-align: center;"><strong>"Sesungguhnya Allah menyuruh kamu menyampaikan amanat kepada yang berhak menerimanya..."</strong><br>
(QS. An-Nisa: 58)</p>
<br>
<p style="text-align: center;"><strong>"Sesungguhnya para ulama adalah pewaris para nabi."</strong><br>
(HR. Abu Dawud, Tirmidzi - hasan shahih)</p>
<br>
<p style="text-align: center;"><strong>"Barang siapa ditanya tentang ilmu lalu ia menyembunyikannya, maka pada hari kiamat ia akan dikekang dengan kekang dari api neraka."</strong><br>
(HR. Abu Dawud - shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"Read in the name of your Lord who created."</strong><br>
(QS. Al-Alaq: 1)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</div>
<p style="text-align: center;"><strong>"Allah will raise those who have believed among you and those who were given knowledge, by degrees."</strong><br>
(QS. Al-Mujadilah: 11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنزَلْنَا مِنَ الْبَيِّنَاتِ وَالْهُدَىٰ</div>
<p style="text-align: center;"><strong>"Indeed, those who conceal what We sent down of clear proofs and guidance..."</strong><br>
(QS. Al-Baqarah: 159)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا</div>
<p style="text-align: center;"><strong>"Indeed, Allah commands you to render trusts to whom they are due..."</strong><br>
(QS. An-Nisa: 58)</p>
<br>
<p style="text-align: center;"><strong>"Indeed, the scholars are the heirs of the prophets."</strong><br>
(HR. Abu Dawud, Tirmidzi)</p>
<br>
<p style="text-align: center;"><strong>"Whoever is asked about knowledge and conceals it, he will be bridled on the Day of Resurrection with a bridle of fire."</strong><br>
(HR. Abu Dawud)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ</div>
<p style="text-align: center;"><strong>"اقرأ باسم ربك الذي خلق."</strong><br>
(سورة العلق: 1)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ</div>
<p style="text-align: center;"><strong>"يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات."</strong><br>
(سورة المجادلة: 11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ الَّذِينَ يَكْتُمُونَ مَا أَنزَلْنَا مِنَ الْبَيِّنَاتِ وَالْهُدَىٰ</div>
<p style="text-align: center;"><strong>"إن الذين يكتمون ما أنزلنا من البينات والهدى..."</strong><br>
(سورة البقرة: 159)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا</div>
<p style="text-align: center;"><strong>"إن الله يأمركم أن تؤدوا الأمانات إلى أهلها..."</strong><br>
(سورة النساء: 58)</p>
<br>
<p style="text-align: center;"><strong>"العلماء ورثة الأنبياء."</strong><br>
(رواه أبو داود والترمذي)</p>
<br>
<p style="text-align: center;"><strong>"من سئل عن علم فكتمه ألجمه الله يوم القيامة بلجام من نار."</strong><br>
(رواه أبو داود)</p>`
    }
  },
  {
    id: "6",
    title: {
      id: "Umat yang Banyak tapi Tidak Berbobot",
      en: "A Numerous Ummah but Without Weight",
      ar: "أمة كثيرة العدد ولكن بلا وزن"
    },
    content: {
      id: `Umat Islam hari ini bukan umat yang sedikit. Jumlahnya besar, tersebar di berbagai negeri, memenuhi statistik global, dan sering dibanggakan dalam seminar serta laporan demografi. Namun pertanyaannya sederhana dan menyakitkan: di mana bobotnya?

Kuantitas tidak otomatis melahirkan kekuatan. Sejarah membuktikan bahwa peradaban tidak dibangun oleh jumlah, tetapi oleh kualitas iman, arah perjuangan, dan keberanian memikul amanah. Umat Islam kini banyak secara angka, tetapi ringan secara pengaruh. Suaranya riuh, namun tidak menentukan. Hadir di mana-mana, tetapi tidak mengubah apa-apa.

Fenomena ini bukan kebetulan. Ia lahir dari umat yang kehilangan orientasi hidup. Islam direduksi menjadi identitas administratif dan ritual personal. Akidah tidak lagi melahirkan sikap. Ibadah tidak lagi melahirkan keberpihakan. Puasa dijalani, tetapi kezaliman dibiarkan. Shalat ditegakkan, tetapi hukum Allah disingkirkan.

Umat seperti ini mudah digerakkan, tetapi tidak pernah memimpin. Mudah marah, tetapi cepat lupa. Mudah tersentuh emosi, tetapi miskin komitmen. Mereka hadir sebagai massa, bukan sebagai kekuatan peradaban.

Padahal dahulu, umat Islam sangat sedikit. Di Makkah mereka tertindas. Di Madinah mereka diblokade. Dalam banyak peperangan, jumlah mereka kalah. Namun mereka berbobot. Keputusan mereka diperhitungkan. Keberadaan mereka mengubah peta dunia.

Apa rahasianya?

Mereka tidak hidup untuk diri sendiri. Mereka hidup untuk misi. Islam bagi mereka bukan sekadar keyakinan, tetapi proyek peradaban. Mereka sadar bahwa menjadi Muslim berarti memikul tanggung jawab sejarah.

Hari ini, umat Islam justru bangga menjadi penonton. Bangga dengan jumlah masjid, tetapi tidak peduli siapa yang mengatur negeri. Bangga dengan banyaknya ulama, tetapi tidak bertanya mengapa kezaliman terus berjalan. Bangga dengan identitas Islam, tetapi alergi ketika Islam menuntut ditegakkan secara kaffah.

Inilah umat yang banyak, tetapi tidak berbobot.

Bobot umat tidak diukur dari seberapa sering mereka berkumpul, tetapi dari seberapa jauh mereka berani berbeda dengan kebatilan. Tidak diukur dari seberapa keras suara mereka, tetapi dari seberapa tegas sikap mereka. Tidak diukur dari seberapa banyak wacana, tetapi dari seberapa nyata pengorbanan.

Ramadhan seharusnya menjadi bulan pengembalian bobot umat. Puasa bukan untuk melemahkan, tetapi untuk melatih kendali diri, disiplin, dan kesiapan berjuang. Lapar bukan tujuan, tetapi sarana agar umat peka terhadap ketidakadilan dan siap memikul beban perubahan.

Jika setelah Ramadhan umat tetap ringan—mudah dibeli, mudah dipecah, mudah ditakuti—maka yang gagal bukan puasanya, tetapi pemahamannya.

Umat Islam tidak kekurangan jumlah. Yang kurang adalah keberanian untuk menjadi berat di hadapan kebatilan.`,
      en: `The Muslim Ummah today is not a small Ummah. Its numbers are large, spread across various lands, filling global statistics, and often boasted about in seminars and demographic reports. But the question is simple and painful: where is its weight?

Quantity does not automatically birth strength. History proves that civilization is not built by numbers, but by the quality of faith, the direction of struggle, and the courage to bear the trust. The Muslim Ummah is now many in numbers, but light in influence. Its voice is loud, but not decisive. Present everywhere, but changing nothing.

This phenomenon is not a coincidence. It is born from an Ummah that has lost its life orientation. Islam is reduced to administrative identity and personal ritual. Creed no longer births attitude. Worship no longer births partisanship. Fasting is undergone, but injustice is allowed. Prayer is established, but Allah's law is cast aside.

An Ummah like this is easily moved, but never leads. Easily angry, but quickly forgets. Easily touched by emotion, but poor in commitment. They are present as a mass, not as a force of civilization.

Whereas in the past, the Muslim Ummah was very few. In Mecca they were oppressed. In Medina they were blockaded. In many battles, their numbers were outnumbered. But they had weight. Their decisions were reckoned with. Their existence changed the world map.

What is the secret?

They did not live for themselves. They lived for a mission. Islam for them was not just a belief, but a civilization project. They realized that being a Muslim means bearing historical responsibility.

Today, the Muslim Ummah is proud to be spectators. Proud of the number of mosques, but indifferent to who rules the land. Proud of the many scholars, but not asking why injustice continues. Proud of Islamic identity, but allergic when Islam demands to be upheld completely (kaffah).

This is the Ummah that is many, but has no weight.

The weight of the Ummah is not measured by how often they gather, but by how far they dare to differ from falsehood. Not measured by how loud their voice is, but by how firm their stance is. Not measured by how much discourse, but by how real the sacrifice.

Ramadan should be a month of returning the weight of the Ummah. Fasting is not to weaken, but to train self-control, discipline, and readiness to struggle. Hunger is not the goal, but a means so the Ummah is sensitive to injustice and ready to bear the burden of change.

If after Ramadan the Ummah remains light—easily bought, easily divided, easily frightened—then what failed was not the fasting, but the understanding.

The Muslim Ummah does not lack numbers. What is lacking is the courage to be heavy in the face of falsehood.`,
      ar: `الأمة الإسلامية اليوم ليست أمة قليلة. عددها كبير، منتشرة في مختلف البلدان، تملأ الإحصاءات العالمية، وغالباً ما يتم التفاخر بها في الندوات والتقارير الديموغرافية. لكن السؤال بسيط ومؤلم: أين وزنها؟

الكمية لا تولد القوة تلقائياً. يثبت التاريخ أن الحضارة لا تبنى بالأرقام، بل بنوعية الإيمان، واتجاه الكفاح، والشجاعة في حمل الأمانة. الأمة الإسلامية الآن كثيرة العدد، لكنها خفيفة التأثير. صوتها صاخب، لكنه غير حاسم. موجودة في كل مكان، لكنها لا تغير شيئاً.

هذه الظاهرة ليست صدفة. ولدت من أمة فقدت اتجاه حياتها. تم اختزال الإسلام إلى هوية إدارية وطقوس شخصية. العقيدة لم تعد تولد موقفاً. العبادة لم تعد تولد انحيازاً. يُصام، لكن الظلم يُترك. تُقام الصلاة، لكن يُنحى شرع الله.

أمة كهذه سهلة التحريك، لكنها لا تقود أبداً. تغضب بسهولة، لكنها تنسى بسرعة. تتأثر عاطفياً بسهولة، لكنها فقيرة في الالتزام. هم حاضرون كجمهور، وليس كقوة حضارية.

بينما في الماضي، كانت الأمة الإسلامية قليلة جداً. في مكة كانوا مضطهدين. في المدينة كانوا محاصرين. في العديد من المعارك، كان عددهم أقل. لكن كان لهم وزن. كانت قراراتهم يُحسب لها حساب. كان وجودهم يغير خريطة العالم.

ما السر؟

لم يعيشوا لأنفسهم. عاشوا لمهمة. الإسلام بالنسبة لهم لم يكن مجرد عقيدة، بل مشروع حضارة. أدركوا أن كونهم مسلمين يعني حمل مسؤولية تاريخية.

اليوم، تفتخر الأمة الإسلامية بكونها متفرجة. تفتخر بعدد المساجد، لكنها لا تبالي بمن يحكم البلاد. تفتخر بكثرة العلماء، لكنها لا تسأل لماذا يستمر الظلم. تفتخر بالهوية الإسلامية، لكنها تتحسس عندما يطلب الإسلام أن يقام كافة.

هذه هي الأمة الكثيرة، لكن بلا وزن.

لا يقاس وزن الأمة بمدى تكرار تجمعهم، بل بمدى جرأتهم على الاختلاف مع الباطل. لا يقاس بمدى ارتفاع صوتهم، بل بمدى حزم موقفهم. لا يقاس بمدى كثرة الخطاب، بل بمدى واقعية التضحية.

يجب أن يكون رمضان شهر استعادة وزن الأمة. الصيام ليس للإضعاف، بل لتدريب ضبط النفس، والانضباط، والاستعداد للكفاح. الجوع ليس الهدف، بل وسيلة لتكون الأمة حساسة تجاه الظلم ومستعدة لحمل عبء التغيير.

إذا ظلت الأمة بعد رمضان خفيفة - سهلة الشراء، سهلة التقسيم، سهلة التخويف - فما فشل ليس الصيام، بل الفهم.

الأمة الإسلامية لا تنقصها الأعداد. ما ينقصها هو الشجاعة لتكون ثقيلة في مواجهة الباطل.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ</div>
<p style="text-align: center;"><strong>"Kamu adalah umat terbaik yang dilahirkan untuk manusia, menyuruh kepada yang ma'ruf, mencegah dari yang munkar, dan beriman kepada Allah."</strong><br>
(QS. Ali Imran: 110)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ</div>
<p style="text-align: center;"><strong>"Janganlah kamu merasa lemah dan jangan bersedih hati, padahal kamulah yang paling tinggi (derajatnya), jika kamu orang-orang yang beriman."</strong><br>
(QS. Ali Imran: 139)</p>
<br>
<p style="text-align: center;"><strong>"Hampir saja bangsa-bangsa lain memperebutkan kalian seperti orang-orang memperebutkan makanan di bejana. Para sahabat bertanya, 'Apakah karena jumlah kami sedikit saat itu?' Beliau menjawab, 'Tidak, bahkan kalian banyak, tetapi kalian seperti buih di lautan.'"</strong><br>
(HR. Abu Dawud dan Ahmad - hasan shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ</div>
<p style="text-align: center;"><strong>"You are the best nation produced [as an example] for mankind. You enjoin what is right and forbid what is wrong and believe in Allah."</strong><br>
(QS. Ali Imran: 110)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ</div>
<p style="text-align: center;"><strong>"So do not weaken and do not grieve, and you will be superior if you are [true] believers."</strong><br>
(QS. Ali Imran: 139)</p>
<br>
<p style="text-align: center;"><strong>"The nations are about to gather against you as diners gather around a bowl of food. They asked, 'Will we be few on that day?' He said, 'No, you will be many, but you will be like the foam of the sea.'"</strong><br>
(HR. Abu Dawud)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنكَرِ وَتُؤْمِنُونَ بِاللَّهِ</div>
<p style="text-align: center;"><strong>"كنتم خير أمة أخرجت للناس تأمرون بالمعروف وتنهون عن المنكر وتؤمنون بالله."</strong><br>
(سورة آل عمران: 110)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ</div>
<p style="text-align: center;"><strong>"ولا تهنوا ولا تحزنوا وأنتم الأعلون إن كنتم مؤمنين."</strong><br>
(سورة آل عمران: 139)</p>
<br>
<p style="text-align: center;"><strong>"يوشك الأمم أن تداعى عليكم كما تداعى الأكلة إلى قصعتها... بل أنتم يومئذ كثير، ولكنكم غثاء كغثاء السيل."</strong><br>
(رواه أبو داود وأحمد)</p>`
    }
  },
  {
    id: "7",
    title: {
      id: "Ketaatan Tanpa Kepemimpinan Melahirkan Kehinaan",
      en: "Obedience Without Leadership Breeds Humiliation",
      ar: "الطاعة بلا قيادة تولد الذل"
    },
    content: {
      id: `Umat Islam hari ini rajin beribadah. Masjid penuh, majelis ilmu ramai, lantunan ayat terdengar di mana-mana. Namun di saat yang sama, umat ini diinjak, dipinggirkan, dan diperlakukan tanpa kehormatan. Dunia tidak segan mencemooh, menekan, bahkan mengatur hidup umat Islam. Lalu muncul pertanyaan yang pahit: mengapa umat yang taat justru hidup dalam kehinaan?

Jawabannya sederhana, tetapi menyakitkan: ketaatan tanpa kepemimpinan tidak pernah melahirkan kemuliaan.

Islam tidak pernah diturunkan hanya untuk membentuk individu saleh yang terpisah dari urusan umat. Islam datang sebagai sistem hidup, sebagai tuntunan kolektif, dan sebagai peradaban yang membutuhkan kepemimpinan. Ketika ketaatan dipisahkan dari kepemimpinan, maka Islam dikurung di masjid dan dipotong dari kekuasaannya.

Hari ini, umat diajarkan taat beribadah, tetapi tidak diajarkan untuk taat memperjuangkan kepemimpinan Islam. Mereka disuruh sabar, tetapi tidak disiapkan untuk memimpin. Mereka dipuji karena kesalehan pribadi, tetapi dibungkam ketika menuntut tegaknya keadilan Islam.

Inilah ketaatan yang jinak. Ketaatan yang aman bagi penguasa zalim. Ketaatan yang tidak mengganggu sistem rusak. Ia hanya menghasilkan umat yang patuh secara ritual, tetapi tunduk secara politik dan sosial.

Sejarah Islam justru berkata sebaliknya. Para sahabat bukan hanya orang-orang yang taat, tetapi orang-orang yang memimpin. Mereka shalat di malam hari dan mengatur urusan umat di siang hari. Mereka menangis dalam munajat, tetapi tegas dalam keputusan. Ketaatan mereka melahirkan kepemimpinan, dan kepemimpinan mereka melahirkan kemuliaan.

Ketika kepemimpinan Islam hilang, umat tidak hanya kehilangan arah, tetapi juga kehilangan wibawa. Umat menjadi objek kebijakan, bukan subjek peradaban. Hukum Allah dianggap asing, sementara hukum buatan manusia dipaksakan sebagai satu-satunya jalan.

Lebih pahit lagi, kehinaan ini sering dibungkus dengan dalih toleransi, stabilitas, dan kedamaian. Umat diminta diam demi ketertiban, padahal yang dijaga adalah kezaliman. Umat diminta patuh, tetapi kepatuhan itu diarahkan untuk melanggengkan sistem yang menyingkirkan Islam dari kepemimpinan.

Ramadhan seharusnya membuka mata umat bahwa ketaatan sejati bukan hanya menahan lapar, tetapi menolak tunduk kepada selain Allah. Puasa melatih pengendalian diri, tetapi juga melatih keberanian untuk berkata tidak pada ketidakadilan.

Selama umat Islam puas dengan ketaatan tanpa kepemimpinan, selama itu pula kehinaan akan diwariskan dari generasi ke generasi. Kemuliaan tidak akan lahir dari ibadah yang dipisahkan dari tanggung jawab memimpin kehidupan.

Ketaatan yang sejati adalah ketaatan yang berani menuntut Islam memimpin, bukan sekadar dipraktikkan secara pribadi.`,
      en: `Muslims today are diligent in worship. Mosques are full, study circles are crowded, the chanting of verses is heard everywhere. But at the same time, this Ummah is trampled, marginalized, and treated without honor. The world does not hesitate to mock, pressure, and even regulate the lives of Muslims. Then a bitter question arises: why does the obedient Ummah live in humiliation?

The answer is simple, but painful: obedience without leadership never breeds glory.

Islam was never sent down only to form pious individuals separated from the affairs of the Ummah. Islam came as a system of life, as a collective guide, and as a civilization that requires leadership. When obedience is separated from leadership, Islam is confined to the mosque and cut off from its power.

Today, the Ummah is taught to be obedient in worship, but not taught to be obedient in fighting for Islamic leadership. They are told to be patient, but not prepared to lead. They are praised for personal piety, but silenced when demanding the establishment of Islamic justice.

This is tame obedience. Obedience that is safe for unjust rulers. Obedience that does not disturb the broken system. It only produces an Ummah that is ritually obedient, but politically and socially submissive.

Islamic history says otherwise. The companions were not just obedient people, but leading people. They prayed at night and managed the affairs of the Ummah during the day. They cried in supplication, but were firm in decision. Their obedience gave birth to leadership, and their leadership gave birth to glory.

When Islamic leadership is lost, the Ummah not only loses direction, but also loses authority. The Ummah becomes an object of policy, not a subject of civilization. Allah's law is considered foreign, while man-made law is forced as the only way.

Even more bitter, this humiliation is often wrapped in the pretext of tolerance, stability, and peace. The Ummah is asked to be silent for the sake of order, even though what is guarded is injustice. The Ummah is asked to obey, but that obedience is directed to perpetuate a system that removes Islam from leadership.

Ramadan should open the eyes of the Ummah that true obedience is not just holding back hunger, but refusing to submit to other than Allah. Fasting trains self-control, but also trains the courage to say no to injustice.

As long as Muslims are satisfied with obedience without leadership, humiliation will be inherited from generation to generation. Glory will not be born from worship separated from the responsibility of leading life.

True obedience is obedience that dares to demand Islam to lead, not just practiced privately.`,
      ar: `المسلمون اليوم مجتهدون في العبادة. المساجد ممتلئة، ومجالس العلم مزدحمة، وتلاوة الآيات تُسمع في كل مكان. لكن في الوقت نفسه، هذه الأمة تُداس، وتُهمش، وتُعامل بلا كرامة. العالم لا يتردد في الاستهزاء، والضغط، وحتى تنظيم حياة المسلمين. ثم يطرح سؤال مرير: لماذا تعيش الأمة المطيعة في ذل؟

الجواب بسيط، لكنه مؤلم: الطاعة بلا قيادة لا تلد العزة أبداً.

لم ينزل الإسلام أبداً لتكوين أفراد صالحين منفصلين عن شؤون الأمة فقط. جاء الإسلام كنظام حياة، وكدليل جماعي، وكحضارة تتطلب قيادة. عندما تُفصل الطاعة عن القيادة، يُحبس الإسلام في المسجد ويُقطع عن قوته.

اليوم، تُعلم الأمة أن تكون مطيعة في العبادة، لكن لا تُعلم أن تكون مطيعة في الكفاح من أجل القيادة الإسلامية. يُطلب منهم الصبر، لكن لا يتم إعدادهم للقيادة. يُمدحون على التقوى الشخصية، لكن يُسكتون عندما يطالبون بإقامة العدالة الإسلامية.

هذه طاعة مروضة. طاعة آمنة للحكام الظالمين. طاعة لا تزعج النظام الفاسد. إنها تنتج فقط أمة مطيعة طقوسياً، لكنها خاضعة سياسياً واجتماعياً.

التاريخ الإسلامي يقول عكس ذلك. لم يكن الصحابة مجرد أشخاص مطيعين، بل كانوا قادة. كانوا يصلون في الليل ويديرون شؤون الأمة في النهار. كانوا يبكون في المناجاة، لكنهم كانوا حازمين في القرار. ولدت طاعتهم قيادة، وولدت قيادتهم عزة.

عندما تضيع القيادة الإسلامية، لا تفقد الأمة الاتجاه فحسب، بل تفقد الهيبة أيضاً. تصبح الأمة موضوعاً للسياسة، لا فاعلاً في الحضارة. يُعتبر شرع الله غريباً، بينما يُفرض قانون البشر كطريق وحيد.

والأمر الأكثر مرارة، أن هذا الذل غالباً ما يُغلف بذريعة التسامح، والاستقرار، والسلام. تُطلب من الأمة الصمت من أجل النظام، رغم أن ما يُحرس هو الظلم. تُطلب من الأمة الطاعة، لكن تلك الطاعة موجهة لتكريس نظام يبعد الإسلام عن القيادة.

يجب أن يفتح رمضان عيون الأمة على أن الطاعة الحقيقية ليست مجرد الامتناع عن الجوع، بل رفض الخضوع لغير الله. الصيام يدرب ضبط النفس، لكنه يدرب أيضاً الشجاعة لقول لا للظلم.

طالما أن المسلمين راضون بالطاعة بلا قيادة، فسيتم توارث الذل من جيل إلى جيل. لن تولد العزة من عبادة مفصولة عن مسؤولية قيادة الحياة.

الطاعة الحقيقية هي الطاعة التي تجرؤ على المطالبة بأن يقود الإسلام، وليس مجرد ممارسته بشكل شخصي.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ</div>
<p style="text-align: center;"><strong>"Padahal kekuatan itu hanyalah bagi Allah, bagi Rasul-Nya, dan bagi orang-orang yang beriman, tetapi orang-orang munafik tidak mengetahui."</strong><br>
(QS. Al-Munafiqun: 8)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ الْمُنكَرِ</div>
<p style="text-align: center;"><strong>"(Yaitu) orang-orang yang jika Kami berikan kekuasaan di bumi, mereka mendirikan shalat, menunaikan zakat, menyuruh kepada yang ma'ruf dan mencegah dari yang munkar."</strong><br>
(QS. Al-Hajj: 41)</p>
<br>
<p style="text-align: center;"><strong>"Sesungguhnya imam (pemimpin) itu adalah perisai; orang-orang berperang di belakangnya dan berlindung dengannya."</strong><br>
(HR. Bukhari dan Muslim)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ</div>
<p style="text-align: center;"><strong>"And to Allah belongs [all] honor, and to His Messenger, and to the believers, but the hypocrites do not know."</strong><br>
(QS. Al-Munafiqun: 8)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ الْمُنكَرِ</div>
<p style="text-align: center;"><strong>"[And they are] those who, if We give them authority in the land, establish prayer and give zakah and enjoin what is right and forbid what is wrong."</strong><br>
(QS. Al-Hajj: 41)</p>
<br>
<p style="text-align: center;"><strong>"Verily, the Imam (leader) is a shield; war is fought behind him and protection is sought through him."</strong><br>
(HR. Bukhari and Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلِلَّهِ الْعِزَّةُ وَلِرَسُولِهِ وَلِلْمُؤْمِنِينَ وَلَٰكِنَّ الْمُنَافِقِينَ لَا يَعْلَمُونَ</div>
<p style="text-align: center;"><strong>"ولله العزة ولرسوله وللمؤمنين ولكن المنافقين لا يعلمون."</strong><br>
(سورة المنافقون: 8)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ إِن مَّكَّنَّاهُمْ فِي الْأَرْضِ أَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ وَأَمَرُوا بِالْمَعْرُوفِ وَنَهَوْا عَنِ الْمُنكَرِ</div>
<p style="text-align: center;"><strong>"الذين إن مكناهم في الأرض أقاموا الصلاة وآتوا الزكاة وأمروا بالمعروف ونهوا عن المنكر."</strong><br>
(سورة الحج: 41)</p>
<br>
<p style="text-align: center;"><strong>"إنما الإمام جنة يقاتل من ورائه ويتقى به."</strong><br>
(رواه البخاري ومسلم)</p>`
    }
  },
  {
    id: "8",
    title: {
      id: "Mengapa Islam Ditakuti Ketika Memimpin, Tapi Dibiarkan Ketika Dijadikan Ritual",
      en: "Why Islam is Feared When Leading, But Tolerated When Reduced to Ritual",
      ar: "لماذا يُخشى الإسلام عندما يقود، ولكن يُترك عندما يصبح مجرد طقوس"
    },
    content: {
      id: `Islam hari ini tidak dilarang untuk shalat. Tidak dicegah untuk berpuasa. Tidak dipermasalahkan ketika hanya dibaca di acara seremonial. Bahkan sering dipuji sebagai agama yang indah, damai, dan spiritual. Namun semuanya berubah ketika Islam menuntut memimpin kehidupan.

Saat Islam meminta hukum Allah ditegakkan, ia dituduh berbahaya. Saat Islam menuntut keadilan sosial yang nyata, ia disebut ekstrem. Saat Islam mengatur ekonomi, politik, dan kekuasaan, ia dicap ancaman stabilitas. Aneh, Islam dipeluk sebagai simbol, tetapi ditakuti sebagai sistem.

Inilah ironi umat Islam hari ini. Mereka berani melanggar hukum Allah, tetapi gemetar melanggar hukum manusia. Mereka ringan meninggalkan perintah Rabb-nya, tetapi patuh total kepada aturan yang jelas-jelas bertentangan dengan wahyu. Rasa takut mereka terbalik. Rasa hormat mereka salah alamat.

Islam tidak pernah diturunkan untuk menjadi hiasan ritual. Ia datang untuk memimpin manusia, mengatur kehidupan, dan menegakkan keadilan. Ketika Islam dipaksa tinggal di masjid, sementara kehidupan diatur oleh hukum lain, maka Islam dilumpuhkan tanpa perlu dimusnahkan.

Umat Islam pun ikut bersalah. Mereka membela Islam ketika dihina secara simbolik, tetapi diam ketika Islam disingkirkan secara sistemik. Mereka marah jika agamanya dicemooh, tetapi tenang ketika hukum Allah dihapus dari kehidupan publik. Ini bukan keberanian, ini kemunafikan kolektif.

Lebih memalukan lagi, umat Islam sering menjadi pembela utama sistem yang menyingkirkan Islam. Dengan dalih moderasi, toleransi, dan keamanan, mereka justru menjadi benteng bagi tegaknya hukum selain hukum Allah. Islam diminta menyesuaikan diri, bukan memimpin. Wahyu diminta tunduk, bukan ditaati.

Padahal, sepanjang sejarah, Islam selalu ditakuti ketika memimpin karena ia adil dan tidak bisa dibeli. Ia memotong tangan penguasa zalim, bukan rakyat kecil. Ia mengangkat yang lemah dan menundukkan yang sombong. Ketakutan terhadap Islam bukan karena kebrutalannya, tetapi karena keadilannya.

Ramadhan seharusnya menjadi bulan kejujuran. Jika kita benar-benar takut kepada Allah, maka rasa takut itu harus tampak dalam sikap, pilihan, dan keberpihakan. Puasa bukan sekadar menahan lapar, tetapi menahan diri dari tunduk kepada aturan yang menyingkirkan hukum Allah.

Selama umat Islam lebih takut kehilangan kenyamanan daripada kehilangan ridha Allah, selama itu pula Islam akan dibiarkan sebagai ritual dan ditolak sebagai kepemimpinan.

Islam tidak butuh pembela yang hanya pandai menangis. Islam butuh umat yang berani taat sepenuhnya.`,
      en: `Islam today is not forbidden from prayer. Not prevented from fasting. Not a problem when only read in ceremonial events. It is even often praised as a beautiful, peaceful, and spiritual religion. But everything changes when Islam demands to lead life.

When Islam asks for Allah's law to be upheld, it is accused of being dangerous. When Islam demands real social justice, it is called extreme. When Islam regulates the economy, politics, and power, it is labeled a threat to stability. Strange, Islam is embraced as a symbol, but feared as a system.

This is the irony of the Muslim Ummah today. They dare to violate Allah's law, but tremble at violating human law. They lightly leave the commands of their Lord, but are totally obedient to rules that clearly contradict revelation. Their fear is reversed. Their respect is misplaced.

Islam was never sent down to be a ritual decoration. It came to lead humans, regulate life, and uphold justice. When Islam is forced to stay in the mosque, while life is regulated by other laws, then Islam is paralyzed without needing to be destroyed.

The Muslim Ummah is also at fault. They defend Islam when insulted symbolically, but are silent when Islam is removed systemically. They are angry if their religion is mocked, but calm when Allah's law is removed from public life. This is not courage, this is collective hypocrisy.

Even more shameful, Muslims often become the main defenders of the system that removes Islam. Under the pretext of moderation, tolerance, and security, they instead become a fortress for the establishment of laws other than Allah's law. Islam is asked to adapt, not lead. Revelation is asked to submit, not be obeyed.

Whereas throughout history, Islam has always been feared when leading because it is just and cannot be bought. It cuts the hands of unjust rulers, not the little people. It lifts the weak and subdues the arrogant. Fear of Islam is not because of its brutality, but because of its justice.

Ramadan should be a month of honesty. If we truly fear Allah, then that fear must be visible in attitudes, choices, and partiality. Fasting is not just holding back hunger, but holding back oneself from submitting to rules that remove Allah's law.

As long as Muslims are more afraid of losing comfort than losing Allah's pleasure, so long will Islam be left as a ritual and rejected as leadership.

Islam does not need defenders who are only good at crying. Islam needs an Ummah that dares to obey completely.`,
      ar: `الإسلام اليوم ليس ممنوعًا من الصلاة. ولا يُمنع من الصيام. ولا يُشكل مشكلة عندما يُقرأ فقط في المناسبات الاحتفالية. بل غالبًا ما يُمدح كدين جميل، وسلمي، وروحي. لكن كل شيء يتغير عندما يطالب الإسلام بقيادة الحياة.

عندما يطلب الإسلام إقامة شرع الله، يُتهم بأنه خطير. عندما يطالب الإسلام بالعدالة الاجتماعية الحقيقية، يُوصف بأنه متطرف. عندما ينظم الإسلام الاقتصاد، والسياسة، والسلطة، يُوصم بأنه تهديد للاستقرار. غريب، يُعتنق الإسلام كرمز، ولكن يُخشى كنظام.

هذه هي مفارقة الأمة الإسلامية اليوم. يجرؤون على مخالفة شرع الله، لكنهم يرتجفون من مخالفة قوانين البشر. يتركون أوامر ربهم بخفة، لكنهم يطيعون تمامًا القواعد التي تتعارض بوضوح مع الوحي. خوفهم معكوس. احترامهم في غير محله.

لم ينزل الإسلام أبدًا ليكون زينة طقسية. جاء ليقود البشر، وينظم الحياة، ويقيم العدل. عندما يُجبر الإسلام على البقاء في المسجد، بينما تُنظم الحياة بقوانين أخرى، فإن الإسلام يُشل دون الحاجة إلى تدميره.

الأمة الإسلامية مذنبة أيضًا. يدافعون عن الإسلام عندما يُهان رمزيًا، لكنهم يصمتون عندما يُقصى الإسلام منهجيًا. يغضبون إذا سُخر من دينهم، لكنهم يهدأون عندما يُحذف شرع الله من الحياة العامة. هذه ليست شجاعة، هذا نفاق جماعي.

والأكثر خزياً، أن المسلمين غالبًا ما يصبحون المدافعين الرئيسيين عن النظام الذي يقصي الإسلام. بذريعة الاعتدال، والتسامح، والأمن، يصبحون بدلاً من ذلك حصنًا لإقامة قوانين غير شرع الله. يُطلب من الإسلام أن يتكيف، لا أن يقود. يُطلب من الوحي أن يخضع، لا أن يُطاع.

بينما عبر التاريخ، كان الإسلام يُخشى دائمًا عندما يقود لأنه عادل ولا يمكن شراؤه. يقطع أيدي الحكام الظالمين، وليس صغار الناس. يرفع الضعيف ويخضع المتكبر. الخوف من الإسلام ليس بسبب وحشيته، بل بسبب عدالته.

يجب أن يكون رمضان شهر الصدق. إذا كنا نخاف الله حقًا، فيجب أن يظهر ذلك الخوف في المواقف، والخيارات، والانحياز. الصيام ليس مجرد الامتناع عن الجوع، بل الامتناع عن الخضوع للقواعد التي تقصي شرع الله.

طالما أن المسلمين يخافون فقدان الراحة أكثر من فقدان رضا الله، فسيظل الإسلام يُترك كطقس ويُرفض كقيادة.

الإسلام لا يحتاج إلى مدافعين يجيدون البكاء فقط. الإسلام يحتاج إلى أمة تجرؤ على الطاعة الكاملة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ ۚ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ</div>
<p style="text-align: center;"><strong>"Apakah hukum jahiliyah yang mereka kehendaki? Dan hukum siapakah yang lebih baik daripada hukum Allah bagi orang-orang yang yakin?"</strong><br>
(QS. Al-Ma'idah: 50)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنْفُسِهِمْ حَرَجًا مِمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا</div>
<p style="text-align: center;"><strong>"Maka demi Tuhanmu, mereka tidak beriman hingga mereka menjadikan engkau (Muhammad) sebagai hakim dalam perkara yang mereka perselisihkan, kemudian mereka tidak merasa keberatan dalam hati terhadap putusanmu dan mereka menerima dengan sepenuhnya."</strong><br>
(QS. An-Nisa: 65)</p>
<br>
<p style="text-align: center;"><strong>"Tidak ada ketaatan kepada makhluk dalam bermaksiat kepada Sang Pencipta."</strong><br>
(HR. Ahmad dan Al-Hakim - shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ ۚ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ</div>
<p style="text-align: center;"><strong>"Then is it the judgment of [the time of] ignorance they desire? But who is better than Allah in judgment for a people who are certain [in faith]?"</strong><br>
(QS. Al-Ma'idah: 50)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنْفُسِهِمْ حَرَجًا مِمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا</div>
<p style="text-align: center;"><strong>"But no, by your Lord, they will not [truly] believe until they make you, [O Muhammad], judge concerning that over which they dispute among themselves and then find within themselves no discomfort from what you have judged and submit in [full, willing] submission."</strong><br>
(QS. An-Nisa: 65)</p>
<br>
<p style="text-align: center;"><strong>"There is no obedience to a creature in disobedience to the Creator."</strong><br>
(HR. Ahmad and Al-Hakim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ ۚ وَمَنْ أَحْسَنُ مِنَ اللَّهِ حُكْمًا لِقَوْمٍ يُوقِنُونَ</div>
<p style="text-align: center;"><strong>"أفحكم الجاهلية يبغون ومن أحسن من الله حكما لقوم يوقنون."</strong><br>
(سورة المائدة: 50)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لَا يَجِدُوا فِي أَنْفُسِهِمْ حَرَجًا مِمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا</div>
<p style="text-align: center;"><strong>"فلا وربك لا يؤمنون حتى يحكموك فيما شجر بينهم ثم لا يجدوا في أنفسهم حرجاً مما قضيت ويسلموا تسليماً."</strong><br>
(سورة النساء: 65)</p>
<br>
<p style="text-align: center;"><strong>"لا طاعة لمخلوق في معصية الخالق."</strong><br>
(رواه أحمد والحاكم - صحيح)</p>`
    }
  },
  {
    id: "9",
    title: {
      id: "Jihad yang Ditinggalkan, Lalu Diganti dengan Ceramah",
      en: "Jihad Abandoned, Then Replaced with Lectures",
      ar: "الجهاد المتروك، ثم استبدل بالمحاضرات"
    },
    content: {
      id: `Umat Islam hari ini gemar berbicara. Mimbar penuh, kanal digital ramai, pengikut berderet. Ceramah berpindah dari masjid ke layar, dari majelis ke panggung popularitas. Namun di balik semua keramaian itu, ada satu kewajiban yang sunyi: jihad yang ditinggalkan.

Bukan karena tidak tahu. Bukan karena tidak mampu berbicara. Tetapi karena lebih nyaman berhenti pada kata-kata. Jihad direduksi menjadi istilah sensitif, lalu disimpan rapi agar tidak mengganggu kenyamanan. Sebagai gantinya, umat berbangga dengan ceramah—seolah banyaknya pendengar adalah ukuran ketaatan.

Padahal dakwah bukan sekadar menyampaikan. Dakwah adalah menggerakkan. Dan jihad bukan sekadar konflik fisik, melainkan kesungguhan total menegakkan kebenaran, dengan pengorbanan, disiplin, dan keberanian menanggung risiko. Ketika jihad ditinggalkan, ceramah berubah menjadi pelarian.

Tidak ada contoh dari Nabi ﷺ dan para sahabat yang menjadikan ceramah sebagai tujuan akhir. Mereka berdakwah, lalu berjuang. Mereka berbicara, lalu bertindak. Mereka mengajarkan iman, lalu mempertaruhkan hidup, harta, dan kenyamanan demi tegaknya Islam.

Hari ini urutannya dibalik. Banyak yang mengajar, sedikit yang siap berkorban. Banyak yang mengingatkan, sedikit yang berani memikul konsekuensi. Bahkan keberanian sering diukur dari seberapa aman materi disampaikan, bukan seberapa benar ia ditegakkan.

Lebih ironis lagi, ceramah sering dipakai untuk menunda kewajiban. Dengan dalih hikmah, umat diminta menunggu. Dengan alasan situasi, kebenaran diminta beradaptasi. Dengan kata sabar, kezaliman diminta dimaklumi. Inilah saat ketika kata-kata menjadi pengganti tindakan.

Nabi ﷺ tidak membangun umat dengan retorika kosong. Beliau membangun generasi yang siap diuji. Ramadhan pertama umat Islam justru dihadapkan pada ujian berat, bukan euforia spiritual. Iman mereka diuji dengan pengorbanan nyata, bukan dengan tepuk tangan.

Jihad adalah kewajiban setiap Muslim sesuai kapasitasnya. Ia tidak bisa dipensiunkan oleh popularitas, dan tidak bisa digantikan oleh keramaian pengikut. Dakwah tanpa jihad melahirkan umat yang fasih, tetapi lemah. Jihad tanpa dakwah melahirkan kekerasan. Islam memerintahkan keduanya berjalan bersama.

Ramadhan bukan panggung untuk merasa cukup dengan kata-kata. Ia adalah sekolah untuk menyiapkan keberanian. Jika setelah Ramadhan kita hanya lebih pandai berbicara, tetapi tetap enggan berjuang, maka yang bertambah bukan iman, melainkan ilusi.

Berhentilah bangga pada ceramah yang aman. Ukur iman dengan kesiapan berkorban. Karena Islam tidak ditegakkan oleh suara yang nyaring, tetapi oleh komitmen yang mahal.`,
      en: `Muslims today love to speak. Pulpits are full, digital channels are busy, followers are lined up. Lectures move from mosques to screens, from assemblies to stages of popularity. But behind all that noise, there is one silent obligation: abandoned jihad.

Not because of ignorance. Not because of inability to speak. But because it is more comfortable to stop at words. Jihad is reduced to a sensitive term, then stored neatly so as not to disturb comfort. In exchange, the Ummah takes pride in lectures—as if the number of listeners is the measure of obedience.

Whereas da'wah is not just conveying. Da'wah is moving. And jihad is not just physical conflict, but total seriousness in upholding the truth, with sacrifice, discipline, and courage to bear risks. When jihad is abandoned, lectures turn into an escape.

There is no example from the Prophet ﷺ and the companions who made lectures the final goal. They preached, then struggled. They spoke, then acted. They taught faith, then risked life, wealth, and comfort for the establishment of Islam.

Today the order is reversed. Many teach, few are ready to sacrifice. Many remind, few dare to bear the consequences. Even courage is often measured by how safely the material is delivered, not how truly it is upheld.

Even more ironic, lectures are often used to delay obligations. Under the pretext of wisdom, the Ummah is asked to wait. Under the excuse of the situation, the truth is asked to adapt. With the word patience, injustice is asked to be tolerated. This is the time when words become a substitute for action.

The Prophet ﷺ did not build the Ummah with empty rhetoric. He built a generation ready to be tested. The first Ramadan of the Muslims was faced with a heavy test, not spiritual euphoria. Their faith was tested with real sacrifice, not with applause.

Jihad is the duty of every Muslim according to their capacity. It cannot be retired by popularity, and cannot be replaced by the crowd of followers. Da'wah without jihad gives birth to an eloquent but weak Ummah. Jihad without da'wah gives birth to violence. Islam commands both to walk together.

Ramadan is not a stage to feel sufficient with words. It is a school to prepare courage. If after Ramadan we are only better at speaking, but remain reluctant to struggle, then what increases is not faith, but illusion.

Stop being proud of safe lectures. Measure faith by readiness to sacrifice. Because Islam is not upheld by loud voices, but by expensive commitment.`,
      ar: `المسلمون اليوم يحبون الكلام. المنابر ممتلئة، والقنوات الرقمية مزدحمة، والمتابعون مصطفون. انتقلت المحاضرات من المساجد إلى الشاشات، ومن المجالس إلى مسارح الشهرة. لكن خلف كل هذا الصخب، هناك فريضة صامتة: الجهاد المتروك.

ليس بسبب الجهل. ليس بسبب العجز عن الكلام. بل لأنه من الأريح التوقف عند الكلمات. تم اختزال الجهاد ليصبح مصطلحاً حساساً، ثم حفظ بعناية حتى لا يزعج الراحة. وكبديل، تفتخر الأمة بالمحاضرات - وكأن كثرة المستمعين هي مقياس الطاعة.

بينما الدعوة ليست مجرد تبليغ. الدعوة هي تحريك. والجهاد ليس مجرد صراع جسدي، بل هو الجدية التامة في إقامة الحق، بالتضحية، والانضباط، والشجاعة في تحمل المخاطر. عندما يُترك الجهاد، تتحول المحاضرات إلى هروب.

لا يوجد مثال من النبي ﷺ والصحابة جعلوا المحاضرات هي الغاية النهائية. كانوا يدعون، ثم يجاهدون. كانوا يتكلمون، ثم يعملون. كانوا يعلمون الإيمان، ثم يخاطرون بالحياة والمال والراحة من أجل إقامة الإسلام.

اليوم انقلب الترتيب. كثر المعلمون، وقل المستعدون للتضحية. كثر المذكرون، وقل من يجرؤ على تحمل العواقب. حتى الشجاعة غالباً ما تقاس بمدى أمان تقديم المادة، وليس بمدى صحة إقامتها.

والأكثر سخرية، أن المحاضرات غالباً ما تستخدم لتأخير الواجبات. بذريعة الحكمة، يُطلب من الأمة الانتظار. وبحجة الوضع، يُطلب من الحق أن يتكيف. وبكلمة الصبر، يُطلب من الظلم أن يُحتمل. هذا هو الوقت الذي تصبح فيه الكلمات بديلاً عن العمل.

لم يبن النبي ﷺ الأمة بخطب جوفاء. بنى جيلاً مستعداً للاختبار. واجه المسلمون في رمضانهم الأول اختباراً ثقيلاً، وليس نشوة روحية. اختُبر إيمانهم بتضحية حقيقية، وليس بالتصفيق.

الجهاد واجب على كل مسلم حسب قدرته. لا يمكن أن يتقاعد بسبب الشهرة، ولا يمكن استبداله بجمهور المتابعين. الدعوة بلا جهاد تلد أمة فصيحة ولكن ضعيفة. والجهاد بلا دعوة يلد عنفاً. يأمر الإسلام بأن يسير الاثنان معاً.

رمضان ليس مسرحاً للاكتفاء بالكلمات. إنه مدرسة لإعداد الشجاعة. إذا أصبحنا بعد رمضان أجود حديثاً فقط، لكننا بقينا مترددين في الكفاح، فإن ما زاد ليس الإيمان، بل الوهم.

توقفوا عن الفخر بالمحاضرات الآمنة. قيسوا الإيمان بالاستعداد للتضحية. لأن الإسلام لا يقام بالأصوات العالية، بل بالالتزام الغالي.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَyyuhalladzīna āmanū hal adullukum 'alā tijāratin tunjīkum min 'adzābin alīm. Tu'minūna billāhi wa rasūlihi wa tujāhidūna fī sabīlillāhi bi amwālikum wa anfusikum.</div>
<p style="text-align: center;"><strong>"Wahai orang-orang yang beriman! Maukah Aku tunjukkan suatu perdagangan yang dapat menyelamatkan kamu dari azab yang pedih? (Yaitu) kamu beriman kepada Allah dan Rasul-Nya dan berjihad di jalan Allah dengan harta dan jiwamu. Itulah yang lebih baik bagimu jika kamu mengetahui."</strong><br>
(QS. Ash-Shaff: 10–11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا</div>
<p style="text-align: center;"><strong>"Sungguh, telah ada pada diri Rasulullah itu suri teladan yang baik bagimu, (yaitu) bagi orang yang mengharap (rahmat) Allah dan (kedatangan) hari kiamat serta banyak mengingat Allah."</strong><br>
(QS. Al-Ahzab: 21)</p>
<br>
<p style="text-align: center;"><strong>"Barang siapa di antara kalian melihat kemungkaran, hendaklah ia mengubahnya dengan tangannya; jika tidak mampu maka dengan lisannya; jika tidak mampu maka dengan hatinya, dan itu adalah selemah-lemahnya iman."</strong><br>
(HR. Muslim)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَyyuhalladzīna āmanū hal adullukum 'alā tijāratin tunjīkum min 'adzābin alīm. Tu'minūna billāhi wa rasūlihi wa tujāhidūna fī sabīlillāhi bi amwālikum wa anfusikum.</div>
<p style="text-align: center;"><strong>"O you who have believed, shall I guide you to a transaction that will save you from a painful punishment? [It is that] you believe in Allah and His Messenger and strive in the cause of Allah with your wealth and your lives. That is best for you, if you should know."</strong><br>
(QS. As-Saff: 10–11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا</div>
<p style="text-align: center;"><strong>"There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day and [who] remembers Allah often."</strong><br>
(QS. Al-Ahzab: 21)</p>
<br>
<p style="text-align: center;"><strong>"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; and if he cannot, then with his heart—and that is the weakest of faith."</strong><br>
(Hadith Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ تُنْجِيكُمْ مِنْ عَذَابٍ أَلِيمٍ * تُؤْمِنُونَ بِاللَّهِ وَرَسُولِهِ وَتُجَاهِدُونَ فِي سَبِيلِ اللَّهِ بِأَمْوَالِكُمْ وَأَنْفُسِكُمْ ۚ ذَٰلِكُمْ خَيْرٌ لَكُمْ إِنْ كُنْتُمْ تَعْلَمُونَ</div>
<p style="text-align: center;"><strong>"يا أيها الذين آمنوا هل أدلكم على تجارة تنجيكم من عذاب أليم. تؤمنون بالله ورسوله وتجاهدون في سبيل الله بأموالكم وأنفسكم. ذلكم خير لكم إن كنتم تعلمون."</strong><br>
(سورة الصف: 10-11)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ لِمَنْ كَانَ يَرْجُو اللَّهَ وَالْيَوْمَ الْآخِرَ وَذَكَرَ اللَّهَ كَثِيرًا</div>
<p style="text-align: center;"><strong>"لقد كان لكم في رسول الله أسوة حسنة لمن كان يرجو الله واليوم الآخر وذكر الله كثيرا."</strong><br>
(سورة الأحزاب: 21)</p>
<br>
<p style="text-align: center;"><strong>"من رأى منكم منكراً فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان."</strong><br>
(رواه مسلم)</p>`
    }
  },
  {
    id: "10",
    title: {
      id: "Iman yang Tidak Dibayar Mahal Tidak Akan Mengubah Apa-Apa",
      en: "Faith Not Paid Dearly Will Change Nothing",
      ar: "الإيمان الذي لا يدفع ثمنه غالياً لن يغير شيئاً"
    },
    content: {
      id: `Banyak orang hari ini mudah berkata, "Saya beriman." Kalimat itu ringan di lisan, murah di pengakuan, dan sering kali kosong dari konsekuensi. Iman dijadikan identitas, bukan komitmen. Ia dipakai untuk merasa aman, bukan untuk siap diuji.

Padahal iman tidak pernah gratis. Ia selalu menuntut harga. Semakin tinggi iman diklaim, semakin mahal ujian yang menyertainya. Iman yang tidak dibayar dengan pengorbanan hanya akan melahirkan rasa puas diri, bukan perubahan.

Umat Islam hari ini gemar mengklaim iman, tetapi enggan membayar harganya. Ketika kebenaran menuntut keberanian, mereka memilih aman. Ketika keadilan menuntut posisi, mereka memilih netral. Ketika Islam menuntut ditegakkan, mereka memilih kompromi. Lalu tetap merasa beriman.

Inilah iman yang rapuh—iman yang tidak sanggup menahan panas ujian. Ia hidup di ruang nyaman, tetapi runtuh ketika diminta berkonsekuensi. Ia tumbuh di majelis, tetapi layu di medan tanggung jawab.

Allah tidak pernah menilai iman dari pengakuan. Allah menilai iman dari kesiapan untuk diuji. Karena iman sejati selalu bergerak dari qalbu ke sikap, dari keyakinan ke keberpihakan. Jika iman berhenti di dada dan tidak tampak pada pilihan hidup, maka itu bukan iman yang mengubah apa pun.

Sejarah Islam tidak dibangun oleh orang-orang yang merasa cukup dengan iman lisan. Ia dibangun oleh orang-orang yang mempertaruhkan iman mereka—dengan harta, kenyamanan, reputasi, bahkan nyawa. Mereka tidak bertanya, "Aman atau tidak?" Mereka bertanya, "Benar atau tidak?"

Ramadhan seharusnya menjadi cermin kejujuran. Jika iman kita benar, maka ia akan terasa berat. Ia akan mengusik zona nyaman. Ia akan memaksa kita memilih, bukan bersembunyi di balik kata-kata. Puasa bukan sekadar menahan lapar, tetapi melatih kesediaan membayar harga iman.

Jangan cepat berkata, "Kami beriman," jika belum siap diuji. Jangan bangga dengan klaim, jika belum ada pengorbanan. Karena iman yang tidak dibayar mahal tidak akan mengubah diri, apalagi mengubah umat.`,
      en: `Many people today easily say, "I believe." That sentence is light on the tongue, cheap in confession, and often empty of consequences. Faith is made an identity, not a commitment. It is used to feel safe, not to be ready to be tested.

Whereas faith is never free. It always demands a price. The higher the faith is claimed, the more expensive the test that accompanies it. Faith that is not paid for with sacrifice will only give birth to self-satisfaction, not change.

Muslims today love to claim faith, but are reluctant to pay the price. When truth demands courage, they choose safety. When justice demands a position, they choose neutrality. When Islam demands to be upheld, they choose compromise. Then still feel faithful.

This is fragile faith—faith that cannot withstand the heat of the test. It lives in a comfortable room, but collapses when asked for consequences. It grows in assemblies, but withers in the field of responsibility.

Allah never judges faith from confession. Allah judges faith from readiness to be tested. Because true faith always moves from the heart to attitude, from belief to partiality. If faith stops in the chest and does not appear in life choices, then it is not faith that changes anything.

Islamic history was not built by people who felt sufficient with verbal faith. It was built by people who risked their faith—with wealth, comfort, reputation, even life. They did not ask, "Is it safe or not?" They asked, "Is it right or not?"

Ramadan should be a mirror of honesty. If our faith is true, then it will feel heavy. It will disturb the comfort zone. It will force us to choose, not hide behind words. Fasting is not just holding back hunger, but training willingness to pay the price of faith.

Do not be quick to say, "We believe," if not ready to be tested. Do not be proud of claims, if there is no sacrifice. Because faith that is not paid dearly will not change oneself, let alone change the Ummah.`,
      ar: `كثير من الناس اليوم يقولون بسهولة: "أنا مؤمن". تلك الجملة خفيفة على اللسان، رخيصة في الاعتراف، وغالباً ما تكون خالية من العواقب. يُتخذ الإيمان هوية، لا التزاماً. يُستخدم للشعور بالأمان، لا للاستعداد للاختبار.

بينما الإيمان ليس مجانياً أبداً. إنه يطلب دائماً ثمناً. كلما ادعي الإيمان أعلى، كان الاختبار الذي يرافقه أغلى. الإيمان الذي لا يدفع ثمنه بالتضحية لن يلد إلا الرضا عن النفس، وليس التغيير.

المسلمون اليوم يحبون ادعاء الإيمان، لكنهم يترددون في دفع ثمنه. عندما تطلب الحقيقة الشجاعة، يختارون الأمان. عندما تطلب العدالة موقفاً، يختارون الحياد. عندما يطلب الإسلام أن يقام، يختارون الحل الوسط. ثم يظلون يشعرون بالإيمان.

هذا إيمان هش - إيمان لا يستطيع تحمل حرارة الاختبار. يعيش في غرفة مريحة، لكنه ينهار عندما يُطلب منه العواقب. ينمو في المجالس، لكنه يذبل في ميدان المسؤولية.

لا يحكم الله أبداً على الإيمان من الاعتراف. يحكم الله على الإيمان من الاستعداد للاختبار. لأن الإيمان الحقيقي يتحرك دائماً من القلب إلى الموقف، من اليقين إلى الانحياز. إذا توقف الإيمان في الصدر ولم يظهر في خيارات الحياة، فهو ليس إيماناً يغير أي شيء.

لم يبن التاريخ الإسلامي أناس شعروا بالاكتفاء بالإيمان اللفظي. بناه أناس خاطروا بإيمانهم - بالمال، والراحة، والسمعة، وحتى الحياة. لم يسألوا: "هل هو آمن أم لا؟" سألوا: "هل هو حق أم لا؟"

يجب أن يكون رمضان مرآة للصدق. إذا كان إيماننا صادقاً، فسيشعر بالثقل. سيزعج منطقة الراحة. سيجبرنا على الاختيار، لا الاختباء خلف الكلمات. الصيام ليس مجرد الامتناع عن الجوع، بل تدريب الاستعداد لدفع ثمن الإيمان.

لا تتسرعوا في القول: "آمنا"، إذا لم تكونوا مستعدين للاختبار. لا تفخروا بالادعاءات، إذا لم تكن هناك تضحية. لأن الإيمان الذي لا يدفع ثمنه غالياً لن يغير النفس، ناهيك عن تغيير الأمة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قَالَتِ الْأَعْرَابُ آمَنَّا ۖ قُلْ لَمْ تُؤْمِنُوا وَلَٰكِنْ قُولُوا أَسْلَمْنَا وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ</div>
<p style="text-align: center;"><strong>"Orang-orang Arab Badui itu berkata, 'Kami telah beriman.' Katakanlah, 'Kamu belum beriman, tetapi katakanlah: Kami telah berserah diri (Islam), karena iman itu belum masuk ke dalam hatimu.'"</strong><br>
(QS. Al-Hujurat: 14)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"Apakah manusia mengira bahwa mereka akan dibiarkan mengatakan, 'Kami telah beriman,' sementara mereka tidak diuji?"</strong><br>
(QS. Al-'Ankabut: 2)</p>
<br>
<p style="text-align: center;"><strong>"Manusia yang paling berat ujiannya adalah para nabi, kemudian orang-orang saleh, kemudian yang semisal mereka. Seseorang diuji sesuai dengan kadar agamanya."</strong><br>
(HR. Tirmidzi - hasan shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قَالَتِ الْأَعْرَابُ آمَنَّا ۖ قُلْ لَمْ تُؤْمِنُوا وَلَٰكِنْ قُولُوا أَسْلَمْنَا وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ</div>
<p style="text-align: center;"><strong>"The Bedouins say, 'We have believed.' Say, 'You have not [yet] believed; but say [instead], "We have submitted," for faith has not yet entered your hearts.'"</strong><br>
(QS. Al-Hujurat: 14)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"Do the people think that they will be left to say, 'We believe' and they will not be tried?"</strong><br>
(QS. Al-'Ankabut: 2)</p>
<br>
<p style="text-align: center;"><strong>"The people most severely tested are the prophets, then the righteous, then those like them. A person is tested according to the level of his religion."</strong><br>
(HR. Tirmidzi)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قَالَتِ الْأَعْرَابُ آمَنَّا ۖ قُلْ لَمْ تُؤْمِنُوا وَلَٰكِنْ قُولُوا أَسْلَمْنَا وَلَمَّا يَدْخُلِ الْإِيمَانُ فِي قُلُوبِكُمْ</div>
<p style="text-align: center;"><strong>"قالت الأعراب آمنا قل لم تؤمنوا ولكن قولوا أسلمنا ولما يدخل الإيمان في قلوبكم."</strong><br>
(سورة الحجرات: 14)</p>
<br>
<div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَنْ يُتْرَكُوا أَنْ يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ</div>
<p style="text-align: center;"><strong>"أحسب الناس أن يتركوا أن يقولوا آمنا وهم لا يفتنون."</strong><br>
(سورة العنكبوت: 2)</p>
<br>
<p style="text-align: center;"><strong>"أشد الناس بلاء الأنبياء، ثم الصالحون، ثم الأمثل فالأمثل. يبتلى الرجل على حسب دينه."</strong><br>
(رواه الترمذي - حسن صحيح)</p>`
    }
  },
  {
    id: "11",
    title: {
      id: "Islam Tidak Pernah Dibangun oleh Orang-Orang yang Ingin Aman",
      en: "Islam Was Never Built by Those Seeking Safety",
      ar: "لم يبن الإسلام أبداً بأيدي من يبحثون عن الأمان"
    },
    content: {
      id: `Islam tidak lahir dari ruang nyaman. Ia tidak tumbuh dari sikap aman, netral, dan berhitung untung-rugi dunia. Sejak awal, Islam dibangun oleh orang-orang yang siap kehilangan keamanan, harta, status, bahkan nyawa. Maka ketika hari ini umat Islam ingin memetik kemuliaan tanpa risiko, sejatinya mereka sedang menuntut sesuatu yang tidak pernah ada dalam sejarah Islam.

      Orang-orang yang ingin aman selalu punya alasan untuk menunda. Menunggu situasi kondusif. Menunggu mayoritas siap. Menunggu izin keadaan. Padahal kebenaran tidak pernah menunggu keadaan ramah. Justru keadaanlah yang berubah karena keberanian segelintir orang beriman.

      Nabi Muhammad ﷺ tidak menunggu Makkah aman untuk menyampaikan kebenaran. Para sahabat tidak menunggu dukungan penuh untuk berdiri tegak. Mereka tahu satu hal: menunda kebenaran demi keamanan adalah bentuk lain dari meninggalkannya.

      Hari ini, banyak umat Islam ingin Islam menang, tetapi tidak ingin harga kemenangan itu. Mereka ingin syariat dihormati, tetapi tidak siap dibenci. Mereka ingin keadilan ditegakkan, tetapi tidak siap kehilangan posisi. Mereka ingin pahala, tetapi alergi terhadap risiko. Maka Islam pun berhenti sebagai wacana, tidak pernah naik menjadi kekuatan.

      Sikap ingin aman telah melahirkan generasi yang cerdas berbicara, tetapi lemah bertindak. Mereka pandai mengemas dalil, tetapi gemetar saat kebenaran menuntut keberpihakan. Mereka menyebut kehati-hatian sebagai hikmah, padahal yang dijaga adalah kenyamanan.

      Sejarah mengajarkan pelajaran pahit: setiap kali umat Islam memilih aman, mereka kehilangan kehormatan. Setiap kali mereka memilih keberanian, meski sedikit dan berat, Allah bukakan jalan kemenangan. Islam tidak pernah dibela oleh massa yang takut, tetapi oleh minoritas yang teguh.

      Ramadhan adalah bulan latihan meninggalkan rasa aman. Puasa memotong ketergantungan pada kenyamanan jasmani agar hati berani berdiri di pihak kebenaran. Jika setelah Ramadhan kita tetap menjadikan keamanan pribadi sebagai kompas utama, maka puasa hanya melatih lapar, bukan keberanian.

      Berhentilah berharap Islam bangkit sementara kita sibuk menyelamatkan diri. Islam tidak membutuhkan pengagum yang ingin aman. Islam membutuhkan hamba yang siap berdiri, meski harus sendirian.`,
      en: `Islam was not born from a comfortable space. It did not grow from an attitude of safety, neutrality, and calculating worldly profit and loss. From the beginning, Islam was built by people who were ready to lose security, wealth, status, and even life. So when today Muslims want to reap glory without risk, they are actually demanding something that has never existed in Islamic history.

      People who want to be safe always have reasons to delay. Waiting for a conducive situation. Waiting for the majority to be ready. Waiting for permission from circumstances. Whereas truth never waits for friendly circumstances. It is circumstances that change because of the courage of a handful of believers.

      Prophet Muhammad ﷺ did not wait for Mecca to be safe to convey the truth. The companions did not wait for full support to stand tall. They knew one thing: delaying truth for the sake of safety is another form of abandoning it.

      Today, many Muslims want Islam to win, but do not want the price of that victory. They want Sharia to be respected, but are not ready to be hated. They want justice to be upheld, but are not ready to lose their positions. They want rewards, but are allergic to risk. So Islam stops as a discourse, never rising to become a force.

      The attitude of wanting to be safe has given birth to a generation that is smart at talking, but weak at acting. They are good at packaging arguments, but tremble when truth demands partisanship. They call caution wisdom, when what is being guarded is comfort.

      History teaches a bitter lesson: every time Muslims choose to be safe, they lose honor. Every time they choose courage, even if few and heavy, Allah opens the way to victory. Islam is never defended by a fearful mass, but by a steadfast minority.

      Ramadan is a month of training to leave the sense of safety. Fasting cuts dependence on physical comfort so that the heart dares to stand on the side of truth. If after Ramadan we still make personal safety the main compass, then fasting only trains hunger, not courage.

      Stop hoping for Islam to rise while we are busy saving ourselves. Islam does not need admirers who want to be safe. Islam needs servants who are ready to stand, even if they have to be alone.`,
      ar: `لم يولد الإسلام من مساحة مريحة. لم ينمُ من موقف الأمان والحياد وحساب الربح والخسارة الدنيوية. منذ البداية، بُني الإسلام بأيدي أناس كانوا مستعدين لفقدان الأمن والمال والمكانة وحتى الحياة. لذا عندما يريد المسلمون اليوم جني المجد دون مخاطرة، فهم في الواقع يطالبون بشيء لم يكن موجوداً أبداً في التاريخ الإسلامي.

      الأشخاص الذين يريدون الأمان لديهم دائماً أسباب للتأجيل. انتظار الوضع المناسب. انتظار استعداد الأغلبية. انتظار إذن الظروف. بينما الحقيقة لا تنتظر أبداً ظروفاً ودودة. الظروف هي التي تتغير بسبب شجاعة حفنة من المؤمنين.

      لم ينتظر النبي محمد ﷺ أن تكون مكة آمنة لتبليغ الحق. لم ينتظر الصحابة الدعم الكامل ليقفوا شامخين. كانوا يعرفون شيئاً واحداً: تأجيل الحق من أجل الأمان هو شكل آخر من أشكال التخلي عنه.

      اليوم، يريد الكثير من المسلمين أن ينتصر الإسلام، لكنهم لا يريدون ثمن ذلك النصر. يريدون أن تُحترم الشريعة، لكنهم ليسوا مستعدين للكراهية. يريدون إقامة العدل، لكنهم ليسوا مستعدين لفقدان مناصبهم. يريدون الثواب، لكنهم لديهم حساسية تجاه المخاطرة. لذا يتوقف الإسلام كخطاب، ولا يرقى أبداً ليصبح قوة.

      لقد ولد موقف الرغبة في الأمان جيلاً ذكياً في الحديث، لكنه ضعيف في العمل. يجيدون تغليف الأدلة، لكنهم يرتجفون عندما يطلب الحق الانحياز. يسمون الحذر حكمة، بينما ما يتم حمايته هو الراحة.

      يعلمنا التاريخ درساً مريراً: في كل مرة يختار فيها المسلمون الأمان، يفقدون الشرف. في كل مرة يختارون فيها الشجاعة، حتى لو كانت قليلة وثقيلة، يفتح الله طريق النصر. لا يُدافع عن الإسلام أبداً بكتلة خائفة، بل بأقلية صامدة.

      رمضان هو شهر التدريب على ترك الشعور بالأمان. يقطع الصيام الاعتماد على الراحة الجسدية لكي يجرؤ القلب على الوقوف في جانب الحق. إذا ظللنا بعد رمضان نجعل الأمان الشخصي بوصلتنا الرئيسية، فإن الصيام يدرب الجوع فقط، وليس الشجاعة.

      توقفوا عن الأمل في نهضة الإسلام ونحن مشغولون بإنقاذ أنفسنا. الإسلام لا يحتاج إلى معجبين يريدون الأمان. الإسلام يحتاج إلى عباد مستعدين للوقوف، حتى لو اضطروا لأن يكونوا وحدهم.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
      <p style="text-align: center;"><strong>"(Yaitu) orang-orang yang ketika ada orang-orang mengatakan kepadanya, 'Sesungguhnya manusia telah mengumpulkan pasukan untuk menyerang kamu, karena itu takutlah kepada mereka,' justru hal itu menambah keimanan mereka dan mereka berkata, 'Cukuplah Allah menjadi Penolong kami dan Dia sebaik-baik Pelindung.'"</strong><br>
      (QS. Ali 'Imran: 173)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَا لَكُمْ إِذَا قِيلَ لَكُمُ انفِرُوا فِي سَبِيلِ اللَّهِ اثَّاقَلْتُمْ إِلَى الْأَرْضِ ۚ أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ</div>
      <p style="text-align: center;"><strong>"Wahai orang-orang yang beriman! Mengapa apabila dikatakan kepadamu, 'Berangkatlah (untuk berjuang) di jalan Allah,' kamu merasa berat dan cenderung kepada bumi? Apakah kamu puas dengan kehidupan dunia dibandingkan dengan akhirat?"</strong><br>
      (QS. At-Taubah: 38)</p>
      <br>
      <p style="text-align: center;"><strong>"Tidaklah aku meninggalkan sesuatu yang dapat mendekatkan kalian kepada surga dan menjauhkan kalian dari neraka, kecuali aku telah memerintahkan kalian dengannya."</strong><br>
      (HR. Thabrani - hasan)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
      <p style="text-align: center;"><strong>"Those to whom hypocrites said, 'Indeed, the people have gathered against you, so fear them.' But it [only] increased them in faith, and they said, 'Sufficient for us is Allah, and [He is] the best Disposer of affairs.'"</strong><br>
      (QS. Ali 'Imran: 173)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَا لَكُمْ إِذَا قِيلَ لَكُمُ انفِرُوا فِي سَبِيلِ اللَّهِ اثَّاقَلْتُمْ إِلَى الْأَرْضِ ۚ أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ</div>
      <p style="text-align: center;"><strong>"O you who have believed, what is [the matter] with you that, when you are told to go forth in the cause of Allah, you adhere heavily to the earth? Are you satisfied with the life of this world rather than the Hereafter?"</strong><br>
      (QS. At-Taubah: 38)</p>
      <br>
      <p style="text-align: center;"><strong>"I have not left anything that brings you closer to Paradise and distances you from the Fire except that I have commanded you with it."</strong><br>
      (HR. Thabrani)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">الَّذِينَ قَالَ لَهُمُ النَّاسُ إِنَّ النَّاسَ قَدْ جَمَعُوا لَكُمْ فَاخْشَوْهُمْ فَزَادَهُمْ إِيمَانًا وَقَالُوا حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ</div>
      <p style="text-align: center;"><strong>"الذين قال لهم الناس إن الناس قد جمعوا لكم فاخشوهم فزادهم إيماناً وقالوا حسبنا الله ونعم الوكيل."</strong><br>
      (سورة آل عمران: 173)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَا لَكُمْ إِذَا قِيلَ لَكُمُ انفِرُوا فِي سَبِيلِ اللَّهِ اثَّاقَلْتُمْ إِلَى الْأَرْضِ ۚ أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ</div>
      <p style="text-align: center;"><strong>"يا أيها الذين آمنوا ما لكم إذا قيل لكم انفروا في سبيل الله اثاقلتم إلى الأرض أرضيتم بالحياة الدنيا من الآخرة."</strong><br>
      (سورة التوبة: 38)</p>
      <br>
      <p style="text-align: center;"><strong>"ما تركت شيئاً يقربكم إلى الجنة ويباعدكم من النار إلا وأمرتكم به."</strong><br>
      (رواه الطبراني - حسن)</p>`
    }
  },
  {
    id: "12",
    title: {
      id: "Mengapa Ujian Selalu Datang Sebelum Kemenangan",
      en: "Why Trials Always Come Before Victory",
      ar: "لماذا يأتي البلاء دائماً قبل النصر"
    },
    content: {
      id: `Umat Islam hari ini ingin kemenangan, tapi alergi terhadap ujian.
Ingin kejayaan, tapi tidak mau luka.
Ingin Islam berjaya, tapi berharap semuanya berjalan aman, nyaman, dan tanpa risiko.
Padahal, sejak awal sejarahnya, Islam tidak pernah lahir dari zona aman.
Kemenangan tidak pernah turun kepada orang yang hanya pandai berdoa, tapi enggan membayar harga. Allah tidak membangun peradaban dengan orang-orang yang hanya berkata, "yang penting niatnya baik." Allah membangun Islam dengan orang-orang yang siap hancur lebih dulu sebelum dimenangkan.

Hari ini umat bertanya, "Kenapa Islam tidak menang-menang?"
Jawabannya sederhana tapi menyakitkan: karena kita menolak ujian, tapi menuntut hasil.

Ujian selalu datang sebelum kemenangan karena iman tidak bisa dibuktikan dengan lisan. Iman hanya sah jika diuji. Dan ujian itu bukan seminar, bukan kajian, bukan diskusi ilmiah. Ujian itu berupa takut, lapar, kehilangan, tekanan, pengorbanan, dan ancaman nyata.

Nabi Muhammad ﷺ tidak menerima kemenangan setelah baiat.
Beliau menerima:
* caci maki,
* pemboikotan ekonomi,
* pengusiran,
* ancaman pembunuhan,
* dan peperangan.

Para sahabat tidak diuji dengan komentar pedas di media sosial.
Mereka diuji dengan darah, harta, keluarga, dan nyawa.

Hari ini, baru kehilangan kenyamanan sedikit saja, umat sudah berkata:
"Islam jangan dibawa ke mana-mana."
"Jangan keras-keras, nanti umat takut."
"Yang penting akhlak, urusan sistem nanti saja."

Padahal justru ujian itu tanda Allah masih mempersiapkan kemenangan.
Ketika umat diuji, itu bukan tanda Allah meninggalkan, tapi tanda Allah sedang menyaring.

Allah tidak akan memberikan kemenangan kepada umat yang:
* belum sabar,
* belum jujur,
* belum berani berkorban,
* dan masih lebih takut kehilangan dunia daripada kehilangan ridha Allah.

Ujian datang sebelum kemenangan karena kemenangan bukan hadiah gratis.
Kemenangan adalah amanah besar, dan amanah tidak diberikan kepada orang yang mentalnya masih ingin aman.

Jika hari ini Islam masih dihina, ditindas, dan dipermainkan, jangan buru-buru menyalahkan musuh.
Cerminlah diri kita:
Apakah kita sudah siap diuji seperti Nabi?
Atau kita hanya ingin Islam menang, asal kita tidak ikut menderita?

Jika jawabannya yang kedua, maka wajar bila kemenangan terus ditunda.
Karena Allah tidak pernah memenangkan umat yang belum lulus ujian iman.`,
      en: `Muslims today want victory, but are allergic to trials.
Wanting glory, but not wanting wounds.
Wanting Islam to triumph, but hoping everything goes safely, comfortably, and without risk.
Yet, from the very beginning of its history, Islam was never born from a safe zone.
Victory never descends upon those who are only good at praying but reluctant to pay the price. Allah does not build civilization with people who only say, "the important thing is the intention is good." Allah builds Islam with people who are ready to be shattered first before being made victorious.

Today the Ummah asks, "Why isn't Islam winning?"
The answer is simple but painful: because we refuse the test, but demand the result.

Trials always come before victory because faith cannot be proven by words alone. Faith is only valid if tested. And the test is not a seminar, not a study circle, not a scientific discussion. The test is fear, hunger, loss, pressure, sacrifice, and real threats.

Prophet Muhammad ﷺ did not receive victory after the pledge of allegiance.
He received:
* abuse,
* economic boycott,
* expulsion,
* death threats,
* and war.

The Companions were not tested with spicy comments on social media.
They were tested with blood, wealth, family, and life.

Today, just losing a little comfort, the Ummah already says:
"Don't take Islam everywhere."
"Don't be too hard, or people will be scared."
"The important thing is morals, system matters later."

Yet precisely that trial is a sign Allah is still preparing victory.
When the Ummah is tested, it is not a sign Allah is leaving, but a sign Allah is filtering.

Allah will not give victory to an Ummah that:
* has not been patient,
* has not been honest,
* has not dared to sacrifice,
* and still fears losing the world more than losing Allah's pleasure.

Trials come before victory because victory is not a free gift.
Victory is a great trust, and trust is not given to people whose mentality still wants to be safe.

If today Islam is still insulted, oppressed, and played with, don't be in a rush to blame the enemy.
Mirror ourselves:
Are we ready to be tested like the Prophet?
Or do we only want Islam to win, as long as we don't suffer?

If the answer is the second, then it is natural that victory continues to be postponed.
Because Allah never grants victory to an Ummah that has not passed the test of faith.`,
      ar: `المسلمون اليوم يريدون النصر، لكنهم لديهم حساسية من الابتلاء.
يريدون المجد، لكنهم لا يريدون الجراح.
يريدون للإسلام أن ينتصر، لكنهم يأملون أن يسير كل شيء بأمان وراحة ودون مخاطرة.
ومع ذلك، منذ بداية تاريخه، لم يولد الإسلام أبداً من منطقة آمنة.
النصر لا ينزل أبداً على أولئك الذين يجيدون الدعاء فقط لكنهم يترددون في دفع الثمن. الله لا يبني الحضارة بأناس يقولون فقط "المهم أن النية طيبة". الله يبني الإسلام بأناس مستعدين للتحطم أولاً قبل أن يُنصروا.

اليوم تسأل الأمة: "لماذا لا ينتصر الإسلام؟"
الجواب بسيط ولكنه مؤلم: لأننا نرفض الاختبار، لكننا نطالب بالنتيجة.

الابتلاء يأتي دائماً قبل النصر لأن الإيمان لا يمكن إثباته باللسان فقط. الإيمان لا يصح إلا إذا اختُبر. والاختبار ليس ندوة، وليس درساً، وليس مناقشة علمية. الاختبار هو الخوف، والجوع، والفقد، والضغط، والتضحية، والتهديدات الحقيقية.

النبي محمد ﷺ لم يتلق النصر بعد البيعة.
بل تلقى:
* الشتائم،
* والمقاطعة الاقتصادية،
* والطرد،
* وتهديدات القتل،
* والحرب.

الصحابة لم يختبروا بالتعليقات اللاذعة على وسائل التواصل الاجتماعي.
بل اختبروا بالدماء، والأموال، والعائلة، والأرواح.

اليوم، بمجرد فقدان القليل من الراحة، تقول الأمة بالفعل:
"لا تأخذوا الإسلام إلى كل مكان".
"لا تكونوا قساوة جداً، وإلا سيخاف الناس".
"المهم الأخلاق، أمور النظام لاحقاً".

ومع ذلك، فإن هذا الابتلاء هو بالضبط علامة على أن الله لا يزال يعد للنصر.
عندما تُبتلى الأمة، فليس ذلك علامة على أن الله يتركها، بل علامة على أن الله يمحصها.

الله لن يعطي النصر لأمة:
* لم تصبر،
* ولم تصدق،
* ولم تجرؤ على التضحية،
* ولا تزال تخاف فقدان الدنيا أكثر من فقدان رضا الله.

الابتلاء يأتي قبل النصر لأن النصر ليس هدية مجانية.
النصر أمانة عظيمة، والأمانة لا تعطى لأناس لا تزال عقليتهم تريد الأمان.

إذا كان الإسلام اليوم لا يزال يُهان، ويُضطهد، ويُتلاعب به، فلا تتسرعوا في لوم العدو.
لننظر في المرآة:
هل نحن مستعدون للاختبار مثل النبي؟
أم أننا نريد فقط أن ينتصر الإسلام، طالما أننا لا نعاني؟

إذا كان الجواب هو الثاني، فمن الطبيعي أن يستمر تأجيل النصر.
لأن الله لا يمنح النصر أبداً لأمة لم تنجح في اختبار الإيمان.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"Apakah kamu mengira bahwa kamu akan masuk surga, padahal belum datang kepadamu cobaan seperti halnya orang-orang terdahulu sebelum kamu? Mereka ditimpa oleh malapetaka dan kesengsaraan, serta digoncangkan (dengan berbagai cobaan), sehingga berkatalah Rasul dan orang-orang yang beriman bersamanya: 'Kapankah datang pertolongan Allah? Ingatlah, sesungguhnya pertolongan Allah itu dekat."</strong><br>
      (QS. Al-Baqarah: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"Apakah kamu mengira bahwa kamu akan masuk surga, padahal Allah belum mengetahui (dalam kenyataan) siapa di antara kamu yang berjihad dan belum mengetahui siapa yang sabar?"</strong><br>
      (QS. Ali 'Imran: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ (2) وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ (3)</div>
      <p style="text-align: center;"><strong>"Apakah manusia mengira bahwa mereka akan dibiarkan mengatakan: 'Kami telah beriman,' sedangkan mereka tidak diuji? Dan sungguh, Kami telah menguji orang-orang sebelum mereka, maka Allah pasti mengetahui orang-orang yang benar dan pasti mengetahui orang-orang yang dusta."</strong><br>
      (QS. Al-'Ankabut: 2-3)</p>
      <br>
      <p style="text-align: center;"><strong>"Manusia yang paling berat ujiannya adalah para Nabi, kemudian orang-orang shalih, lalu yang semisal mereka. Seseorang diuji sesuai dengan kadar agamanya."</strong><br>
      (HR. At-Tirmidzi - hasan shahih)</p>
      <br>
      <p style="text-align: center;"><strong>"Ketahuilah, sesungguhnya pertolongan itu bersama kesabaran, jalan keluar bersama kesempitan, dan sesungguhnya setelah kesulitan ada kemudahan."</strong><br>
      (HR. Ahmad - shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"Or do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until [even their] messenger and those who believed with him said, 'When is the help of Allah?' Unquestionably, the help of Allah is near."</strong><br>
      (QS. Al-Baqarah: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"Or do you think that you will enter Paradise while Allah has not yet made evident those of you who fight in His cause and made evident those who are steadfast?"</strong><br>
      (QS. Ali 'Imran: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ (2) وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ (3)</div>
      <p style="text-align: center;"><strong>"Do the people think that they will be left to say, 'We believe' and they will not be tried? But We have certainly tried those before them, and Allah will surely make evident those who are truthful, and He will surely make evident the liars."</strong><br>
      (QS. Al-'Ankabut: 2-3)</p>
      <br>
      <p style="text-align: center;"><strong>"The people most severely tested are the Prophets, then those most like them, then those most like them. A person is tested according to his religious commitment."</strong><br>
      (HR. At-Tirmidzi)</p>
      <br>
      <p style="text-align: center;"><strong>"Know that there is much good in patience with what you dislike, and that victory comes with patience, relief with distress, and with hardship comes ease."</strong><br>
      (HR. Ahmad)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"أم حسبتم أن تدخلوا الجنة ولما يأتكم مثل الذين خلوا من قبلكم مستهم البأساء والضراء وزلزلوا حتى يقول الرسول والذين آمنوا معه متى نصر الله ألا إن نصر الله قريب."</strong><br>
      (سورة البقرة: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"أم حسبتم أن تدخلوا الجنة ولما يعلم الله الذين جاهدوا منكم ويعلم الصابرين."</strong><br>
      (سورة آل عمران: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ (2) وَلَقَدْ فَتَنَّا الَّذِينَ مِن قَبْلِهِمْ ۖ فَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ صَدَقُوا وَلَيَعْلَمَنَّ الْكَاذِبِينَ (3)</div>
      <p style="text-align: center;"><strong>"أحسب الناس أن يتركوا أن يقولوا آمنا وهم لا يفتنون * ولقد فتنا الذين من قبلهم فليعلمن الله الذين صدقوا وليعلمن الكاذبين."</strong><br>
      (سورة العنكبوت: 2-3)</p>
      <br>
      <p style="text-align: center;"><strong>"أشد الناس بلاء الأنبياء ثم الأمثل فالأمثل. يبتلى الرجل على حسب دينه."</strong><br>
      (رواه الترمذي - حسن صحيح)</p>
      <br>
      <p style="text-align: center;"><strong>"واعلم أن في الصبر على ما تكره خيرا كثيرا، وأن النصر مع الصبر، وأن الفرج مع الكرب، وأن مع العسر يسرا."</strong><br>
      (رواه أحمد - صحيح)</p>`
    }
  },
  {
    id: "13",
    title: {
      id: "Mengapa Allah Tidak Menolong Umat yang Masih Takut Kehilangan Dunia",
      en: "Why Allah Does Not Help a People Who Still Fear Losing the World",
      ar: "لماذا لا ينصر الله أمة لا تزال تخاف فقدان الدنيا"
    },
    content: {
      id: `Umat Islam hari ini rajin meminta pertolongan Allah, tetapi takut kehilangan dunia.
Lisan berdoa siang malam, namun hati gemetar ketika harta, jabatan, kenyamanan, dan citra diri terancam.
Inilah kontradiksi terbesar umat Islam hari ini:
ingin ditolong Allah, tetapi tidak siap melepaskan apa pun demi Allah.
Padahal sejak awal, Allah tidak pernah menolong umat yang masih menjadikan dunia sebagai tuhan tersembunyi. Dunia boleh di tangan, tapi ketika dunia sudah berada di hati, pertolongan Allah akan berhenti di langit.

Nabi Muhammad ﷺ dan para sahabat tidak pernah meminta pertolongan Allah sambil berkata,
"Ya Allah tolong agama-Mu, tapi jangan ganggu bisnis kami."
"Ya Allah menangkan Islam, tapi jangan sentuh kenyamanan hidup kami."

Mereka memahami satu hal yang hari ini hilang dari umat Islam:
pertolongan Allah selalu menuntut harga yang mahal.

Hari ini umat Islam takut:
* kehilangan pekerjaan karena kebenaran,
* kehilangan jabatan karena sikap,
* kehilangan relasi karena prinsip,
* kehilangan harta karena perjuangan.

Lalu dengan wajah polos bertanya, "Kenapa Allah tidak menolong?"
Bagaimana mungkin pertolongan turun, sementara umat lebih takut pada:
* hukum manusia daripada hukum Allah,
* kehilangan dunia daripada kehilangan iman,
* tekanan manusia daripada murka Allah.

Allah tidak menolong umat yang masih menimbang dakwah dengan untung-rugi dunia.
Allah tidak menolong umat yang masih bertanya, "Ada manfaatnya buat saya?" sebelum bergerak.

Para sahabat tidak bertanya:
* "Apa jaminannya?"
* "Apa keuntungannya?"
* "Apa dampaknya bagi keluarga saya?"

Mereka bertanya satu hal saja:
"Apakah Allah ridha?"

Hari ini umat Islam ingin Islam berjaya, tapi tetap ingin aman.
Ingin kebenaran tegak, tapi tidak mau membayar resikonya.
Ingin pahala, tapi menolak luka.

Inilah sebab utama pertolongan Allah ditahan.
Bukan karena Allah lemah.
Bukan karena musuh terlalu kuat.
Tapi karena umat terlalu cinta dunia dan takut mati.

Selama umat Islam masih menghitung dunia sebelum melangkah,
selama itu pula pertolongan Allah tidak akan turun.
Karena Allah hanya menolong umat yang siap kehilangan dunia, demi memenangkan akhirat.`,
      en: `Muslims today are diligent in asking for Allah's help, but are afraid of losing the world.
Tongues pray day and night, but hearts tremble when wealth, position, comfort, and self-image are threatened.
This is the greatest contradiction of Muslims today:
wanting to be helped by Allah, but not ready to give up anything for the sake of Allah.
Yet from the beginning, Allah never helped a people who still made the world a hidden god. The world may be in the hand, but when the world is already in the heart, Allah's help will stop in the sky.

Prophet Muhammad ﷺ and the companions never asked for Allah's help while saying,
"O Allah help Your religion, but don't disturb our business."
"O Allah grant victory to Islam, but don't touch the comfort of our lives."

They understood one thing that is lost from Muslims today:
Allah's help always demands a high price.

Today Muslims are afraid of:
* losing jobs because of truth,
* losing positions because of attitude,
* losing relationships because of principles,
* losing wealth because of struggle.

Then with an innocent face ask, "Why doesn't Allah help?"
How can help descend, while the Ummah is more afraid of:
* human laws than Allah's law,
* losing the world than losing faith,
* human pressure than Allah's wrath.

Allah does not help people who still weigh da'wah with worldly profit and loss.
Allah does not help people who still ask, "Is there any benefit for me?" before moving.

The companions did not ask:
* "What is the guarantee?"
* "What is the profit?"
* "What is the impact on my family?"

They asked only one thing:
"Is Allah pleased?"

Today Muslims want Islam to triumph, but still want to be safe.
Want truth to stand, but don't want to pay the risk.
Want reward, but refuse wounds.

This is the main reason Allah's help is withheld.
Not because Allah is weak.
Not because the enemy is too strong.
But because the Ummah loves the world too much and fears death.

As long as Muslims still count the world before stepping,
so long will Allah's help not descend.
Because Allah only helps people who are ready to lose the world, to win the Hereafter.`,
      ar: `المسلمون اليوم مجتهدون في طلب نصر الله، لكنهم يخافون فقدان الدنيا.
الألسنة تدعو ليل نهار، لكن القلوب ترتجف عندما تُهدد الثروة، والمناصب، والراحة، والصورة الذاتية.
هذا هو التناقض الأكبر للمسلمين اليوم:
يريدون أن ينصرهم الله، لكنهم ليسوا مستعدين للتخلي عن أي شيء في سبيل الله.
ومع ذلك، منذ البداية، لم ينصر الله أبداً قوماً ما زالوا يجعلون الدنيا إلهاً خفياً. قد تكون الدنيا في اليد، لكن عندما تكون الدنيا قد استقرت في القلب، يتوقف نصر الله في السماء.

النبي محمد ﷺ والصحابة لم يطلبوا نصر الله وهم يقولون:
"يا الله انصر دينك، ولكن لا تزعج تجارتنا."
"يا الله امنح الإسلام النصر، ولكن لا تمس راحة حياتنا."

لقد فهموا شيئاً واحداً ضاع من المسلمين اليوم:
نصر الله يطلب دائماً ثمناً باهظاً.

اليوم يخاف المسلمون من:
* فقدان الوظائف بسبب الحق،
* فقدان المناصب بسبب المواقف،
* فقدان العلاقات بسبب المبادئ،
* فقدان المال بسبب النضال.

ثم بوجه بريء يسألون: "لماذا لا ينصرنا الله؟"
كيف يمكن أن ينزل النصر، والأمة تخاف أكثر من:
* قوانين البشر أكثر من قانون الله،
* فقدان الدنيا أكثر من فقدان الإيمان،
* ضغط البشر أكثر من غضب الله.

الله لا ينصر قوماً ما زالوا يزنون الدعوة بالربح والخسارة الدنيوية.
الله لا ينصر قوماً ما زالوا يسألون: "هل هناك فائدة لي؟" قبل التحرك.

لم يسأل الصحابة:
* "ما هو الضمان؟"
* "ما هو الربح؟"
* "ما هو التأثير على عائلتي؟"

سألوا شيئاً واحداً فقط:
"هل الله راضٍ؟"

اليوم يريد المسلمون أن ينتصر الإسلام، لكنهم ما زالوا يريدون الأمان.
يريدون أن تقوم الحقيقة، لكنهم لا يريدون دفع المخاطرة.
يريدون الثواب، لكنهم يرفضون الجراح.

هذا هو السبب الرئيسي لحجب نصر الله.
ليس لأن الله ضعيف.
ليس لأن العدو قوي جداً.
ولكن لأن الأمة تحب الدنيا كثيراً وتخاف الموت.

طالما أن المسلمين ما زالوا يحسبون الدنيا قبل الخطوة،
فطالما لن ينزل نصر الله.
لأن الله ينصر فقط القوم المستعدين لفقدان الدنيا، ليفوزوا بالآخرة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قُلْ إِن كَانَ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ وَإِخْوَانُكُمْ وَأَزْوَاجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَالٌ اقْتَرَفْتُمُوهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسَاكِنُ تَرْضَوْنَهَا أَحَبَّ إِلَيْكُم مِّنَ اللَّهِ وَرَسُولِهِ وَجِهَادٍ فِي سَبِيلِهِ فَتَرَبَّصُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ</div>
      <p style="text-align: center;"><strong>"Katakanlah: Jika bapak-bapak, anak-anak, saudara-saudara, istri-istri, kaum kerabatmu, harta kekayaan yang kamu usahakan, perniagaan yang kamu khawatiri kerugiannya, dan rumah-rumah tempat tinggal yang kamu sukai, lebih kamu cintai daripada Allah dan Rasul-Nya serta berjihad di jalan-Nya, maka tunggulah sampai Allah mendatangkan keputusan-Nya. Dan Allah tidak memberi petunjuk kepada orang-orang fasik."</strong><br>
      (QS. At-Taubah: 24)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَإِن تَتَوَلَّوْا يَسْتَبْدِلْ قَوْمًا غَيْرَكُمْ ثُمَّ لَا يَكُونُوا أَمْثَالَكُم</div>
      <p style="text-align: center;"><strong>"Dan jika kamu berpaling, niscaya Dia akan mengganti (kamu) dengan kaum yang lain, dan mereka tidak akan seperti kamu ini."</strong><br>
      (QS. Muhammad: 38)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">ذَٰلِكَ بِأَنَّ اللَّهَ لَمْ يَكُ مُغَيِّرًا نِّعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ ۙ وَأَنَّ اللَّهَ سَمِيعٌ عَلِيمٌ</div>
      <p style="text-align: center;"><strong>"Yang demikian itu karena sesungguhnya Allah tidak akan mengubah nikmat yang telah dianugerahkan-Nya kepada suatu kaum, hingga mereka mengubah apa yang ada pada diri mereka sendiri."</strong><br>
      (QS. Al-Anfal: 53)</p>
      <br>
      <p style="text-align: center;"><strong>"Hampir tiba suatu masa di mana bangsa-bangsa akan mengerumuni kalian seperti orang-orang mengerumuni hidangan... Kalian seperti buih di lautan. Dan Allah akan mencabut rasa takut dari hati musuh-musuh kalian, serta menanamkan wahn di hati kalian... Cinta dunia dan takut mati."</strong><br>
      (HR. Abu Dawud - shahih)</p>
      <br>
      <p style="text-align: center;"><strong>"Barang siapa yang menjadikan dunia sebagai tujuannya, Allah akan mencerai-beraikan urusannya dan menjadikan kefakiran di depan matanya."</strong><br>
      (HR. Ibnu Majah - hasan)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قُلْ إِن كَانَ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ وَإِخْوَانُكُمْ وَأَزْوَاجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَالٌ اقْتَرَفْتُمُوهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسَاكِنُ تَرْضَوْنَهَا أَحَبَّ إِلَيْكُم مِّنَ اللَّهِ وَرَسُولِهِ وَجِهَادٍ فِي سَبِيلِهِ فَتَرَبَّصُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ</div>
      <p style="text-align: center;"><strong>"Say, [O Muhammad], 'If your fathers, your sons, your brothers, your wives, your relatives, wealth which you have obtained, commerce wherein you fear decline, and dwellings with which you are pleased are more beloved to you than Allah and His Messenger and jihad in His cause, then wait until Allah executes His command. And Allah does not guide the defiantly disobedient people.'"</strong><br>
      (QS. At-Taubah: 24)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَإِن تَتَوَلَّوْا يَسْتَبْدِلْ قَوْمًا غَيْرَكُمْ ثُمَّ لَا يَكُونُوا أَمْثَالَكُم</div>
      <p style="text-align: center;"><strong>"And if you turn away, He will replace you with another people; then they will not be the likes of you."</strong><br>
      (QS. Muhammad: 38)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">ذَٰلِكَ بِأَنَّ اللَّهَ لَمْ يَكُ مُغَيِّرًا نِّعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ ۙ وَأَنَّ اللَّهَ سَمِيعٌ عَلِيمٌ</div>
      <p style="text-align: center;"><strong>"That is because Allah would not change a favor which He had bestowed upon a people until they change what is within themselves. And indeed, Allah is Hearing and Knowing."</strong><br>
      (QS. Al-Anfal: 53)</p>
      <br>
      <p style="text-align: center;"><strong>"The nations are about to gather against you just as diners gather around a dish... You will be like the foam of the sea. Allah will remove the fear of you from the hearts of your enemies and cast Wahn into your hearts... Love of the world and fear of death."</strong><br>
      (HR. Abu Dawud)</p>
      <br>
      <p style="text-align: center;"><strong>"Whoever makes the world his goal, Allah will scatter his affairs and place poverty before his eyes."</strong><br>
      (HR. Ibnu Majah)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">قُلْ إِن كَانَ آبَاؤُكُمْ وَأَبْنَاؤُكُمْ وَإِخْوَانُكُمْ وَأَزْوَاجُكُمْ وَعَشِيرَتُكُمْ وَأَمْوَالٌ اقْتَرَفْتُمُوهَا وَتِجَارَةٌ تَخْشَوْنَ كَسَادَهَا وَمَسَاكِنُ تَرْضَوْنَهَا أَحَبَّ إِلَيْكُم مِّنَ اللَّهِ وَرَسُولِهِ وَجِهَادٍ فِي سَبِيلِهِ فَتَرَبَّصُوا حَتَّىٰ يَأْتِيَ اللَّهُ بِأَمْرِهِ ۗ وَاللَّهُ لَا يَهْدِي الْقَوْمَ الْفَاسِقِينَ</div>
      <p style="text-align: center;"><strong>"قل إن كان آباؤكم وأبناؤكم وإخوانكم وأزواجكم وعشيرتكم وأموال اقترفتموها وتجارة تخشون كسادها ومساكن ترضونها أحب إليكم من الله ورسوله وجهاز في سبيله فتربصوا حتى يأتي الله بأمره والله لا يهدي القوم الفاسقين."</strong><br>
      (سورة التوبة: 24)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَإِن تَتَوَلَّوْا يَسْتَبْدِلْ قَوْمًا غَيْرَكُمْ ثُمَّ لَا يَكُونُوا أَمْثَالَكُم</div>
      <p style="text-align: center;"><strong>"وإن تتولوا يستبدل قوما غيركم ثم لا يكونوا أمثالكم."</strong><br>
      (سورة محمد: 38)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">ذَٰلِكَ بِأَنَّ اللَّهَ لَمْ يَكُ مُغَيِّرًا نِّعْمَةً أَنْعَمَهَا عَلَىٰ قَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ ۙ وَأَنَّ اللَّهَ سَمِيعٌ عَلِيمٌ</div>
      <p style="text-align: center;"><strong>"ذلك بأن الله لم يك مغيرا نعمة أنعمها على قوم حتى يغيروا ما بأنفسهم وأن الله سميع عليم."</strong><br>
      (سورة الأنفال: 53)</p>
      <br>
      <p style="text-align: center;"><strong>"يوشك الأمم أن تداعى عليكم كما تداعى الأكلة إلى قصعتها... بل أنتم يومئذ كثير، ولكنكم غثاء كغثاء السيل، ولينزعن الله من صدور عدوكم المهابة منكم، وليقذفن الله في قلوبكم الوهن... حب الدنيا، وكراهية الموت."</strong><br>
      (رواه أبو داود - صحيح)</p>
      <br>
      <p style="text-align: center;"><strong>"من كانت الدنيا همه فرق الله عليه أمره وجعل فقره بين عينيه."</strong><br>
      (رواه ابن ماجه - حسن)</p>`
    }
  },
  {
    id: "14",
    title: {
      id: "Takut Mati, Lalu Ingin Masuk Surga",
      en: "Afraid of Death, Yet Wanting to Enter Paradise",
      ar: "تخاف الموت، وتريد دخول الجنة"
    },
    content: {
      id: `Umat Islam hari ini memiliki keinginan besar, tetapi keberanian yang kecil.
Ingin surga tertinggi, tetapi takut pada kematian yang pasti.
Ingin kemenangan Islam, tetapi gentar pada risiko sekecil apa pun.
Inilah paradoks paling memalukan dalam sejarah umat:
takut mati, tetapi ingin masuk surga.
Surga bukan hadiah gratis bagi pengecut.
Surga bukan bonus untuk orang yang ingin aman.
Surga bukan milik mereka yang hanya berani berdoa, tapi takut berjuang.

Nabi Muhammad ﷺ dan para sahabat memahami satu hukum yang hari ini dihindari umat Islam:
surga selalu dibayar dengan keberanian.

Hari ini umat Islam ingin Islam berjaya, tapi:
* tidak siap kehilangan kenyamanan,
* tidak siap kehilangan citra diri,
* tidak siap kehilangan rasa aman.

Padahal Islam tidak pernah dibangun oleh orang-orang yang ingin hidup panjang dalam kenyamanan.
Islam dibangun oleh orang-orang yang siap mati demi kebenaran.
Umat hari ini menangis ketika ada berita kematian,
tetapi lupa bahwa kematian adalah pintu satu-satunya menuju surga.
Mereka takut mati, seolah-olah kematian adalah musuh.
Padahal bagi orang beriman, kematian adalah janji pertemuan dengan Allah.

Mengapa umat Islam takut mati?
Karena dunia terlalu dicintai.
Karena akhirat terlalu jarang dipikirkan.
Karena iman tidak pernah ditempa dengan ujian nyata.
Mereka ingin pahala tanpa luka.
Ingin kemenangan tanpa pengorbanan.
Ingin surga tanpa jihad melawan hawa nafsu, ketakutan, dan kemalasan.

Padahal Nabi ﷺ tidak pernah menjanjikan surga bagi orang yang ingin aman.
Beliau menjanjikan surga bagi mereka yang menjual dunia demi akhirat.

Hari ini umat Islam sibuk memperpanjang umur,
tetapi lupa memperberat amal.
Sibuk menjaga badan,
tetapi lalai menjaga iman.
Mereka berkata, "Yang penting ibadah."
Namun ketika iman menuntut keberanian, mereka mundur.
Ketika kebenaran membutuhkan sikap, mereka diam.
Ketika Islam dihina, mereka memilih netral.

Lalu dengan penuh percaya diri berkata: "Kami ingin masuk surga."
Surga bukan milik orang yang paling banyak alasan,
tetapi milik orang yang paling siap berkorban.

Jika umat Islam masih takut mati,
maka jangan heran jika hidupnya hina.
Karena kehinaan adalah harga bagi umat yang lari dari keberanian.`,
      en: `Muslims today have great desires, but small courage.
Wanting the highest Paradise, but afraid of certain death.
Wanting the victory of Islam, but terrified of even the slightest risk.
This is the most shameful paradox in the history of the Ummah:
afraid of death, but wanting to enter Paradise.
Paradise is not a free gift for cowards.
Paradise is not a bonus for those who want to be safe.
Paradise does not belong to those who only dare to pray, but are afraid to struggle.

Prophet Muhammad ﷺ and the companions understood one law that is avoided by Muslims today:
Paradise is always paid for with courage.

Today Muslims want Islam to triumph, but:
* are not ready to lose comfort,
* are not ready to lose self-image,
* are not ready to lose the sense of security.

Yet Islam was never built by people who wanted to live long in comfort.
Islam was built by people who were ready to die for the truth.
The Ummah today cries when there is news of death,
but forgets that death is the only door to Paradise.
They fear death, as if death is an enemy.
Whereas for a believer, death is a promise of meeting with Allah.

Why are Muslims afraid of death?
Because the world is loved too much.
Because the Hereafter is too rarely thought of.
Because faith is never forged with real trials.
They want reward without wounds.
Want victory without sacrifice.
Want Paradise without jihad against lust, fear, and laziness.

Yet the Prophet ﷺ never promised Paradise to people who want to be safe.
He promised Paradise to those who sell the world for the Hereafter.

Today Muslims are busy extending life,
but forget to weigh down deeds.
Busy guarding the body,
but negligent in guarding faith.
They say, "The important thing is worship."
But when faith demands courage, they retreat.
When truth requires a stance, they remain silent.
When Islam is insulted, they choose to be neutral.

Then with full confidence say: "We want to enter Paradise."
Paradise does not belong to the person with the most excuses,
but belongs to the person most ready to sacrifice.

If Muslims are still afraid of death,
then do not be surprised if their life is humiliated.
Because humiliation is the price for a people who run away from courage.`,
      ar: `المسلمون اليوم لديهم رغبات كبيرة، لكن شجاعتهم صغيرة.
يريدون الفردوس الأعلى، لكنهم يخافون من الموت المحتوم.
يريدون نصر الإسلام، لكنهم يرتعدون من أي مخاطرة مهما كانت صغيرة.
هذه هي المفارقة الأكثر خزياً في تاريخ الأمة:
يخافون الموت، لكنهم يريدون دخول الجنة.
الجنة ليست هدية مجانية للجبناء.
الجنة ليست مكافأة لمن يريد الأمان.
الجنة ليست ملكاً لمن يجرؤ فقط على الدعاء، لكنه يخاف النضال.

النبي محمد ﷺ والصحابة فهموا قانوناً واحداً يتجنبه المسلمون اليوم:
الجنة تُدفع دائماً بالشجاعة.

اليوم يريد المسلمون أن ينتصر الإسلام، لكنهم:
* ليسوا مستعدين لفقدان الراحة،
* ليسوا مستعدين لفقدان الصورة الذاتية،
* ليسوا مستعدين لفقدان الشعور بالأمان.

ومع ذلك، لم يُبن الإسلام أبداً بأيدي أناس أرادوا العيش طويلاً في راحة.
بُني الإسلام بأيدي أناس كانوا مستعدين للموت من أجل الحق.
تبكي الأمة اليوم عند سماع أخبار الموت،
لكنها تنسى أن الموت هو الباب الوحيد إلى الجنة.
يخافون الموت، وكأن الموت عدو.
بينما بالنسبة للمؤمن، الموت هو وعد بلقاء الله.

لماذا يخاف المسلمون الموت؟
لأن الدنيا محبوبة جداً.
لأن الآخرة نادراً ما يتم التفكير فيها.
لأن الإيمان لم يُصقل أبداً باختبارات حقيقية.
يريدون الثواب بلا جراح.
يريدون النصر بلا تضحية.
يريدون الجنة بلا جهاد ضد الهوى والخوف والكسل.

ومع ذلك، لم يعد النبي ﷺ بالجنة لمن يريد الأمان.
لقد وعد بالجنة لمن يبيع الدنيا بالآخرة.

اليوم ينشغل المسلمون بإطالة العمر،
لكنهم ينسون تثقيل الأعمال.
ينشغلون بحماية الجسد،
لكنهم يغفلون عن حماية الإيمان.
يقولون: "المهم العبادة".
لكن عندما يطلب الإيمان الشجاعة، يتراجعون.
عندما تتطلب الحقيقة موقفاً، يصمتون.
عندما يُهان الإسلام، يختارون الحياد.

ثم بكل ثقة يقولون: "نريد دخول الجنة".
الجنة ليست ملكاً لمن لديه أعذار كثيرة،
بل هي ملك لمن هو أكثر استعداداً للتضحية.

إذا كان المسلمون لا يزالون يخافون الموت،
فلا تعجبوا إذا كانت حياتهم مهينة.
لأن الذل هو ثمن الأمة التي تهرب من الشجاعة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"Apakah kamu mengira akan masuk surga, padahal belum datang kepadamu cobaan sebagaimana yang dialami orang-orang sebelum kamu? Mereka ditimpa kesengsaraan dan penderitaan serta diguncangkan (dengan berbagai cobaan), sehingga Rasul dan orang-orang yang beriman bersamanya berkata: 'Kapankah datang pertolongan Allah?' Ingatlah, sesungguhnya pertolongan Allah itu dekat."</strong><br>
      (QS. Al-Baqarah: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"Apakah kamu mengira bahwa kamu akan masuk surga, padahal Allah belum mengetahui (dalam kenyataan) orang-orang yang berjihad di antara kamu dan belum mengetahui orang-orang yang sabar?"</strong><br>
      (QS. Ali 'Imran: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَالَهُم بِأَنَّ لَهُمُ الْجَنَّةَ ۚ يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ ۖ وَعْدًا عَلَيْهِ حَقًّا فِي التَّوْرَاةِ وَالْإِنجِيلِ وَالْقُرْآنِ</div>
      <p style="text-align: center;"><strong>"Sesungguhnya Allah telah membeli dari orang-orang mukmin diri dan harta mereka dengan memberikan surga untuk mereka. Mereka berperang di jalan Allah; lalu mereka membunuh atau terbunuh. (Itu telah menjadi) janji yang benar dari Allah dalam Taurat, Injil, dan Al-Qur'an."</strong><br>
      (QS. At-Taubah: 111)</p>
      <br>
      <p style="text-align: center;"><strong>"Ketahuilah, sesungguhnya barang dagangan Allah itu mahal. Ketahuilah, sesungguhnya barang dagangan Allah adalah surga."</strong><br>
      (HR. Tirmidzi - hasan shahih)</p>
      <br>
      <p style="text-align: center;"><strong>"Barang siapa yang mati dan belum pernah berjihad serta tidak pernah terbersit dalam hatinya untuk berjihad, maka ia mati di atas satu cabang kemunafikan."</strong><br>
      (HR. Muslim - shahih)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"Or do you think that you will enter Paradise while such [trial] has not yet come to you as came to those who passed on before you? They were touched by poverty and hardship and were shaken until [even their] messenger and those who believed with him said, 'When is the help of Allah?' Unquestionably, the help of Allah is near."</strong><br>
      (QS. Al-Baqarah: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"Or do you think that you will enter Paradise while Allah has not yet made evident those of you who fight in His cause and made evident those who are steadfast?"</strong><br>
      (QS. Ali 'Imran: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَالَهُم بِأَنَّ لَهُمُ الْجَنَّةَ ۚ يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ ۖ وَعْدًا عَلَيْهِ حَقًّا فِي التَّوْرَاةِ وَالْإِنجِيلِ وَالْقُرْآنِ</div>
      <p style="text-align: center;"><strong>"Indeed, Allah has purchased from the believers their lives and their properties [in exchange] for that they will have Paradise. They fight in the cause of Allah, so they kill and are killed. [It is] a true promise binding upon Him in the Torah and the Gospel and the Qur'an."</strong><br>
      (QS. At-Taubah: 111)</p>
      <br>
      <p style="text-align: center;"><strong>"Ketahuilah, sesungguhnya barang dagangan Allah itu mahal. Ketahuilah, sesungguhnya barang dagangan Allah adalah surga."</strong><br>
      (HR. Tirmidzi)</p>
      <br>
      <p style="text-align: center;"><strong>"Whoever dies without having fought in the way of Allah nor did he express any desire (or determination) for Jihâd, has died upon a branch of hypocrisy."</strong><br>
      (HR. Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَأْتِكُم مَّثَلُ الَّذِينَ خَلَوْا مِن قَبْلِكُم ۖ مَّسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ وَزُلْزِلُوا حَتَّىٰ يَقُولَ الرَّسُولُ وَالَّذِينَ آمَنُوا مَعَهُ مَتَىٰ نَصْرُ اللَّهِ ۗ أَلَا إِنَّ نَصْرَ اللَّهِ قَرِيبٌ</div>
      <p style="text-align: center;"><strong>"أم حسبتم أن تدخلوا الجنة ولما يأتكم مثل الذين خلوا من قبلكم مستهم البأساء والضراء وزلزلوا حتى يقول الرسول والذين آمنوا معه متى نصر الله ألا إن نصر الله قريب."</strong><br>
      (سورة البقرة: 214)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أَمْ حَسِبْتُمْ أَن تَدْخُلُوا الْجَنَّةَ وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ وَيَعْلَمَ الصَّابِرِينَ</div>
      <p style="text-align: center;"><strong>"أم حسبتم أن تدخلوا الجنة ولما يعلم الله الذين جاهدوا منكم ويعلم الصابرين."</strong><br>
      (سورة آل عمران: 142)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّ اللَّهَ اشْتَرَىٰ مِنَ الْمُؤْمِنِينَ أَنفُسَهُمْ وَأَمْوَالَهُم بِأَنَّ لَهُمُ الْجَنَّةَ ۚ يُقَاتِلُونَ فِي سَبِيلِ اللَّهِ فَيَقْتُلُونَ وَيُقْتَلُونَ ۖ وَعْدًا عَلَيْهِ حَقًّا فِي التَّوْرَاةِ وَالْإِنجِيلِ وَالْقُرْآنِ</div>
      <p style="text-align: center;"><strong>"إن الله اشترى من المؤمنين أنفسهم وأموالهم بأن لهم الجنة يقاتلون في سبيل الله فيقتلون ويقتلون وعدا عليه حقا في التوراة والإنجيل والقرآن."</strong><br>
      (سورة التوبة: 111)</p>
      <br>
      <p style="text-align: center;"><strong>"ألا إن سلعة الله غالية، ألا إن سلعة الله الجنة."</strong><br>
      (رواه الترمذي - حسن صحيح)</p>
      <br>
      <p style="text-align: center;"><strong>"من مات ولم يغز، ولم يحدث به نفسه، مات على شعبة من نفاق."</strong><br>
      (رواه مسلم - صحيح)</p>`
    }
  },
  {
    id: "15",
    title: {
      id: "Mengapa Umat Islam Takut Mati Tapi Tak Takut Neraka",
      en: "Why Do Muslims Fear Death But Not Hellfire?",
      ar: "لماذا يخاف المسلمون الموت لكن لا يخافون النار"
    },
    content: {
      id: `Ada ketakutan yang aneh di tubuh umat Islam hari ini.
Takut mati—padahal mati adalah kepastian.
Namun tidak takut neraka—padahal ancamannya jauh lebih mengerikan.
Umat Islam gemetar ketika berbicara tentang kematian.
Takut kehilangan dunia.
Takut kehilangan jabatan.
Takut kehilangan harta, kenyamanan, dan nama baik.
Tetapi ketika neraka disebut, reaksi mereka datar.
Seolah neraka hanya metafora.
Seolah ancaman Allah sekadar ilustrasi untuk anak kecil.
Inilah ironi iman zaman ini:
takut pada sesuatu yang pasti, tapi meremehkan sesuatu yang abadi.
Mati hanya memisahkan ruh dari jasad.
Namun neraka menghancurkan seluruh harapan.
Mati adalah pintu.
Neraka adalah hukuman.
Tetapi umat Islam hari ini lebih sibuk menghindari pintu,
daripada takut terhadap hukuman di balik kelalaian mereka.

Mengapa umat Islam takut mati?
Karena dunia terlalu dicintai.
Mengapa tidak takut neraka?
Karena iman terlalu dangkal.
Orang yang benar-benar takut neraka tidak akan santai terhadap maksiat.
Tidak akan damai melihat hukum Allah ditinggalkan.
Tidak akan tenang hidup di tengah kebatilan sambil berkata,
"Yang penting hati baik."

Nabi ﷺ dan para sahabat justru membalik logika kita hari ini.
Mereka tidak takut mati.
Yang mereka takuti adalah mati dalam keadaan Allah murka.
Hari ini umat Islam takut mati miskin.
Takut mati tidak dihormati.
Takut mati tidak punya warisan.
Tetapi tidak takut mati:
* meninggalkan kewajiban amar ma’ruf nahi munkar,
* membiarkan kezaliman merajalela,
* hidup tanpa memperjuangkan tegaknya Islam.

Umat Islam menangis ketika ada kematian,
tetapi tidak menangis melihat neraka dipermudah dalam ceramah-ceramah.
Neraka digambarkan ringan.
Dosa disebut "khilaf."
Maksiat disebut "ujian."
Ketakutan diganti dengan motivasi palsu.
Padahal para salaf menangis bukan karena takut mati,
tetapi karena takut tidak diterima amalnya.

Hari ini umat Islam berkata,
"Kami belum siap mati."
Padahal yang lebih berbahaya adalah:
tidak siap bertemu Allah.
Jika seseorang benar-benar takut neraka,
ia akan berani melawan hawa nafsunya.
Ia akan berani kehilangan dunia.
Ia akan berani memikul risiko kebenaran.

Takut mati membuat umat Islam bersembunyi.
Takut neraka akan membuat umat Islam bangkit.
Selama umat Islam masih lebih takut kehilangan dunia
daripada takut api neraka,
maka kehinaan akan terus melekat pada hidup mereka.
Karena kehinaan bukan datang dari musuh,
tetapi dari ketakutan yang salah arah.`,
      en: `There is a strange fear in the body of Muslims today.
Fear of death—even though death is a certainty.
But not fear of Hell—even though its threat is far more terrifying.
Muslims tremble when speaking of death.
Fear of losing the world.
Fear of losing position.
Fear of losing wealth, comfort, and good name.
But when Hell is mentioned, their reaction is flat.
As if Hell is just a metaphor.
As if Allah's threat is merely an illustration for small children.
This is the irony of faith in this age:
fearing something certain, but underestimating something eternal.
Death only separates the soul from the body.
But Hell destroys all hope.
Death is a door.
Hell is a punishment.
But Muslims today are busier avoiding the door,
than fearing the punishment behind their negligence.

Why do Muslims fear death?
Because the world is loved too much.
Why not fear Hell?
Because faith is too shallow.
A person who truly fears Hell will not be relaxed about sin.
Will not be at peace seeing Allah's laws abandoned.
Will not be calm living amidst falsehood while saying,
"The important thing is a good heart."

The Prophet ﷺ and the companions reversed our logic today.
They did not fear death.
What they feared was dying while Allah is angry.
Today Muslims fear dying poor.
Fear dying unrespected.
Fear dying without inheritance.
But do not fear dying:
* leaving the duty of amar ma'ruf nahi munkar,
* allowing tyranny to run rampant,
* living without striving for the establishment of Islam.

Muslims cry when there is a death,
but do not cry seeing Hell made light of in lectures.
Hell is portrayed as light.
Sin is called a "mistake."
Immorality is called a "test."
Fear is replaced with false motivation.
Whereas the predecessors cried not because they feared death,
but because they feared their deeds would not be accepted.

Today Muslims say,
"We are not ready to die."
Whereas what is more dangerous is:
not ready to meet Allah.
If someone truly fears Hell,
he will dare to fight his desires.
He will dare to lose the world.
He will dare to bear the risk of truth.

Fear of death makes Muslims hide.
Fear of Hell will make Muslims rise.
As long as Muslims still fear losing the world more
than fearing the fire of Hell,
then humiliation will continue to cling to their lives.
Because humiliation does not come from the enemy,
but from misplaced fear.`,
      ar: `هناك خوف غريب في جسد الأمة الإسلامية اليوم.
خوف من الموت - رغم أن الموت يقين.
لكن لا خوف من النار - رغم أن تهديدها أفظع بكثير.
يرتعد المسلمون عندما يتحدثون عن الموت.
خوف من فقدان الدنيا.
خوف من فقدان المنصب.
خوف من فقدان المال والراحة والسمعة.
لكن عندما تُذكر النار، يكون رد فعلهم فاتراً.
وكأن النار مجرد استعارة.
وكأن تهديد الله مجرد توضيح للأطفال الصغار.
هذه هي مفارقة الإيمان في هذا العصر:
الخوف من شيء مؤكد، والاستهانة بشيء أبدي.
الموت يفصل الروح عن الجسد فقط.
لكن النار تدمر كل أمل.
الموت باب.
والنار عقاب.
لكن المسلمين اليوم مشغولون بتجنب الباب أكثر
من الخوف من العقاب خلف غفلتهم.

لماذا يخاف المسلمون الموت؟
لأن الدنيا محبوبة جداً.
لماذا لا يخافون النار؟
لأن الإيمان ضحل جداً.
الشخص الذي يخاف النار حقاً لن يتساهل مع المعصية.
لن يكون مرتاحاً لرؤية شرع الله متروكاً.
لن يهدأ عيشه وسط الباطل وهو يقول:
"المهم أن القلب طيب".

النبي ﷺ والصحابة عكسوا منطقنا اليوم.
لم يكونوا يخافون الموت.
ما كانوا يخافونه هو الموت والله غاضب عليهم.
اليوم يخاف المسلمون أن يموتوا فقراء.
يخافون أن يموتوا غير محترمين.
يخافون أن يموتوا بلا ميراث.
لكنهم لا يخافون أن يموتوا:
* تاركين واجب الأمر بالمعروف والنهي عن المنكر،
* تاركين الظلم يستفحل،
* عائشين دون الكفاح من أجل إقامة الإسلام.

يبكي المسلمون عند حدوث وفاة،
لكنهم لا يبكون عند رؤية النار تُستهان في المحاضرات.
تُصور النار خفيفة.
يُسمى الذنب "زلة".
تُسمى المعصية "ابتلاء".
يُستبدل الخوف بتحفيز زائف.
بينما السلف لم يبكوا خوفاً من الموت،
بل خوفاً من عدم قبول أعمالهم.

اليوم يقول المسلمون:
"نحن لسنا مستعدين للموت".
بينما الأخطر هو:
عدم الاستعداد للقاء الله.
إذا كان المرء يخاف النار حقاً،
فسيجرؤ على محاربة هواه.
سيجرؤ على فقدان الدنيا.
سيجرؤ على تحمل مخاطر الحق.

الخوف من الموت يجعل المسلمين يختبئون.
الخوف من النار سيجعل المسلمين ينهضون.
طالما أن المسلمين يخافون فقدان الدنيا أكثر
من خوفهم من نار جهنم،
فإن الذل سيظل ملازماً لحياتهم.
لأن الذل لا يأتي من العدو،
بل من الخوف في غير محله.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ</div>
      <p style="text-align: center;"><strong>"Dan kehidupan dunia ini tidak lain hanyalah permainan dan senda gurau. Dan sesungguhnya negeri akhirat itulah kehidupan yang sebenarnya, sekiranya mereka mengetahui."</strong><br>
      (QS. Al-Ankabut: 64)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنصَرُونَ</div>
      <p style="text-align: center;"><strong>"Mereka itulah orang-orang yang membeli kehidupan dunia dengan (kehidupan) akhirat. Maka tidak akan diringankan azab dari mereka dan mereka tidak akan ditolong."</strong><br>
      (QS. Al-Baqarah: 86)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ * لَتَرَوُنَّ الْجَحِيمَ</div>
      <p style="text-align: center;"><strong>"Sekali-kali tidak! Sekiranya kamu mengetahui dengan pasti, niscaya kamu benar-benar akan melihat neraka Jahim."</strong><br>
      (QS. At-Takatsur: 5-6)</p>
      <br>
      <p style="text-align: center;"><strong>"Seandainya kalian mengetahui apa yang aku ketahui, niscaya kalian akan sedikit tertawa dan banyak menangis."</strong><br>
      (HR. Bukhari dan Muslim)</p>
      <br>
      <p style="text-align: center;"><strong>"Api neraka yang dinyalakan oleh anak Adam ini hanyalah satu bagian dari tujuh puluh bagian api neraka Jahannam."</strong><br>
      (HR. Bukhari dan Muslim)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ</div>
      <p style="text-align: center;"><strong>"And this worldly life is not but diversion and amusement. And indeed, the home of the Hereafter - that is the [eternal] life, if only they knew."</strong><br>
      (QS. Al-Ankabut: 64)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنصَرُونَ</div>
      <p style="text-align: center;"><strong>"Those are the ones who have bought the life of this world [in exchange] for the Hereafter, so the punishment will not be lightened for them, nor will they be aided."</strong><br>
      (QS. Al-Baqarah: 86)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ * لَتَرَوُنَّ الْجَحِيمَ</div>
      <p style="text-align: center;"><strong>"No! If you only knew with knowledge of certainty... You will surely see the Hellfire."</strong><br>
      (QS. At-Takatsur: 5-6)</p>
      <br>
      <p style="text-align: center;"><strong>"If you knew what I know, you would laugh little and weep much."</strong><br>
      (HR. Bukhari and Muslim)</p>
      <br>
      <p style="text-align: center;"><strong>"This fire of yours, which the sons of Adam kindle, is but one part of seventy parts of the fire of Hell."</strong><br>
      (HR. Bukhari and Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا هَٰذِهِ الْحَيَاةُ الدُّنْيَا إِلَّا لَهْوٌ وَلَعِبٌ ۚ وَإِنَّ الدَّارَ الْآخِرَةَ لَهِيَ الْحَيَوَانُ ۚ لَوْ كَانُوا يَعْلَمُونَ</div>
      <p style="text-align: center;"><strong>"وما هذه الحياة الدنيا إلا لهو ولعب وإن الدار الآخرة لهي الحيوان لو كانوا يعلمون."</strong><br>
      (سورة العنكبوت: 64)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">أُولَٰئِكَ الَّذِينَ اشْتَرَوُا الْحَيَاةَ الدُّنْيَا بِالْآخِرَةِ ۖ فَلَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ وَلَا هُمْ يُنصَرُونَ</div>
      <p style="text-align: center;"><strong>"أولئك الذين اشتروا الحياة الدنيا بالآخرة فلا يخفف عنهم العذاب ولا هم ينصرون."</strong><br>
      (سورة البقرة: 86)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">كَلَّا لَوْ تَعْلَمُونَ عِلْمَ الْيَقِينِ * لَتَرَوُنَّ الْجَحِيمَ</div>
      <p style="text-align: center;"><strong>"كلا لو تعلمون علم اليقين لترون الجحيم."</strong><br>
      (سورة التكاثر: 5-6)</p>
      <br>
      <p style="text-align: center;"><strong>"لو تعلمون ما أعلم لضحكتم قليلاً ولبكيتم كثيراً."</strong><br>
      (رواه البخاري ومسلم - صحيح)</p>
      <br>
      <p style="text-align: center;"><strong>"ناركم جزء من سبعين جزءاً من نار جهنم."</strong><br>
      (رواه البخاري ومسلم - صحيح)</p>`
    }
  },
  {
    id: "16",
    title: {
      id: "Ketika Islam Dipisahkan dari Kehidupan, Lalu Disebut Rahmat",
      en: "When Islam Is Separated from Life, Then Called Mercy",
      ar: "عندما يفصل الإسلام عن الحياة ثم يسمى رحمة"
    },
    content: {
      id: `Hari ini Islam sering disebut rahmat,
tetapi dijauhkan dari kehidupan.
Islam dipuji dengan kata-kata indah,
namun ditolak ketika ingin mengatur.
Dihormati di mimbar,
namun dicurigai ketika menyentuh hukum, ekonomi, dan kekuasaan.
Inilah tragedi besar umat Islam modern:
Islam dipisahkan dari kehidupan, lalu dengan santai disebut rahmat.
Islam hanya diizinkan hidup di masjid.
Hanya boleh hadir dalam doa.
Hanya aman jika tidak menuntut perubahan.
Begitu Islam berbicara tentang keadilan hukum,
ia disebut keras.
Begitu Islam menyentuh ekonomi,
ia dituduh kuno.
Begitu Islam menyentuh kekuasaan,
ia dianggap ancaman.
Lalu umat Islam bertepuk tangan dan berkata,
"Inilah Islam yang damai."
Padahal Islam tidak pernah datang untuk menjadi hiasan.
Islam datang untuk memimpin kehidupan.
Islam bukan sekadar penghibur hati,
tetapi penentu arah peradaban.
Bukan hanya menenangkan jiwa,
tetapi menegakkan keadilan.
Ketika Islam dijauhkan dari kehidupan,
yang tersisa hanyalah ritual tanpa daya.
Ibadah tanpa keberanian.
Ilmu tanpa pengaruh.
Ulama tanpa posisi.
Islam lalu berubah menjadi sekadar identitas,
bukan sistem.
Menjadi simbol,
bukan solusi.
Umat Islam hari ini bangga berkata,
"Islam rahmatan lil 'alamin,"
namun takut jika rahmat itu benar-benar mengatur hidup.
Padahal rahmat Islam bukan karena ia lembut,
tetapi karena ia adil.
Bukan karena ia diam,
tetapi karena ia tegas.
Islam menjadi rahmat justru ketika ia:
* menghapus kezaliman,
* membongkar sistem rusak,
* mengoreksi kekuasaan,
* dan menundukkan hawa nafsu manusia.
Ketika Islam dipisahkan dari kehidupan,
yang muncul justru kekacauan.
Hukum manusia saling bertabrakan.
Moral ditentukan selera.
Keadilan ditentukan kekuatan.
Namun anehnya, umat Islam justru merasa aman.
Selama masjid berdiri.
Selama kajian berjalan.
Selama ritual hidup.
Padahal Islam tidak pernah diajarkan untuk hidup setengah-setengah.
Tidak pernah diajarkan untuk menjadi tamu di rumah sendiri.
Nabi ﷺ tidak memisahkan Islam dari kehidupan.
Beliau membangun masyarakat.
Menegakkan hukum.
Mengatur ekonomi.
Memimpin negara.
Tetapi umat hari ini memisahkan Islam,
lalu heran mengapa umat ini lemah.
Islam tidak menjadi rahmat karena dijinakkan.
Islam menjadi rahmat karena ditaati sepenuhnya.
Selama Islam hanya dijadikan slogan,
dan kehidupan diatur selain dengan Islam,
maka kehinaan akan terus menyertai umat ini.
Karena Islam yang dipisahkan dari kehidupan
bukanlah rahmat,
melainkan pengkhianatan yang dibungkus kata-kata manis.`,
      en: `Today Islam is often called a mercy,
but kept away from life.
Islam is praised with beautiful words,
but rejected when it wants to rule.
Respected in the pulpit,
but suspected when touching law, economy, and power.
This is the great tragedy of modern Muslims:
Islam is separated from life, then casually called mercy.
Islam is only allowed to live in the mosque.
Only allowed to be present in prayer.
Only safe if it does not demand change.
As soon as Islam speaks of legal justice,
it is called harsh.
As soon as Islam touches the economy,
it is accused of being ancient.
As soon as Islam touches power,
it is considered a threat.
Then Muslims clap and say,
"This is peaceful Islam."
Whereas Islam never came to be a decoration.
Islam came to lead life.
Islam is not just a comforter of the heart,
but a determinant of the direction of civilization.
Not only calming the soul,
but upholding justice.
When Islam is kept away from life,
what remains is only powerless ritual.
Worship without courage.
Knowledge without influence.
Scholars without position.
Islam then turns into merely an identity,
not a system.
Becoming a symbol,
not a solution.
Muslims today are proud to say,
"Islam is a mercy to the worlds,"
but afraid if that mercy truly regulates life.
Whereas the mercy of Islam is not because it is soft,
but because it is just.
Not because it is silent,
but because it is firm.
Islam becomes a mercy precisely when it:
* removes injustice,
* dismantles broken systems,
* corrects power,
* and subdues human desires.
When Islam is separated from life,
what emerges is chaos.
Human laws collide with each other.
Morality is determined by taste.
Justice is determined by strength.
But strangely, Muslims feel safe.
As long as the mosque stands.
As long as the study circle runs.
As long as the ritual lives.
Whereas Islam was never taught to live half-heartedly.
Never taught to be a guest in its own home.
The Prophet ﷺ did not separate Islam from life.
He built a society.
Enforced the law.
Regulated the economy.
Led the state.
But the Ummah today separates Islam,
then wonders why this Ummah is weak.
Islam does not become a mercy because it is tamed.
Islam becomes a mercy because it is obeyed completely.
As long as Islam is only made a slogan,
and life is regulated other than by Islam,
then humiliation will continue to accompany this Ummah.
Because Islam separated from life
is not a mercy,
but a betrayal wrapped in sweet words.`,
      ar: `اليوم يوصف الإسلام غالباً بأنه رحمة،
لكنه يُبعد عن الحياة.
يُمدح الإسلام بكلمات جميلة،
لكنه يُرفض عندما يريد أن يحكم.
يُحترم في المنابر،
لكنه يُشتبه به عندما يمس القانون والاقتصاد والسلطة.
هذه هي المأساة الكبرى للمسلمين المعاصرين:
يُفصل الإسلام عن الحياة، ثم يوصف ببساطة بأنه رحمة.
يُسمح للإسلام بالعيش فقط في المسجد.
يُسمح له بالحضور فقط في الدعاء.
يكون آمناً فقط إذا لم يطالب بالتغيير.
بمجرد أن يتحدث الإسلام عن العدالة القانونية،
يوصف بأنه قاسٍ.
بمجرد أن يمس الإسلام الاقتصاد،
يتهم بأنه قديم.
بمجرد أن يمس الإسلام السلطة،
يعتبر تهديداً.
ثم يصفق المسلمون ويقولون:
"هذا هو الإسلام السلمي".
بينما لم يأت الإسلام أبداً ليكون زينة.
جاء الإسلام ليقود الحياة.
الإسلام ليس مجرد معزي للقلب،
بل هو محدد لاتجاه الحضارة.
ليس فقط لتهدئة النفس،
بل لإقامة العدل.
عندما يُبعد الإسلام عن الحياة،
لا يتبقى سوى طقوس بلا قوة.
عبادة بلا شجاعة.
علم بلا تأثير.
علماء بلا مكانة.
يتحول الإسلام حينها إلى مجرد هوية،
وليس نظاماً.
يصبح رمزاً،
وليس حلاً.
يفتخر المسلمون اليوم بقولهم:
"الإسلام رحمة للعالمين"،
لكنهم يخافون إذا كانت تلك الرحمة تنظم الحياة حقاً.
بينما رحمة الإسلام ليست لأنه ناعم،
بل لأنه عادل.
ليس لأنه صامت،
بل لأنه حازم.
يصبح الإسلام رحمة بالضبط عندما:
* يزيل الظلم،
* يفكك الأنظمة الفاسدة،
* يصحح السلطة،
* ويخضع أهواء البشر.
عندما يُفصل الإسلام عن الحياة،
تظهر الفوضى.
تتضارب قوانين البشر.
تتحدد الأخلاق بالهوى.
تتحدد العدالة بالقوة.
لكن الغريب أن المسلمين يشعرون بالأمان.
طالما أن المسجد قائم.
طالما أن الدروس مستمرة.
طالما أن الطقوس حية.
بينما لم يُعلم الإسلام أبداً ليعيش بنصف قلب.
لم يُعلم ليكون ضيفاً في بيته.
النبي ﷺ لم يفصل الإسلام عن الحياة.
بنى مجتمعاً.
أقام القانون.
نظم الاقتصاد.
قاد الدولة.
لكن الأمة اليوم تفصل الإسلام،
ثم تتعجب لماذا هذه الأمة ضعيفة.
لا يصبح الإسلام رحمة لأنه مروض.
يصبح الإسلام رحمة لأنه يطاع بالكامل.
طالما أن الإسلام مجرد شعار،
والحياة تنظم بغير الإسلام،
فإن الذل سيظل ملازماً لهذه الأمة.
لأن الإسلام المفصول عن الحياة
ليس رحمة،
بل خيانة مغلفة بكلمات حلوة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ</div>
      <p style="text-align: center;"><strong>"Wahai orang-orang yang beriman! Masuklah kamu ke dalam Islam secara keseluruhan, dan janganlah kamu mengikuti langkah-langkah setan. Sesungguhnya setan itu musuh yang nyata bagimu."</strong><br>
      (QS. Al-Baqarah: 208)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْكَافِرُونَ</div>
      <p style="text-align: center;"><strong>"Barang siapa tidak memutuskan perkara menurut apa yang diturunkan Allah, maka mereka itulah orang-orang kafir."</strong><br>
      (QS. Al-Ma'idah: 44)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ</div>
      <p style="text-align: center;"><strong>"Dan tidaklah patut bagi seorang mukmin dan mukminah, apabila Allah dan Rasul-Nya telah menetapkan suatu ketetapan, masih ada pilihan lain bagi mereka tentang urusan mereka."</strong><br>
      (QS. Al-Ahzab: 36)</p>
      <br>
      <p style="text-align: center;"><strong>"Aku tinggalkan kepada kalian dua perkara; kalian tidak akan tersesat selama berpegang teguh kepada keduanya: Kitab Allah dan Sunnah Rasul-Nya."</strong><br>
      (HR. Malik, al-Hakim)</p>
      <br>
      <p style="text-align: center;"><strong>"Akan datang suatu zaman di mana manusia memegang Al-Qur'an, namun Al-Qur'an melaknat mereka."</strong><br>
      (HR. Thabrani)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ</div>
      <p style="text-align: center;"><strong>"O you who have believed, enter into Islam completely [and perfectly] and do not follow the footsteps of Satan. Indeed, he is to you a clear enemy."</strong><br>
      (QS. Al-Baqarah: 208)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْكَافِرُونَ</div>
      <p style="text-align: center;"><strong>"And whoever does not judge by what Allah has revealed - then it is those who are the disbelievers."</strong><br>
      (QS. Al-Ma'idah: 44)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ</div>
      <p style="text-align: center;"><strong>"It is not for a believing man or a believing woman, when Allah and His Messenger have decided a matter, that they should [thereafter] have any choice about their affair."</strong><br>
      (QS. Al-Ahzab: 36)</p>
      <br>
      <p style="text-align: center;"><strong>"I have left you two things which, if you hold fast to them, you will never go astray: the Book of Allah and the Sunnah of His Prophet."</strong><br>
      (HR. Malik, al-Hakim)</p>
      <br>
      <p style="text-align: center;"><strong>"There will come a time upon my Ummah when they recite the Qur'an, but the Qur'an curses them."</strong><br>
      (HR. Thabrani)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا ادْخُلُوا فِي السِّلْمِ كَافَّةً وَلَا تَتَّبِعُوا خُطُوَاتِ الشَّيْطَانِ ۚ إِنَّهُ لَكُمْ عَدُوٌّ مُّبِينٌ</div>
      <p style="text-align: center;"><strong>"يا أيها الذين آمنوا ادخلوا في السلم كافة ولا تتبعوا خطوات الشيطان إنه لكم عدو مبين."</strong><br>
      (سورة البقرة: 208)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن لَّمْ يَحْكُم بِمَا أَنزَلَ اللَّهُ فَأُولَٰئِكَ هُمُ الْكَافِرُونَ</div>
      <p style="text-align: center;"><strong>"ومن لم يحكم بما أنزل الله فأولئك هم الكافرون."</strong><br>
      (سورة المائدة: 44)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ</div>
      <p style="text-align: center;"><strong>"وما كان لمؤمن ولا مؤمنة إذا قضى الله ورسوله أمرا أن يكون لهم الخيرة من أمرهم."</strong><br>
      (سورة الأحزاب: 36)</p>
      <br>
      <p style="text-align: center;"><strong>"تركت فيكم أمرين لن تضلوا ما تمسكتم بهما: كتاب الله وسنة نبيه."</strong><br>
      (رواه مالك والحاكم - صحيح)</p>
      <br>
      <p style="text-align: center;"><strong>"سيأتي زمان على أمتي يقرءون القرآن والقرآن يلعنهم."</strong><br>
      (رواه الطبراني - حسن)</p>`
    }
  },
  {
    id: "17",
    title: {
      id: "Islam Dijaga oleh Allah, Tapi Umatnya Tidak Menjaganya",
      en: "Islam is Protected by Allah, But Its People Do Not Protect It",
      ar: "الإسلام محفوظ من الله، لكن أهله لا يحفظونه"
    },
    content: {
      id: `Islam adalah agama yang dijaga oleh Allah.
Tetapi umat Islam hari ini justru sibuk menjaga diri mereka sendiri.
Menjaga kenyamanan.
Menjaga posisi.
Menjaga citra.
Menjaga keamanan pribadi.
Sementara Islam dibiarkan diserang, dipelintir, dan dikerdilkan...
dengan alasan yang terdengar religius: "Tenang saja, Islam kan dijaga Allah."
Kalimat ini benar secara akidah,
tetapi berbahaya jika dijadikan alasan untuk lari dari tanggung jawab.
Allah memang menjaga Islam,
tetapi Allah tidak pernah membebaskan umat dari kewajiban menjaganya.
Nabi Muhammad ﷺ tidak duduk tenang di Makkah sambil berkata,
"Islam pasti menang, Allah yang jaga."
Beliau dihina, disakiti, diboikot,
namun tetap berdiri menjaga risalah.
Ketika Abu Lahab mencaci, Nabi ﷺ tidak berhenti berdakwah.
Ketika kaum Quraisy menyiksa Bilal, Rasulullah ﷺ tidak menenangkan diri dengan dalih takdir.
Beliau membina, menguatkan, dan mempersiapkan umat.
Lihat Abu Bakar radhiyallahu 'anhu.
Saat Rasulullah ﷺ wafat, umat terguncang.
Banyak yang berkata, "Islam akan runtuh."
Abu Bakar berdiri dan berkata dengan tegas:
"Barang siapa menyembah Muhammad, maka Muhammad telah wafat.
Barang siapa menyembah Allah, maka Allah Maha Hidup dan tidak akan mati."
Kalimat ini bukan retorika.
Ini adalah penjagaan akidah di saat paling genting.
Ketika muncul kaum yang enggan menunaikan zakat,
banyak sahabat ragu untuk bertindak.
Mereka berkata, "Ini hanya soal harta."
Namun Abu Bakar menjawab dengan keras:
"Demi Allah, aku akan memerangi siapa pun yang memisahkan antara shalat dan zakat."
Ia tahu, jika satu syariat ditinggalkan,
maka Islam akan runtuh perlahan.
Umar bin Khattab radhiyallahu 'anhu menangis ketika melihat keadilan dilanggar.
Ia memukul dirinya sendiri jika lalai.
Ia berkata, "Jika seekor keledai terjatuh di Irak, aku khawatir Allah akan menanyai Umar."
Beginilah cara para Sahabat menjaga Islam:
bukan dengan diam,
tetapi dengan rasa takut kepada Allah.
Bandingkan dengan umat hari ini.
Islam dihina... diam.
Hukum Allah ditinggalkan... tenang.
Syariat dipermainkan... netral.
Lalu berkata,
"Tidak apa-apa, Islam tetap terjaga."
Islam memang tidak akan hilang.
Tetapi umat yang tidak menjaganya akan tergantikan.
Allah tidak butuh umat yang pengecut.
Allah tidak membutuhkan pembela yang setengah hati.
Allah hanya menggunakan mereka yang siap membayar harga.
Menjaga Islam bukan dengan kekerasan sembarangan,
tetapi dengan:
* keberanian bersikap,
* konsistensi pada kebenaran,
* dan kesetiaan pada syariat meski pahit.
Islam dijaga oleh Allah,
tetapi kehormatan umat dijaga oleh ketaatan mereka sendiri.
Jika umat terus bersembunyi di balik dalih "Allah yang jaga Islam,"
sementara mereka meninggalkan amanah,
maka jangan heran jika Islam tetap mulia,
tetapi umatnya hina.`,
      en: `Islam is a religion protected by Allah.
But Muslims today are busy protecting themselves.
Protecting comfort.
Protecting positions.
Protecting image.
Protecting personal safety.
While Islam is left to be attacked, twisted, and belittled...
with a reason that sounds religious: "Relax, Islam is protected by Allah."
This sentence is doctrinally correct,
but dangerous if used as an excuse to run from responsibility.
Allah indeed protects Islam,
but Allah never exempted the Ummah from the obligation to protect it.
Prophet Muhammad ﷺ did not sit quietly in Mecca saying,
"Islam will surely win, Allah protects it."
He was insulted, hurt, boycotted,
yet stood firm protecting the message.
When Abu Lahab cursed, the Prophet ﷺ did not stop preaching.
When the Quraysh tortured Bilal, the Messenger of Allah ﷺ did not calm himself with the excuse of destiny.
He built, strengthened, and prepared the Ummah.
Look at Abu Bakr radhiyallahu 'anhu.
When the Messenger of Allah ﷺ passed away, the Ummah was shaken.
Many said, "Islam will collapse."
Abu Bakr stood and said firmly:
"Whoever worships Muhammad, then Muhammad has died.
Whoever worships Allah, then Allah is Ever-Living and will not die."
This sentence was not rhetoric.
It was the protection of creed at the most critical moment.
When a group appeared refusing to pay zakat,
many companions hesitated to act.
They said, "This is only about wealth."
But Abu Bakr answered harshly:
"By Allah, I will fight anyone who separates prayer and zakat."
He knew, if one Sharia is abandoned,
then Islam will collapse slowly.
Umar bin Khattab radhiyallahu 'anhu cried when he saw justice violated.
He hit himself if he was negligent.
He said, "If a donkey stumbles in Iraq, I fear Allah will question Umar."
This is how the Companions protected Islam:
not by silence,
but by fear of Allah.
Compare with the Ummah today.
Islam is insulted... silence.
Allah's law is abandoned... calm.
Sharia is played with... neutral.
Then say,
"It's okay, Islam remains protected."
Islam indeed will not disappear.
But the Ummah that does not protect it will be replaced.
Allah does not need a cowardly Ummah.
Allah does not need half-hearted defenders.
Allah only uses those who are ready to pay the price.
Protecting Islam is not with indiscriminate violence,
but with:
* courage to take a stand,
* consistency in truth,
* and loyalty to Sharia even if bitter.
Islam is protected by Allah,
but the honor of the Ummah is protected by their own obedience.
If the Ummah continues to hide behind the excuse "Allah protects Islam,"
while they abandon the trust,
then do not be surprised if Islam remains noble,
but its people are humiliated.`,
      ar: `الإسلام دين محفوظ من الله.
لكن المسلمين اليوم مشغولون بحماية أنفسهم.
حماية الراحة.
حماية المناصب.
حماية الصورة.
حماية السلامة الشخصية.
بينما يُترك الإسلام ليُهاجم، ويُحرف، ويُقزم...
بحجة تبدو دينية: "اطمئن، الإسلام يحفظه الله".
هذه الجملة صحيحة عقائدياً،
لكنها خطيرة إذا اتخذت ذريعة للهروب من المسؤولية.
الله يحفظ الإسلام فعلاً،
لكن الله لم يعف الأمة أبداً من واجب حمايته.
النبي محمد ﷺ لم يجلس هادئاً في مكة ويقول:
"الإسلام سينتصر بالتأكيد، الله يحفظه".
لقد شُتم، وأوذي، وقوطع،
ومع ذلك وقف ثابتاً يحمي الرسالة.
عندما شتم أبو لهب، لم يتوقف النبي ﷺ عن الدعوة.
عندما عذب قريش بلالاً، لم يهدأ رسول الله ﷺ بحجة القدر.
لقد بنى، وقوى، وأعد الأمة.
انظر إلى أبي بكر رضي الله عنه.
عندما توفي رسول الله ﷺ، اهتزت الأمة.
قال الكثيرون: "سينهار الإسلام".
وقف أبو بكر وقال بحزم:
"من كان يعبد محمداً فإن محمداً قد مات.
ومن كان يعبد الله فإن الله حي لا يموت".
لم تكن هذه الجملة بلاغة.
كانت حماية للعقيدة في أحلك اللحظات.
عندما ظهر قوم يمتنعون عن دفع الزكاة،
تردد كثير من الصحابة في التصرف.
قالوا: "هذه مسألة مال فقط".
لكن أبا بكر أجاب بحدة:
"والله لأقاتلن من فرق بين الصلاة والزكاة".
كان يعلم، إذا تُركت شريعة واحدة،
فإن الإسلام سينهار ببطء.
عمر بن الخطاب رضي الله عنه كان يبكي عندما يرى العدالة تُنتهك.
كان يضرب نفسه إذا غفل.
قال: "لو عثرت بغلة في العراق، لخشيت أن يسأل الله عمر عنها".
هكذا كان الصحابة يحمون الإسلام:
ليس بالصمت،
بل بالخوف من الله.
قارن ذلك بالأمة اليوم.
يُهان الإسلام... صمت.
يُترك شرع الله... هدوء.
يُتلاعب بالشريعة... حياد.
ثم يقولون:
"لا بأس، الإسلام محفوظ".
الإسلام فعلاً لن يزول.
لكن الأمة التي لا تحميه ستُستبدل.
الله لا يحتاج إلى أمة جبانة.
الله لا يحتاج إلى مدافعين بقلوب نصفية.
الله يستخدم فقط أولئك المستعدين لدفع الثمن.
حماية الإسلام ليست بالعنف العشوائي،
بل بـ:
* الشجاعة في الموقف،
* الثبات على الحق،
* والولاء للشريعة وإن كانت مرة.
الإسلام محفوظ من الله،
لكن كرامة الأمة محفوظة بطاعتها هي.
إذا استمرت الأمة في الاختباء خلف ذريعة "الله يحفظ الإسلام"،
بينما يتركون الأمانة،
فلا تعجبوا إذا ظل الإسلام عزيزاً،
لكن أهله أذلة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
      <p style="text-align: center;"><strong>"Sesungguhnya Kamilah yang menurunkan Al-Qur'an, dan sesungguhnya Kami pula yang menjaganya."</strong><br>
      (QS. Al-Hijr: 9)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَن يَرْتَدَّ مِنكُمْ عَن دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ</div>
      <p style="text-align: center;"><strong>"Wahai orang-orang yang beriman! Barang siapa di antara kamu yang murtad dari agamanya, maka kelak Allah akan mendatangkan suatu kaum yang Allah mencintai mereka dan mereka mencintai-Nya."</strong><br>
      (QS. Al-Ma'idah: 54)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebaikan, menyuruh kepada yang ma'ruf, dan mencegah dari yang munkar."</strong><br>
      (QS. Ali 'Imran: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"Setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggungjawaban atas kepemimpinannya."</strong><br>
      (HR. Bukhari dan Muslim)</p>
      <br>
      <p style="text-align: center;"><strong>"Jika manusia melihat kemungkaran lalu tidak mengubahnya, hampir saja Allah menimpakan azab kepada mereka semuanya."</strong><br>
      (HR. Abu Dawud dan Tirmidzi)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
      <p style="text-align: center;"><strong>"Indeed, it is We who sent down the Qur'an and indeed, We will be its guardian."</strong><br>
      (QS. Al-Hijr: 9)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَن يَرْتَدَّ مِنكُمْ عَن دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ</div>
      <p style="text-align: center;"><strong>"O you who have believed, whoever of you should revert from his religion - Allah will bring forth [in place of them] a people He will love and who will love Him."</strong><br>
      (QS. Al-Ma'idah: 54)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"And let there be [arising] from you a nation inviting to [all that is] good, enjoining what is right and forbidding what is wrong."</strong><br>
      (QS. Ali 'Imran: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"Every one of you is a shepherd and is responsible for his flock."</strong><br>
      (HR. Bukhari and Muslim)</p>
      <br>
      <p style="text-align: center;"><strong>"If people see some evil but do not change it, soon Allah will send His punishment upon them all."</strong><br>
      (HR. Abu Dawud and Tirmidzi)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ</div>
      <p style="text-align: center;"><strong>"إنا نحن نزلنا الذكر وإنا له لحافظون."</strong><br>
      (سورة الحجر: 9)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا مَن يَرْتَدَّ مِنكُمْ عَن دِينِهِ فَسَوْفَ يَأْتِي اللَّهُ بِقَوْمٍ يُحِبُّهُمْ وَيُحِبُّونَهُ</div>
      <p style="text-align: center;"><strong>"يا أيها الذين آمنوا من يرتد منكم عن دينه فسوف يأتي الله بقوم يحبهم ويحبونه."</strong><br>
      (سورة المائدة: 54)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"ولتكن منكم أمة يدعون إلى الخير ويأمرون بالمعروف وينهون عن المنكر."</strong><br>
      (سورة آل عمران: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"كلكم راع وكلكم مسؤول عن رعيته."</strong><br>
      (رواه البخاري ومسلم)</p>
      <br>
      <p style="text-align: center;"><strong>"إن الناس إذا رأوا المنكر فلم يغيروه أوشك أن يعمهم الله بعقابه."</strong><br>
      (رواه أبو داود والترمذي)</p>`
    }
  },
  {
    id: "18",
    title: {
      id: "Islam Menang Tanpa Kita, Tapi Kita Rugi Tanpa Islam",
      en: "Islam Wins Without Us, But We Lose Without Islam",
      ar: "الإسلام ينتصر بدوننا، لكننا نخسر بدون الإسلام"
    },
    content: {
      id: `Islam tidak membutuhkan kita.
Sejarah telah membuktikan: meski umat lemah, meski pengikut sedikit, Islam tetap menang.
Nabi ﷺ memimpin umat kecil di Madinah,
300 orang melawan ribuan musuh di Badar.
Meski secara logika manusia mereka harus kalah,
Iman dan Takwa menegakkan kemenangan.
Allah menjaga agama-Nya.
Namun umat hari ini?
Banyak yang merasa Islam tergantung pada mereka.
Mereka merasa hebat karena mengikuti kajian, menulis buku, atau memimpin organisasi.
Padahal Islam akan terus hidup tanpa mereka.
Umat hari ini bangga dengan identitas, gelar, dan prestasi duniawi.
Mereka merasa berjasa karena menghadiri majelis, menulis artikel, atau berdakwah di media sosial.
Tetapi ketika Islam dihina, hukum-Nya ditinggalkan, dan syariatnya dipermainkan, mereka hanya diam.
Padahal kerugian mereka tidak hanya bagi agama.
Kerugian paling nyata adalah diri mereka sendiri.
Karena tanpa Islam:
* hati menjadi hampa,
* moral mudah goyah,
* hidup kehilangan arah.
Para sahabat mengajarkan kita pelajaran besar:
Abu Bakar radhiyallahu 'anhu tidak ragu membela Islam hingga harta dan nyawanya taruhannya.
Umar bin Khattab radhiyallahu 'anhu menangis melihat hukum Allah dilanggar.
Ali bin Abi Thalib radhiyallahu 'anhu memimpin dengan keberanian meski nyawa selalu terancam.
Mereka tahu satu hal: Islam menang karena Allah, tapi kerugian tidak menunggu siapa pun.
Hari ini umat bangga karena bisa membaca Al-Qur'an.
Bangga karena mengikuti kajian.
Bangga karena berada di komunitas Islam.
Tetapi ketika ujian datang—ketika syariat dipermainkan, ketika moral dilanggar, ketika hukum Allah tidak ditegakkan—mereka menutup mata.
Mereka lupa bahwa menjadi bagian dari Islam berarti ikut menjaga dan menegakkannya.
Jika tidak, kemenangan Islam terjadi tanpa mereka,
tetapi kerugian mereka terjadi dengan pasti.
Maka jangan bangga dengan ritual, simbol, atau gelar.
Banggalah ketika mampu menegakkan hukum Allah, menolong yang tertindas, dan menegur yang menyimpang.
Islam menang, meski kita lalai.
Tetapi kita rugi, jika meninggalkan amanah-Nya.
Dan itu yang paling menyakitkan:
Islam akan terus mulia, tetapi kita bisa tetap hina.`,
      en: `Islam does not need us.
History has proven: even if the Ummah is weak, even if the followers are few, Islam still wins.
The Prophet ﷺ led a small community in Medina,
300 people against thousands of enemies in Badr.
Although by human logic they should have lost,
Faith and Taqwa established victory.
Allah protects His religion.
But what about the Ummah today?
Many feel that Islam depends on them.
They feel great because they attend study circles, write books, or lead organizations.
Whereas Islam will continue to live without them.
The Ummah today is proud of identity, titles, and worldly achievements.
They feel meritorious for attending assemblies, writing articles, or preaching on social media.
But when Islam is insulted, His laws are abandoned, and His Sharia is played with, they are just silent.
Whereas their loss is not only for the religion.
The most real loss is for themselves.
Because without Islam:
* the heart becomes empty,
* morals are easily shaken,
* life loses direction.
The Companions taught us a great lesson:
Abu Bakr radhiyallahu 'anhu did not hesitate to defend Islam even with his wealth and life at stake.
Umar bin Khattab radhiyallahu 'anhu cried seeing Allah's law violated.
Ali bin Abi Talib radhiyallahu 'anhu led with courage even though his life was always threatened.
They knew one thing: Islam wins because of Allah, but loss waits for no one.
Today the Ummah is proud because they can read the Qur'an.
Proud because they follow study circles.
Proud because they are in the Islamic community.
But when the test comes—when Sharia is played with, when morals are violated, when Allah's law is not upheld—they close their eyes.
They forget that being part of Islam means participating in guarding and upholding it.
If not, the victory of Islam happens without them,
but their loss happens with certainty.
So do not be proud of rituals, symbols, or titles.
Be proud when able to uphold Allah's law, help the oppressed, and rebuke the deviant.
Islam wins, even if we are negligent.
But we lose, if we abandon His trust.
And that is the most painful thing:
Islam will continue to be noble, but we can remain humiliated.`,
      ar: `الإسلام لا يحتاج إلينا.
لقد أثبت التاريخ: حتى لو كانت الأمة ضعيفة، وحتى لو كان الأتباع قلة، فإن الإسلام ينتصر.
قاد النبي ﷺ أمة صغيرة في المدينة،
300 رجل ضد آلاف الأعداء في بدر.
على الرغم من أنهم بالمنطق البشري كان يجب أن يهزموا،
إلا أن الإيمان والتقوى حققا النصر.
الله يحفظ دينه.
لكن ماذا عن الأمة اليوم؟
يشعر الكثيرون أن الإسلام يعتمد عليهم.
يشعرون بالعظمة لأنهم يحضرون الدروس، أو يكتبون الكتب، أو يقودون المنظمات.
بينما سيستمر الإسلام في الحياة بدونهم.
تفتخر الأمة اليوم بالهوية، والألقاب، والإنجازات الدنيوية.
يشعرون بالفضل لحضور المجالس، أو كتابة المقالات، أو الدعوة في وسائل التواصل الاجتماعي.
لكن عندما يُهان الإسلام، وتُترك أحكامه، ويُتلاعب بشريعته، يصمتون فقط.
بينما خسارتهم ليست فقط للدين.
الخسارة الحقيقية هي لأنفسهم.
لأنه بدون الإسلام:
* يصبح القلب فارغاً،
* تهتز الأخلاق بسهولة،
* تفقد الحياة اتجاهها.
علمنا الصحابة درساً عظيماً:
أبو بكر رضي الله عنه لم يتردد في الدفاع عن الإسلام حتى بماله ونفسه.
عمر بن الخطاب رضي الله عنه كان يبكي لرؤية حكم الله يُنتهك.
علي بن أبي طالب رضي الله عنه قاد بشجاعة رغم أن حياته كانت مهددة دائماً.
كانوا يعلمون شيئاً واحداً: الإسلام ينتصر بالله، لكن الخسارة لا تنتظر أحداً.
اليوم تفتخر الأمة لأنها تستطيع قراءة القرآن.
فخورون لأنهم يتابعون الدروس.
فخورون لأنهم في المجتمع الإسلامي.
لكن عندما يأتي الاختبار - عندما يُتلاعب بالشريعة، وتُنتهك الأخلاق، ولا يُقام حكم الله - يغلقون أعينهم.
ينسون أن كونهم جزءاً من الإسلام يعني المشاركة في حمايته وإقامته.
إذا لم يفعلوا، فإن نصر الإسلام يحدث بدونهم،
لكن خسارتهم تحدث بيقين.
لذا لا تفتخروا بالطقوس، أو الرموز، أو الألقاب.
افخروا عندما تستطيعون إقامة حكم الله، ونصرة المظلوم، وإنكار المنكر على المنحرفين.
الإسلام ينتصر، حتى لو غفلنا.
لكننا نخسر، إذا تركنا أمانته.
وهذا هو الأكثر إيلاماً:
سيظل الإسلام عزيزاً، لكننا قد نبقى أذلة.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
      <p style="text-align: center;"><strong>"Wahai orang-orang yang beriman! Jika kamu menolong (agama) Allah, niscaya Dia akan menolongmu dan meneguhkan kedudukanmu."</strong><br>
      (QS. Muhammad: 7)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ</div>
      <p style="text-align: center;"><strong>"Dan barangsiapa mencari agama selain agama Islam, maka sekali-kali tidaklah akan diterima (agama itu) daripadanya, dan dia di akhirat termasuk orang-orang yang rugi."</strong><br>
      (QS. Ali 'Imran: 85)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebaikan, menyuruh kepada yang ma'ruf, dan mencegah dari yang munkar."</strong><br>
      (QS. Ali 'Imran: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"Sesungguhnya agama ini akan selalu menang, meskipun orang-orang yang menegakkannya sedikit."</strong><br>
      (HR. Ahmad)</p>
      <br>
      <p style="text-align: center;"><strong>"Barang siapa di antara kalian melihat kemungkaran, maka hendaklah ia mengubahnya dengan tangannya; jika tidak mampu, maka dengan lisannya; dan jika tidak mampu, maka dengan hatinya—dan itu adalah selemah-lemahnya iman."</strong><br>
      (HR. Muslim)</p>`,
      en: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
      <p style="text-align: center;"><strong>"O you who have believed, if you support Allah, He will support you and plant firmly your feet."</strong><br>
      (QS. Muhammad: 7)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ</div>
      <p style="text-align: center;"><strong>"And whoever desires other than Islam as religion - never will it be accepted from him, and he, in the Hereafter, will be among the losers."</strong><br>
      (QS. Ali 'Imran: 85)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"And let there be [arising] from you a nation inviting to [all that is] good, enjoining what is right and forbidding what is wrong."</strong><br>
      (QS. Ali 'Imran: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"Verily this religion will always prevail, even if those who uphold it are few."</strong><br>
      (HR. Ahmad)</p>
      <br>
      <p style="text-align: center;"><strong>"Whoever among you sees an evil, let him change it with his hand; if he cannot, then with his tongue; and if he cannot, then with his heart—and that is the weakest of faith."</strong><br>
      (HR. Muslim)</p>`,
      ar: `<div class="arab" style="text-align: center; margin-bottom: 10px;">يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ</div>
      <p style="text-align: center;"><strong>"يا أيها الذين آمنوا إن تنصروا الله ينصركم ويثبت أقدامكم."</strong><br>
      (سورة محمد: 7)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَمَن يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَن يُقْبَلَ مِنْهُ وَهُوَ فِي الْآخِرَةِ مِنَ الْخَاسِرِينَ</div>
      <p style="text-align: center;"><strong>"ومن يبتغ غير الإسلام دينا فلن يقبل منه وهو في الآخرة من الخاسرين."</strong><br>
      (سورة آل عمران: 85)</p>
      <br>
      <div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
      <p style="text-align: center;"><strong>"ولتكن منكم أمة يدعون إلى الخير ويأمرون بالمعروف وينهون عن المنكر."</strong><br>
      (سورة آل عمران: 104)</p>
      <br>
      <p style="text-align: center;"><strong>"لا يزال هذا الدين ظاهراً، وإن خالفهم من خالفهم."</strong><br>
      (رواه أحمد)</p>
      <br>
      <p style="text-align: center;"><strong>"من رأى منكم منكرا فليغيره بيده، فإن لم يستطع فبلسانه، فإن لم يستطع فبقلبه، وذلك أضعف الإيمان."</strong><br>
      (رواه مسلم)</p>`
    }
  },
  {
    id: "19",
    title: {
      id: "Umat Islam Takut Menegur, Tapi Takut Allah Tidak Ditakuti",
      en: "The Ummah Fears to Rebuke, But Does Not Fear Allah",
      ar: "الأمة تخاف من إنكار المنكر، لكنها لا تخاف الله"
    },
    content: {
      id: `Hari ini umat Islam gemar takut.
Takut dicibir, takut dibilang ekstrem, takut kehilangan status, takut reputasi rusak.
Tetapi anehnya, takut kepada Allah seakan hilang dari hati.

Mereka enggan menegur kemungkaran.
Mereka menutup mulut ketika hukum Allah dilanggar.
Mereka diam saat moral umat dihancurkan.

Padahal Rasulullah ﷺ bersabda: "Barang siapa di antara kalian melihat kemungkaran, hendaklah ia menegurnya."
Tetapi kenyataannya hari ini, umat lebih takut kata manusia daripada murka Allah.

Nabi ﷺ dan para Sahabat mengajarkan sebaliknya:
* Abu Bakar radhiyallahu ‘anhu menegur siapa pun yang menyimpang dari sunnah, meski itu anggota Quraisy.
* Umar bin Khattab radhiyallahu ‘anhu menegur siapa pun yang lalai menegakkan keadilan, bahkan pejabatnya sendiri.
* Ali bin Abi Thalib radhiyallahu ‘anhu mengoreksi tindakan sahabat dan pemerintah untuk menjaga Islam tetap bersih dari kemungkaran.

Mereka tidak takut reputasi, tidak takut hinaan, tidak takut kemarahan orang.
Yang mereka takutkan hanyalah Allah dan murka-Nya.

Hari ini? Berani menasihati hanya di grup WhatsApp atau media sosial, dengan kalimat manis: "Semoga bermanfaat ya..."
Tetapi ketika syariat Allah dilanggar di depan mata, mereka diam seribu bahasa.

Inilah paradoks umat modern:
* Takut menegur manusia, tapi takut Allah tidak ada di hati.
* Takut kehilangan dunia, tapi akhirat dianggap main-main.
* Takut dicibir, tapi tidak takut dosa.

Padahal menegur kemungkaran adalah kewajiban setiap muslim.
Tidak ada kompromi, tidak ada alasan, tidak ada alasan untuk pura-pura takut.

Puasa bukan sekadar menahan lapar dan haus.
Puasa adalah latihan keberanian.
Berani menahan nafsu, berani menegur, berani menanggung risiko kebenaran.

Jika umat terus takut menegur, maka syariat Allah akan terus diinjak-injak, dan kita sendiri akan terjatuh ke jurang kehinaan.

Ingatlah pesan Nabi ﷺ: iman bukan hanya tentang keyakinan dalam hati, tapi diwujudkan dalam tindakan.
Jika takut Allah tidak ada dalam hati, puasa, shalat, dan doa hanyalah ritual kosong.

Bangunlah, wahai umat!
Beranilah menegur, beranilah menegakkan kebenaran, beranilah menghadapi manusia dengan keberanian karena Allah.
Karena takut manusia tanpa takut Allah hanyalah kegagalan iman yang paling nyata.`,
      en: `Today, the Muslim Ummah is fond of fear.
Fear of being sneered at, fear of being called extreme, fear of losing status, fear of a ruined reputation.
But strangely, fear of Allah seems to have vanished from the heart.

They are reluctant to rebuke evil.
They keep their mouths shut when Allah's laws are violated.
They remain silent when the moral fabric of the Ummah is destroyed.

Whereas the Messenger of Allah ﷺ said: "Whoever among you sees an evil, let him change it."
But the reality today is that the Ummah fears the words of people more than the wrath of Allah.

The Prophet ﷺ and the Companions taught the opposite:
* Abu Bakr radhiyallahu ‘anhu rebuked anyone who deviated from the Sunnah, even if they were members of Quraysh.
* Umar bin Khattab radhiyallahu ‘anhu rebuked anyone who neglected to uphold justice, even his own officials.
* Ali bin Abi Talib radhiyallahu ‘anhu corrected the actions of companions and the government to keep Islam pure from evil.

They did not fear reputation, did not fear insults, did not fear people's anger.
What they feared was only Allah and His wrath.

Today? Daring to advise only in WhatsApp groups or social media, with sweet sentences: "Hope this is useful..."
But when Allah's Sharia is violated right before their eyes, they remain completely silent.

This is the paradox of the modern Ummah:
* Afraid to rebuke people, but fear of Allah is not in the heart.
* Afraid of losing the world, but the Hereafter is considered a game.
* Afraid of being sneered at, but not afraid of sin.

Whereas rebuking evil is the duty of every Muslim.
There is no compromise, no excuse, no reason to pretend to be afraid.

Fasting is not just restraining hunger and thirst.
Fasting is an exercise in courage.
Courage to restrain desire, courage to rebuke, courage to bear the risk of truth.

If the Ummah continues to be afraid to rebuke, then Allah's Sharia will continue to be trampled upon, and we ourselves will fall into the abyss of humiliation.

Remember the message of the Prophet ﷺ: faith is not just about belief in the heart, but manifested in action.
If fear of Allah is not in the heart, fasting, prayer, and supplication are just empty rituals.

Wake up, O Ummah!
Dare to rebuke, dare to uphold the truth, dare to face people with courage for the sake of Allah.
Because fearing people without fearing Allah is the most real failure of faith.`,
      ar: `اليوم، أصبحت الأمة الإسلامية مولعة بالخوف.
الخوف من السخرية، الخوف من أن يوصفوا بالمتطرفين، الخوف من فقدان المكانة، الخوف من تشويه السمعة.
لكن الغريب أن الخوف من الله يبدو وكأنه قد اختفى من القلوب.

إنهم يترددون في إنكار المنكر.
يغلقون أفواههم عندما تُنتهك حدود الله.
يصمتون عندما تُدمر أخلاق الأمة.

بينما قال رسول الله ﷺ: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ".
لكن الواقع اليوم هو أن الأمة تخاف من كلام الناس أكثر من غضب الله.

لقد علمنا النبي ﷺ والصحابة العكس:
* أبو بكر رضي الله عنه كان ينكر على من يخالف السنة، حتى لو كان من قريش.
* عمر بن الخطاب رضي الله عنه كان ينكر على من يقصر في إقامة العدل، حتى ولاته.
* علي بن أبي طالب رضي الله عنه كان يصحح أفعال الصحابة والحكام ليبقي الإسلام نقياً من المنكرات.

لم يخافوا على سمعتهم، ولم يخافوا الإهانات، ولم يخافوا غضب الناس.
كان خوفهم الوحيد من الله وغضبه.

واليوم؟ لا يجرؤون على النصح إلا في مجموعات الواتساب أو وسائل التواصل الاجتماعي، بعبارات لطيفة: "نأمل أن يكون هذا مفيداً..."
لكن عندما تُنتهك شريعة الله أمام أعينهم، يصمتون صمت القبور.

هذه هي مفارقة الأمة الحديثة:
* يخافون من توبيخ الناس، لكن الخوف من الله ليس في قلوبهم.
* يخافون من خسارة الدنيا، لكن الآخرة تعتبر لعباً.
* يخافون من السخرية، لكنهم لا يخافون الذنب.

بينما إنكار المنكر هو واجب كل مسلم.
لا مساومة، لا عذر، لا سبب للتظاهر بالخوف.

الصيام ليس مجرد الامتناع عن الطعام والشراب.
الصيام تمرين على الشجاعة.
شجاعة كبح الشهوات، شجاعة الإنكار، شجاعة تحمل مخاطر الحق.

إذا استمرت الأمة في الخوف من الإنكار، فستستمر شريعة الله في أن تُداس، وسنسقط نحن أنفسنا في هاوية الذل.

تذكروا وصية النبي ﷺ: الإيمان ليس مجرد اعتقاد في القلب، بل يتجسد في العمل.
إذا لم يكن الخوف من الله في القلب، فالصيام والصلاة والدعاء مجرد طقوس فارغة.

استيقظي أيتها الأمة!
تجراي على الإنكار، تجراي على إقامة الحق، تجراي على مواجهة الناس بشجاعة من أجل الله.
لأن الخوف من الناس دون الخوف من الله هو الفشل الحقيقي للإيمان.`
    },
    dalil: {
      id: `<div class="arab" style="text-align: center; margin-bottom: 10px;">وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ</div>
<p style="text-align: center;"><strong>"Dan hendaklah ada di antara kamu segolongan umat yang menyeru kepada kebaikan, menyuruh kepada yang ma'ruf, dan mencegah dari yang munkar; merekalah orang-orang yang beruntung."</strong><br>
(QS. Ali 'Imran: 104)</p>
<hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
<div class="arab" style="text-align: center; margin-bottom: 10px;">مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ</div>
<p style="text-align: center;"><strong>"Barang siapa di antara kalian melihat kemungkaran, hendaklah ia mengubahnya dengan tangannya; jika tidak mampu, maka dengan lisannya; dan jika tidak mampu, maka dengan hatinya—dan itu adalah selemah-lemahnya iman."</strong><br>
(HR. Muslim)</p>`
    }
  }
];

export function getCerpen(): Cerpen[] {
  // Kita prioritaskan data dari kode (INITIAL_DATA) agar update dari GitHub selalu muncul
  // LocalStorage hanya digunakan jika kita ingin fitur 'catatan pribadi' di masa depan
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
