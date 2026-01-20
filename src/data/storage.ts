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
