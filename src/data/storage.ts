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
