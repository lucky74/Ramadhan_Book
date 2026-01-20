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
