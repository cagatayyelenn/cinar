import os
import re
import urllib.parse
import unicodedata
import json

data = """Başlık: TM16 Klima Kompresör
Açıklama : TM16 klima kompresörü, Valeo markası tarafından üretilen ve araçların klima sistemlerinde kullanılan bir bileşendir. Klima kompresörünün ana görevi, klima gazını sıkıştırarak aracın iç mekanını soğutmak ve klima sisteminin verimli çalışmasını sağlamaktır. TM16 kompresörü, güçlü ve dayanıklı yapısıyla bilinir, bu da onu uzun süreli kullanım için ideal bir seçenek haline getirir.

------------------

Başlık: TM16 Klima Kompresörü Valeo

Açıklama: TM16 klima kompresörü, Valeo tarafından üretilen ve araçların klima sistemlerinde kullanılan bir bileşendir. Klima kompresörleri, soğutma gazını sıkıştırarak aracın iç mekanının soğumasını sağlar. TM16 kompresörü, güçlü yapısı ve verimli çalışma özellikleri ile bilinir. Valeo, otomotiv sektöründe güvenilir markalardan biri olup, TM16 modeliyle de yüksek performanslı klima çözümleri sunmaktadır.

--------------

Başlık: TM31 Klima Kompresör
Açıklama: TM31 klima kompresörü, Valeo tarafından üretilen bir klima kompresörüdür. Araçların klima sistemlerinde kullanılan bu kompresör, klima gazını sıkıştırarak aracın iç mekanını soğutur. Aracın soğutma işlevini düzgün bir şekilde yerine getirebilmesi için, kompresörün yüksek verimle çalışması gerekir. TM31, dayanıklılığı ve verimliliği ile bilinen bir modeldir.


--------------------

başlık: TM31 Klima Kompresörü Valeo

Açıklama: TM31 klima kompresörü, Valeo tarafından üretilen ve araç klima sistemlerinde soğutma sağlayan önemli bir bileşendir. Bu kompresör, klima gazını sıkıştırarak aracın iç mekanını soğutur. TM31, dayanıklı yapısı ve yüksek verimliliği ile dikkat çeker. Soğutma sisteminin düzgün çalışabilmesi için kaliteli bir kompresör kullanmak önemlidir ve TM31, bu konuda mükemmel bir tercihtir.

--------------------

başlık:  TM21 Klima Kompresörü

Açıklama: TM21 klima kompresörü, otomobillerin klima sistemlerinde soğutma işlemi yapan önemli bir bileşendir. Valeo tarafından üretilen bu kompresör, klima gazını sıkıştırarak aracın iç mekanını serin tutmayı sağlar. Verimli bir klima kompresörü, aracın klima sisteminin uzun ömürlü olmasına ve iç mekanın konforlu kalmasına katkı sağlar. TM21, bu ihtiyacı karşılayan yüksek kaliteli bir üründür ve araç sahiplerinin en çok tercih ettiği kompresörlerden biridir.

--------------------

başlık:  TM21 Klima Kompresörü Valeo

Açıklama: TM21 klima kompresörü, Valeo markasının otomobiller için geliştirdiği yüksek kaliteli bir klima kompresörüdür. Valeo, dünya çapında bilinen güvenilir bir markadır ve otomotiv sektöründe klima sistemleri konusunda uzun yıllara dayanan tecrübesi ile öne çıkmaktadır. TM21 modeli, araçların klima sistemlerini verimli bir şekilde çalıştırmak için tasarlanmıştır ve genellikle farklı araç modellerinde kullanılır. Bu kompresör, klima gazını yüksek basınca çıkararak aracın iç mekanının serin kalmasını sağlar. 

--------------------

başlık:  SD7 Klima Kompresörü

Açıklama: SD7 klima kompresörü, otomobillerde kullanılan önemli bir klima bileşenidir. Klima sisteminin verimli çalışabilmesi için kompresörün sağlıklı olması gerekir. SD7, özellikle yüksek performanslı araçlarda sıklıkla tercih edilen bir modeldir. Bu kompresör, soğutma gazını yüksek basınca çıkararak aracın iç mekanını serin tutar. 

--------------------

başlık:  7H15 Klima Kompresörü

Açıklama: 7H15 klima kompresörü, klima sistemlerinin en önemli bileşenlerinden biridir ve özellikle ticari araçlar ve ağır vasıtalar için kullanılır. Kompresör, soğutucu gazı sıkıştırarak klima sistemine yönlendirir, böylece araç içindeki hava soğutulur. 7H15 kompresörleri yüksek verimlilikleri ile bilinir ve aracın serin kalmasını sağlar.

--------------------

başlık:  5H14 Sanden Klima Kompresörü

Açıklama: 5H14 Sanden klima kompresörü, Sanden markasının ürettiği, özellikle otomotiv endüstrisinde yaygın olarak kullanılan bir klima kompresörüdür. Bu kompresör, araçların klima sistemlerinde soğutma gazını sıkıştırarak, aracın iç ortamını soğutmak için gerekli olan enerjiyi sağlar. 5H14, Sanden tarafından üretilen bir model olup, özellikle araç içi klima sistemlerinde verimli soğutma sağlamak amacıyla tasarlanmıştır.

--------------------

başlık:  5H14 Klima Kompresörü

Açıklama: 5H14 klima kompresörü, otomotiv ve ticari araçlarda kullanılan bir klima kompresörü türüdür. Bu kompresör, soğutma işlemi için kullanılan gazı sıkıştırarak klima sisteminin çalışmasını sağlar. “5H14” adı, bu kompresörün model numarasını ifade eder ve genellikle yüksek verimlilik, dayanıklılık ve uzun ömürlü performansıyla bilinir.

--------------------

başlık:  SD5 Klima Kompresörü

Açıklama: SD5 klima kompresörü, özellikle araç klima sistemlerinde yaygın olarak kullanılan ve yüksek verimlilik sağlayan bir kompresör türüdür. Bu kompresör, soğutucu gazı sıkıştırarak ve bir hava akışını yönlendirerek klima sistemine soğutma sağlamak için çalışır. SD5 kompresörleri, sağlamlıkları ve uzun ömürleri ile bilinirler ve otomobil, kamyon, minibüs gibi çeşitli araçlarda kullanılır.

--------------------

başlık:  Volkswagen Transporter Denso Klima Kompresörü

Açıklama: Volkswagen Transporter Denso klima kompresörü, Volkswagen Transporter araçları için özel olarak üretilmiş, klima sisteminin düzgün çalışmasını sağlayan önemli bir bileşendir. Denso, dünya çapında otomotiv sektöründe kalitesiyle tanınan bir markadır ve bu nedenle Denso klima kompresörleri, verimlilik ve uzun ömürlü performans sunar.

Kompresör, klima sisteminin kalbini oluşturur. Soğutucu gazı sıkıştırarak, bu gazın klima sisteminde dolaşmasını sağlar ve araç içindeki sıcaklık kontrolünü mümkün kılar. Denso marka klima kompresörleri, güvenilirlikleri ve yüksek kaliteli üretimleriyle öne çıkar.

--------------------

başlık:  Crafter Çıkma Denso Klima Kompresörü

Açıklama: Crafter çıkma Denso klima kompresörü, Volkswagen Crafter araçları için özel olarak üretilen ve aracın klima sisteminin verimli bir şekilde çalışmasını sağlayan bir parçadır. Denso, dünya çapında tanınan bir marka olup, klima sistemlerinde yüksek kalite ve güvenilirlik sunar. Çıkma Denso klima kompresörü, sıfır kompresörler yerine daha ekonomik bir alternatif arayan araç sahipleri için idealdir.

--------------------

başlık:  Crafter Klima Kondenseri

Açıklama: Crafter klima kondenseri, araç klima sistemlerinin soğutma sürecinde önemli bir rol oynayan parçadır. Klimanın içinde dolaşan soğutucu gazın sıcaklığını düşürerek, gazın yoğunlaşmasını sağlar ve ardından soğutulmuş gazı klima sistemine geri gönderir. Bu sayede, araç içindeki sıcaklık kontrol altına alınır ve ferah bir ortam sağlanır.

--------------------

başlık:  Crafter Üniversal Klima Kompresörü

Açıklama: Crafter üniversal klima kompresörü, Volkswagen Crafter araçları için farklı marka ve modeldeki klima sistemlerine uyumlu olan bir parçadır. Klima kompresörü, aracın klima sisteminin temel bileşenlerinden biridir ve klima gazını sıkıştırarak soğutma işleminin gerçekleşmesini sağlar. Eğer aracınızın orijinal klima kompresörü arızalandıysa veya değiştirilmesi gerekiyorsa, üniversal kompresörler bir alternatif olabilir.

--------------------

başlık:  Denso Crafter Klima Kompresörü

Açıklama: Volkswagen Crafter, geniş iç hacmiyle ticari taşımacılığın önemli modellerinden biridir. Özellikle yaz aylarında araç içerisindeki sıcaklık, sürücü ve yolcu konforunu doğrudan etkiler. İşte bu noktada klima kompresörü, sistemin kalbi olarak görev yapar. ❄️



--------------------

başlık:  Mercedes Vito Çıkma Klima Kompresörü

Açıklama: Klima kompresörü, aracın klima sisteminin kalbidir. Soğutucu gazı sıkıştırarak sisteme gönderir ve kabin içinin soğutulmasını sağlar. Arızalı kompresör, serinliği büyük ölçüde etkiler.

--------------------

başlık:  Mercedes Vito Denso Klima Kompresörü

Açıklama: Mercedes Vito, ticari araç kategorisinde uzun yıllardır popülerliğini sürdüren bir modeldir. Hem şehir içi hem de uzun yolculuklar için tercih edilen bu araç, konforlu bir sürüş sağlamak amacıyla gelişmiş iklimlendirme sistemlerine sahiptir. Bu sistemin temel bileşenlerinden biri de klima kompresörüdür. Mercedes Vito’nun klima kompresörleri arasında, Denso marka kompresörler sıklıkla tercih edilir. Denso, otomotiv sektöründe kalite ve güvenilirliği ile bilinen bir markadır. Mercedes Vito Denso klima kompresörü, aracınızın klima sisteminin verimli çalışmasını sağlayan önemli bir bileşendir.

--------------------

başlık:  Mercedes Vito Klima Kompresörü

Açıklama: Mercedes Vito, uzun yolculuklar ve şehir içi kullanım için oldukça popüler bir araçtır. Ancak, bu araçlarda da tıpkı diğer araçlarda olduğu gibi, klima sisteminin düzenli çalışması için bazı bileşenlerin bakımı gerekir. Klima kompresörü, bu sistemin en önemli parçalarından biridir. Klima kompresörü, soğutma sisteminin çalışmasını sağlayan ve aracınızın klima performansını doğrudan etkileyen bir parçadır. Mercedes Vito klima kompresörünün arızalanması durumunda, aracınızın klima sistemi verimsiz çalışabilir ve rahat bir sürüş sağlanamayabilir. Bu yazıda, Mercedes Vito klima kompresörü hakkında bilmeniz gerekenleri ele alacağız.

--------------------

başlık:  Karsan Jest Klima Kondanser Peteği

Açıklama: Karsan Jest minibüslerinde klima sisteminin verimli çalışabilmesi için çeşitli bileşenler birbirleriyle uyumlu bir şekilde çalışmalıdır. Bu bileşenlerden biri de klima kondanser peteğidir. Kondanser peteği, klima sisteminde önemli bir rol oynar ve soğutma sisteminin verimli çalışmasını sağlamak için bakım gerektirir. Bu yazıda, Karsan Jest klima kondanser peteğinin görevini, arızalarını ve tamir sürecini detaylı bir şekilde ele alacağız.

--------------------

başlık:  Karsan Jest Klima Kompresörü

Açıklama: Karsan Jest minibüslerinde klima, yolcuların konforlu bir seyahat deneyimi yaşaması için önemli bir özelliktir. Klima sisteminin düzgün çalışabilmesi için ise birçok parçanın uyum içinde çalışması gerekmektedir. Bunlardan biri de klima kompresörüdür. Karsan Jest klima kompresörü, klima sisteminin kalbidir ve doğru çalışması, klima sisteminin performansını doğrudan etkiler. 

--------------------

başlık:  Otokar Sultan Klima Kondenseri

Açıklama: Klima sistemlerinin sağlıklı çalışabilmesi için her bir parçasının uyum içinde işlemesi gerekir. Bu parçalardan biri olan klima kondenseri, Otokar Sultan gibi ticari araçlarda yaz-kış konforu sağlayan hayati bir unsurdur. Arızalanması durumunda klima sistemi çalışmaz hale gelir ve özellikle yaz aylarında sürüş konforu ciddi biçimde düşer

--------------------

başlık:  Otokar Sultan Klima Kompresörü

Açıklama: Klima sistemleri, şehir içi ve şehirler arası taşımacılıkta kullanılan Otokar Sultan midibüslerinde hem yolcular hem de şoför konforu açısından büyük önem taşır. Bu sistemlerin en kritik parçalarından biri olan klima kompresörü, arıza yaptığında tüm sistem devre dışı kalabilir. 

--------------------

başlık:  Sprinter Çıkma Valeo Kompresör

Açıklama: Mercedes Sprinter araçlarında klima sistemlerinin en önemli parçası olan kompresörler, zaman içinde arızalanabilir ya da performans kaybı yaşayabilir. Orijinal yedek parça fiyatlarının yüksekliği nedeniyle, birçok araç sahibi çıkma Valeo kompresör gibi alternatif çözümlere yönelmektedir

--------------------

Başlık : Sprinter Üniversal Klima Kompresörü
Açıklama : Sprinter modellerinde klima sistemi, uzun yolculuklar ve sıcak hava koşullarında büyük bir konfor sağlar. Klima sisteminin en temel bileşeni ise klima kompresörüdür. Ancak orijinal parça maliyetleri bazı kullanıcılar için yüksek olabilmektedir. Bu noktada, Sprinter üniversal klima kompresörü alternatif bir çözüm olarak karşımıza çıkar. Hem fiyat avantajı hem de geniş uyumluluk özelliği sayesinde birçok araç sahibinin tercihi haline gelmiştir.

--------------------

Başlık : Sprinter Klima Kompresörü Denso
Açıklama : Mercedes Sprinter kullanıcıları için konfor, performans kadar önemlidir. Özellikle yaz aylarında veya uzun yolculuklarda klima sisteminin sorunsuz çalışması büyük fark yaratır. Bu sistemin kalbinde yer alan parça ise klima kompresörüdür. Kalitesiyle öne çıkan Sprinter klima kompresörü Denso, güçlü performansı ve uzun ömrüyle tercih edilmektedir. 

--------------------

Başlık : Sprinter Klima Kompresörü Valeo
Açıklama : Mercedes Sprinter, hafif ticari araç sınıfında dayanıklılığı ve geniş iç hacmi ile tercih edilen bir modeldir. Bu aracın konfor sistemleri içinde en kritik parçaların başında klima kompresörü gelir. Özellikle uzun yolculuklarda sürücü ve yolcu konforunu doğrudan etkileyen bu sistemin düzgün çalışması büyük önem taşır. 

--------------------

Başlık : KONDANSER ISUZU PRESTİGE MITSUBİSHİ NOVA SAFKAR CLİMART
Açıklama : Isuzu Prestige ve Mitsubishi Nova model araçlarda kullanılan klima sistemleri için özel olarak üretilmiş kondenser (klima radyatörü), Safkar ve Climart marka klima sistemleri ile uyumlu çalışacak şekilde tasarlanmıştır. Yüksek ısı transferi sağlayan yapısı sayesinde klima gazını verimli şekilde soğutarak sistemin maksimum performansla çalışmasına yardımcı olur.

1100 x 580 x 26 mm ölçülerindeki geniş yüzey alanı, özellikle otobüs ve midibüs tipi ticari araçlarda güçlü soğutma performansı sunar. Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sağlar ve zorlu yol koşullarında yüksek dayanım gösterir.

--------------------

Başlık : AVENUE BUS OTOBÜS MERCEDES TRAVEGO (SAFKAR TİP)
Açıklama : Safkar tip klima sistemleri için üretilmiş olan 1400 x 500 mm ölçülerindeki kondenser, otobüs ve büyük ticari araçların klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. Özellikle Avenue Bus ve Mercedes Travego model otobüslerde kullanılan Safkar klima sistemleri ile uyumlu çalışır.

Yüksek kaliteli alüminyum yapısı sayesinde klima gazının hızlı ve verimli şekilde soğutulmasını sağlar. Geniş yüzey alanı ve güçlü ısı transfer kapasitesi, klima sisteminin daha verimli çalışmasına yardımcı olur ve aracın iç ortamında ideal sıcaklık dengesinin korunmasını sağlar.

--------------------

Başlık : KONDANSER SAFKAR SOĞUTUCU PENGUEN 230 üniversal
Açıklama : Safkar Penguen 230 klima sistemleri ile uyumlu olarak tasarlanmış kondenser (klima soğutucu radyatör), ticari araç ve otobüs klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla üretilmiştir. Klima gazının hızlı ve verimli şekilde soğutulmasını sağlayarak klima sisteminin daha verimli çalışmasına yardımcı olur.

Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sunan bu üniversal kondenser, Safkar Penguen 230 klima sistemine sahip araçlarda sorunsuz şekilde kullanılabilir. Geniş yüzey alanı sayesinde yüksek ısı transferi sağlayarak özellikle yoğun çalışan klima sistemlerinde güçlü performans suna

--------------------

Başlık : KONDANSER SAFKAR CLİMART SOĞUTUCU S75/425/485 ART5000 80X40X26MM
Açıklama : Safkar ve Climart marka klima sistemleri ile uyumlu olarak üretilmiş kondenser (klima soğutucu radyatörü), otobüs ve ticari araç klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. S75, 425, 485 ve ART5000 model klima sistemleri ile uyumlu olan bu kondenser, klima gazının hızlı şekilde soğutulmasını sağlayarak sistemin verimli çalışmasına yardımcı olur.

80 x 40 x 26 mm ölçülerindeki kompakt ve dayanıklı yapısı sayesinde yüksek ısı transferi sağlar. Kaliteli alüminyum malzemeden üretilmiş olup uzun ömürlü kullanım ve yüksek performans sunar. Yoğun çalışan araç klima sistemleri için ideal bir yedek parçadır.

--------------------

Başlık : DRİER FİLTRE YILKAR KLİMA ÜNİVERSAL AYAKLI ALÜMİNYUM
Açıklama : Yılkar marka klima sistemleri ile uyumlu drier filtre (klima kurutucu filtre), araç klima sistemlerinde gaz içerisindeki nemi ve kirli partikülleri filtreleyerek sistemin daha verimli ve uzun ömürlü çalışmasını sağlar. Klima sisteminin önemli parçalarından biri olan drier filtre, kompresör ve diğer klima bileşenlerinin korunmasına yardımcı olur.

Dayanıklı alüminyum gövde yapısına sahip olan bu ürün, ayaklı montaj tasarımı sayesinde kolay kurulum imkanı sunar. Üniversal yapısı sayesinde otobüs, minibüs ve ticari araç klima sistemlerinde geniş kullanım alanına sahiptir.

--------------------

Başlık : KONDANSER YILKAR 2 FANLI 750*550*20MM
Açıklama : Yılkar klima sistemleri ile uyumlu olarak üretilmiş 2 fanlı kondenser, araç klima sistemlerinde yüksek soğutma performansı sağlamak amacıyla tasarlanmıştır. Üzerinde bulunan 2 adet güçlü fan, klima gazının hızlı ve verimli şekilde soğutulmasına yardımcı olarak sistemin daha verimli çalışmasını sağlar.

750 x 550 x 20 mm ölçülerindeki yapısı sayesinde yüksek ısı transferi sunar ve özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sağlar. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu ürün, araç klima sistemlerinin güvenli ve verimli çalışmasına katkı sağlar.

--------------------

Başlık : Yılkar YK100 Fanlı KONDANSER ÜNİVERSAL 1000*400*20MM
Açıklama : Yılkar YK100 klima sistemleri ile uyumlu olarak üretilmiş fanlı kondenser (klima radyatörü), araç klima sistemlerinde yüksek performanslı soğutma sağlamak amacıyla tasarlanmıştır. Üzerinde bulunan fan sayesinde klima gazının daha hızlı soğutulmasını sağlayarak klima sisteminin verimli ve stabil çalışmasına yardımcı olur.

1000 x 400 x 20 mm ölçülerindeki yapısı sayesinde geniş ısı transfer yüzeyi sunar ve özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sağlar. Dayanıklı malzeme yapısı sayesinde uzun ömürlü kullanım sunan bu ürün, araç klima sistemleri için ideal bir yedek parçadır.

--------------------

Başlık : Yılkar YK 80 KONDANSER ÜNİVERSAL660*540*20MM
Açıklama : Yılkar YK 80 klima sistemleri ile uyumlu olarak üretilmiş üniversal kondenser (klima radyatörü), araç klima sistemlerinde yüksek soğutma performansı sağlamak amacıyla tasarlanmıştır. Klima gazının hızlı ve verimli şekilde soğutulmasını sağlayarak klima sisteminin daha stabil ve verimli çalışmasına yardımcı olur.

660 x 540 x 20 mm ölçülerindeki yapısı sayesinde yüksek ısı transferi sağlayan bu kondenser, özellikle otobüs, minibüs ve ticari araç klima sistemlerinde etkili performans sunar. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sağlar ve araç klima sistemleri için güvenilir bir yedek parçadır.

--------------------

Başlık : FAN MOTORU 11 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ
Açıklama : Araç klima ve soğutma sistemlerinde kullanılmak üzere tasarlanmış 11 inç fan motoru, güçlü performansı sayesinde hava akışını artırarak sistemin daha verimli çalışmasını sağlar. 12V 120W güç kapasitesine sahip olan bu fan motoru, hem emiş hem de üfleç olarak kullanılabilen yapısı ile farklı soğutma ve klima uygulamalarında tercih edilir.

Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu fan motoru, özellikle otobüs, minibüs, ticari araç klima sistemleri ve kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.

--------------------

Başlık : FAN MOTORU 12 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ
Açıklama : Araç klima ve soğutma sistemleri için tasarlanmış 12 inç fan motoru, güçlü hava akışı sağlayarak klima ve kondenser sistemlerinin daha verimli çalışmasına yardımcı olur. 12V 120W güç kapasitesine sahip olan bu fan motoru, hem emiş hem de üfleç olarak kullanılabilen yapısı sayesinde farklı soğutma uygulamalarında kullanılabilir.

Dayanıklı motor yapısı ve yüksek performansı sayesinde uzun ömürlü kullanım sunar. Özellikle otobüs, minibüs ve ticari araç klima sistemleri ile kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.

--------------------

Başlık : FAN MOTORU 14 İNÇ 12V 120W EMİŞ/ÜFLEÇ DIŞ
Açıklama : Araç klima ve soğutma sistemleri için tasarlanmış 14 inç fan motoru, güçlü hava akışı sağlayarak klima ve kondenser sistemlerinin daha verimli çalışmasına yardımcı olur. 12V 120W güç kapasitesine sahip olan bu fan motoru, emiş ve üfleç olarak kullanılabilen yapısı sayesinde farklı soğutma ve havalandırma uygulamalarında tercih edilir.

Dayanıklı motor yapısı ve yüksek performansı sayesinde uzun ömürlü kullanım sunar. Özellikle otobüs, minibüs ve ticari araç klima sistemleri ile kondenser radyatör soğutma sistemlerinde etkili performans sağlar. Dış montaj tipine uygun olarak üretilmiştir.

--------------------

Başlık : Otokar Sultan Klima FANI MOTORU BEŞ KANAT
Açıklama : Otokar Sultan model araçların klima sistemlerinde kullanılmak üzere tasarlanmış beş kanatlı klima fan motoru, güçlü hava akışı sağlayarak klima sisteminin verimli çalışmasına yardımcı olur. Fan kanat yapısı sayesinde kondenser ve radyatör üzerinden geçen havayı hızlandırarak klima gazının daha hızlı soğutulmasını sağlar. Dayanıklı motor yapısı ve 5 kanatlı fan tasarımı, yüksek performans ve uzun ömürlü kullanım sunar. Özellikle otobüs ve ticari araç klima sistemlerinde güvenilir bir soğutma performansı sağlar ve klima sisteminin stabil çalışmasına katkıda bulunur.

--------------------

Başlık : 700 BLOWER FAN 12/24 V
Açıklama : 700 blower fan, minibüs, midibüs ve otobüs klima sistemlerinde güçlü hava sirkülasyonu sağlamak için kullanılan yüksek performanslı bir klima fan motorudur. 700 blower fan, klima evaporatöründen geçen havayı hızlandırarak araç içi soğutma performansını artırır ve kabin içerisinde dengeli hava dağılımı sağlar. Dayanıklı motor yapısı sayesinde uzun süreli kullanım sunar ve ticari araç klima sistemlerinde güvenilir performans sağlar. Özellikle minibüs, midibüs ve otobüs gibi yolcu taşıma araçlarında klima sisteminin daha verimli çalışmasına yardımcı olur.

--------------------

Başlık : Yılkar Klima Düğmesi
Açıklama : Yılkar klima düğmesi, araç klima sistemlerinde fan hızını ve klima çalışma ayarlarını kontrol etmek için kullanılan dayanıklı bir kontrol düğmesidir. Yılkar klima düğmesi, özellikle minibüs, midibüs ve otobüs klima sistemlerinde kullanıcıya kolay kontrol imkânı sunarak klima sisteminin verimli çalışmasına yardımcı olur. Sağlam yapısı ve uzun ömürlü kullanım özelliği sayesinde ticari araç klima sistemlerinde güvenilir bir yedek parça olarak tercih edilmektedir.

--------------------

Başlık : Webasto Klima Düğmesi
Açıklama : Webasto klima düğmesi, araç klima ve havalandırma sistemlerinin kontrol edilmesini sağlayan önemli bir klima kontrol parçasıdır. Webasto klima düğmesi, özellikle minibüs, midibüs ve otobüs gibi ticari araçlarda klima sisteminin fan ayarı ve çalışma kontrolünü kolaylaştırır. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan Webasto klima düğmesi, araç klima sistemlerinin stabil ve verimli çalışmasına yardımcı olur.

--------------------

Başlık : Delphi Klima Kondenseri
Açıklama : Delphi klima kondenseri, araç klima sistemlerinde soğutucu gazın yoğunlaştırılmasını sağlayarak klima sisteminin verimli şekilde çalışmasına yardımcı olan önemli bir klima parçasıdır. Delphi klima kondenseri, klima gazının yüksek basınç altında soğutulmasını sağlayarak evaporatöre gönderilmeden önce gazın sıvı hale dönüşmesine yardımcı olur. Dayanıklı alüminyum yapısı sayesinde uzun ömürlü kullanım sunan Delphi klima kondenseri, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güçlü soğutma performansı sağlar.

--------------------

Başlık : Webasto Klima Kondenseri
Açıklama : Webasto klima kondenseri, araç klima sistemlerinde soğutucu gazın yoğunlaştırılmasını sağlayarak klima sisteminin verimli çalışmasına yardımcı olan önemli bir klima bileşenidir. Webasto klima kondenseri, klima kompresöründen gelen yüksek basınçlı gazı soğutarak sıvı hale dönüştürür ve klima sisteminin daha etkili soğutma performansı sağlamasını destekler. Dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan Webasto klima kondenseri, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güvenilir bir şekilde kullanılmaktadır.

--------------------

Başlık : Delphi Klima Kompresörü Poli Trigal Kayış
Açıklama : Delphi klima kompresörü, araç klima sistemlerinde soğutucu gazın sıkıştırılmasını sağlayarak klima sisteminin çalışmasını mümkün kılan temel klima bileşenlerinden biridir. Delphi klima kompresörü, klima gazını yüksek basınç altında dolaştırarak sistemin soğutma performansını artırır ve araç içerisinde etkili bir soğutma sağlar. Dayanıklı yapısı ve yüksek performansı sayesinde Delphi klima kompresörü, özellikle minibüs, midibüs ve otobüs gibi ticari araçların klima sistemlerinde güvenilir şekilde kullanılmaktadır.

--------------------

Başlık : Delphi Klima Kompresörü V Kayış
Açıklama : Delphi klima kompresörü V kayış, araç klima kompresörünün motor gücünü alarak çalışmasını sağlayan önemli bir aktarma parçasıdır. Delphi klima kompresörü V kayış, motor kasnağından aldığı hareketi klima kompresörüne ileterek klima sisteminin sorunsuz şekilde çalışmasına yardımcı olur. Dayanıklı kauçuk ve lif takviyeli yapısı sayesinde uzun ömürlü kullanım sunan Delphi klima kompresörü V kayış, özellikle minibüs, midibüs ve otobüs gibi ticari araç klima sistemlerinde güvenilir performans sağlar.

--------------------

Başlık : Volkswagen Transporter Klima Kompresörü (Denso)
Açıklama : Volkswagen Transporter modelinizin klima sisteminin kalbi olan Denso marka Klima Kompresörü ile tanışın. Araç içi konforu en üst düzeye çıkarmak ve uzun ömürlü, güvenilir soğutma performansı elde etmek için tasarlanan bu yedek parça, orijinal ekipman kalitesini doğrudan kapınıza getiriyor.

--------------------

Başlık : Renault Master Klima Kompresörü (Valeo)
Açıklama : Yaz sıcaklarında aracınızın içindeki konforu korumak, sürüş güvenliğinizin ayrılmaz bir parçasıdır. Renault Master ticari araçlarınız için özel olarak tasarlanmış, yüksek performanslı ve dayanıklı Renault Master Klima Kompresörü (Valeo) ile aracınızın soğutma sistemini en üst seviyede güvence altına alın. Orijinal ekipman üreticisi (OEM) kalitesiyle bilinen Valeo güvencesi, size uzun ömürlü ve sorunsuz bir çalışma performansı sunar.

--------------------

Başlık : Volkswagen Transporter Klima Kompresörü
Açıklama : Volkswagen Transporter serisi ticari araçlarınızın klima sisteminin kalbi olan klima kompresörleri, yaz aylarında konforunuzu ve yolculuk güvenliğinizi doğrudan etkiler. Orijinal ekipman kalitesinde veya eşdeğeri yüksek standartlarda üretilmiş Volkswagen Transporter Klima Kompresörü arayışınızda, doğru adrestesiniz. Uzun ömürlü, yüksek verimli ve aracınızın orijinal spesifikasyonlarına tam uyumlu bu kompresörler ile aracınızın soğutma sistemini ilk günkü performansına geri kazandırın.

--------------------

Başlık : Volkswagen Crafter Klima Kompresörü (Denso)
Açıklama : Volkswagen Crafter ticari aracınızın iklimlendirme sisteminin kalbi olan klima kompresörünün performans kaybı yaşadığını mı düşünüyorsunuz? İşte bu soruna kesin ve güvenilir çözüm: Volkswagen Crafter Klima Kompresörü (Denso). Denso, otomotiv sektöründe dünya çapında bilinen, orijinal ekipman kalitesinde parça üretimiyle tanınan bir markadır. Bu kompresör, aracınızın klima sisteminin en kritik bileşenidir ve yaz aylarında konforunuzu doğrudan etkiler.

Crafter modeliniz için özel olarak tasarlanmış bu Denso kompresör, orijinal ekipman standartlarına tam uyum sağlayarak sorunsuz montaj ve uzun ömürlü performans garantisi sunar. Eski veya arızalı kompresörünüzün neden olduğu soğutmama, sesli çalışma veya gaz kaçağı gibi tüm problemleri ortadan kaldırır.

--------------------

Başlık : Volkswagen Crafter Klima Kompresörü
Açıklama : Volkswagen Crafter model aracınızın iklimlendirme sisteminin kalbi olan Klima Kompresörü, yaz aylarının bunaltıcı sıcağında konforunuzu garanti altına alan kritik bir yedek parçadır. Aracınızın orijinal performansını ve soğutma verimliliğini yeniden kazanmak için tasarlanmış bu yüksek kaliteli kompresör, uzun ömürlü kullanım ve mükemmel uyum sunar.

--------------------

Başlık : Renault Master Klima Kompresörü
Açıklama : Yaz aylarında aracınızın içindeki konforu en üst seviyeye taşımak için kritik bir yedek parça olan Renault Master Klima Kompresörü, aracınızın iklimlendirme sisteminin kalbidir. Orijinal ekipman kalitesinde üretilmiş bu kompresör, Renault Master modelinizin klima performansını ilk günkü verimliliğine geri döndürmek üzere tasarlanmıştır. Klima sisteminde hissedilen yetersiz soğutma, gürültü veya kompresörden gelen anormal sesler, değiştirilmesi gerektiğinin en büyük işaretleridir. Bu yüksek kaliteli yedek parça ile Master aracınızda kesintisiz ve etkili soğutmanın keyfini yeniden yaşayın.

--------------------

Başlık : Mercedes Vito Klima Kompresörü (Denso)
Açıklama : Araç klima sistemlerinin kalbi olan klima kompresörü, özellikle Mercedes Vito gibi ticari ve binek araçlarda konforun ve güvenli sürüşün temel taşıdır. Yüksek performanslı ve dayanıklı bir çözüm arayanlar için Mercedes Vito Klima Kompresörü (Denso), orijinal ekipman kalitesini ve üstün verimliliği bir araya getiriyor.
--------------------

Başlık : Mercedes Vito Klima Kompresörü
Açıklama : Mercedes Vito, ticari ve binek kullanımlarda konfor ve güvenilirliği bir araya getiren efsanevi bir araçtır. Ancak, yoğun kullanım koşullarında veya zamanla, aracınızın klima sistemi kritik bir bileşen olan klima kompresörüne ihtiyaç duyabilir. Orijinal ekipman standartlarında üretilmiş, yüksek performanslı Mercedes Vito Klima Kompresörü ile aracınızın soğutma kapasitesini ilk günkü seviyesine taşıyın.
--------------------

Başlık : Mercedes Sprinter Klima Kompresörü (Valeo)
Açıklama : Mercedes Sprinter aracınızın iklimlendirme sisteminin kalbi olan klima kompresörü, yolculuk konforunuzu doğrudan etkileyen kritik bir bileşendir. Yüksek performanslı ve güvenilir bir çözüm arıyorsanız, Valeo kalitesiyle üretilmiş bu orijinal ekipman kalitesindeki Mercedes Sprinter Klima Kompresörü tam size göre. Aracınızın orijinal klima performansını geri kazanmak ve uzun ömürlü bir çözüm elde etmek için ideal bir seçimdir.

--------------------

Başlık : Mercedes Sprinter Klima Kompresörü
Açıklama : Mercedes Sprinter, ticari araç kullanıcıları için güvenilirlik ve konforun simgesidir. Ancak, uzun yolculukların veya yoğun şehir trafiğinin vazgeçilmezi olan klima sisteminin kalbi olan Mercedes Sprinter Klima Kompresörü, zamanla aşınabilir ve performans kaybına uğrayabilir. Aracınızın kabin içi sıcaklığını ideal seviden tutmak, konforu artırmak ve sürücü yorgunluğunu azaltmak için orijinal standartlara uygun, yüksek kaliteli bir yedek kompresöre yatırım yapmalısınız.

--------------------

Başlık : Renault Master 3 Hazırlıksız Klima Braketi (2011-2019)
Açıklama : Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Renault Master 3 Hazırlıksız Klima Braketi (2011-2019) ile birlikte kullanılan Mercedes Sprinter Klima Kompresörü, güçlü ve verimli bir soğutma sistemi oluşturmanızı sağlar.

Sonradan klima takılacak araçlar için özel olarak geliştirilen bu sistem, doğru montaj ekipmanlarıyla birleştiğinde yüksek performans ve uzun ömürlü kullanım sunar.

--------------------

Başlık : Ford Transit 155’lik Kasnaklı Klima Braketi
Açıklama : Ticari araçlarda klima sistemi, özellikle yoğun kullanımda sürüş konforunu ve iş verimliliğini doğrudan etkiler. Ford Transit 155’lik Kasnaklı Klima Braketi, klima kompresörünün motora doğru ve sağlam şekilde bağlanmasını sağlayarak sistemin verimli çalışmasının temelini oluşturur.

Özellikle sonradan klima takılacak araçlar için geliştirilen bu braket sistemi, yüksek uyumluluk ve dayanıklılığı ile öne çıkar.

--------------------

Başlık : Ford Custom Klima Braketi
Açıklama : Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Ford Custom Klima Braketi, klima kompresörünün motora doğru ve sağlam şekilde monte edilmesini sağlayarak sistemin verimli ve uzun ömürlü çalışmasına katkı sağlar.

Özellikle sonradan klima sistemi kurulacak Ford Custom araçlar için tasarlanan bu braket, yüksek uyumluluk ve dayanıklılığı ile profesyonel çözümler sunar.

--------------------

Başlık : Fiat Ducato Klima Braket Gövdesi (2007-2017)
Açıklama : Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Fiat Ducato Klima Braket Gövdesi (2007-2017), klima kompresörünün motora sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin verimli çalışmasının temelini oluşturur.

Bu parça, özellikle sonradan klima kurulumu yapılacak Ducato modelleri için geliştirilmiş olup yüksek uyumluluk ve dayanıklılık sunar.

--------------------

Başlık : Mercedes Sprinter 2013 Model Sağ Klima Braketi
Açıklama : Ticari araçlarda klima sistemi, sürüş konforu ve verimlilik açısından büyük önem taşır. Mercedes Sprinter 2013 Model Sağ Klima Braketi, klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin verimli çalışmasına yardımcı olur.

Özellikle Sprinter araçlarda sağ taraf klima montajı için özel olarak tasarlanan bu braket, yüksek dayanıklılığı ve tam uyumu ile profesyonel çözümler sunar.

--------------------

Başlık : Mercedes Sprinter Euro 5 Klima Braketi (315)
Açıklama : Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Mercedes Sprinter Euro 5 Klima Braketi (315), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin maksimum verimle çalışmasına yardımcı olur.

Euro 5 motor yapısına sahip Sprinter 315 modeller için özel olarak tasarlanan bu braket, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarında tercih edilir.

--------------------

Başlık : Mercedes Sprinter Euro 3 Klima Braketi (313/413)
Açıklama : Ticari araçlarda klima sistemi, sürüş konforu ve iş verimliliği açısından büyük önem taşır. Mercedes Sprinter Euro 3 Klima Braketi (313/413), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin verimli ve uzun ömürlü çalışmasına katkı sağlar.

Euro 3 motor yapısına sahip Sprinter 313 ve 413 modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarında tercih edilir.

--------------------

Başlık : Mercedes Sprinter Euro 6 Klima Braketi (515)
Açıklama : Ticari araçlarda klima sistemi, özellikle uzun yol ve yoğun kullanımda sürüş konforunu doğrudan etkiler. Mercedes Sprinter Euro 6 Klima Braketi (515), klima kompresörünün motor üzerinde doğru konumda ve sağlam şekilde sabitlenmesini sağlayarak sistemin maksimum verimle çalışmasına katkı sağlar.

Euro 6 motor teknolojisine sahip Sprinter 515 modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve tam uyumu ile profesyonel klima kurulumlarının vazgeçilmez parçalarından biridir.

--------------------

Başlık : Mercedes Sprinter Kabin Klima Seti
Açıklama : Ticari araçlarda kabin içi konfor, sürüş güvenliği ve iş verimliliği açısından büyük önem taşır. Mercedes Sprinter Kabin Klima Seti, araç içinde ideal sıcaklık dengesini sağlayarak hem sürücü hem de yolcular için konforlu bir ortam oluşturur.

Özellikle sonradan klima sistemi kurulacak Sprinter araçlar için tasarlanan bu set, tüm gerekli bileşenleri bir arada sunarak pratik, güçlü ve uzun ömürlü bir çözüm sağlar.

--------------------

Başlık : Volkswagen Crafter Kabin Klima Seti
Açıklama : Ticari araçlarda klima sistemi, özellikle uzun yolculuklarda ve yoğun kullanımda sürüş konforu için vazgeçilmezdir. Volkswagen Crafter Kabin Klima Seti, araç içi sıcaklığı dengede tutarak sürücü ve yolcular için maksimum konfor sağlar.

Sonradan klima sistemi kurulumu için ideal olan bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir çözüm oluşturur.

--------------------

Başlık : Fiat Ducato Kabin Klima Seti
Açıklama : Ticari araçlarda klima sistemi, özellikle yoğun kullanım ve uzun yol şartlarında sürüş konforunun en önemli unsurlarından biridir. Fiat Ducato Kabin Klima Seti, araç içi sıcaklığı dengede tutarak sürücü ve yolcular için ideal bir ortam oluşturur.

Sonradan klima sistemi kurulacak Ducato araçlar için özel olarak geliştirilen bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir çözüm sağlar.

--------------------

Başlık : Citroën Jumper Kabin Klima Seti
Açıklama : Ticari araçlarda klima sistemi, sürüş konforu ve verimlilik açısından kritik bir rol oynar. Citroën Jumper Kabin Klima Seti, araç içi sıcaklığı dengede tutarak hem sürücü hem de yolcular için konforlu bir ortam sağlar.

Sonradan klima sistemi kurulumu için özel olarak tasarlanan bu set, tüm gerekli bileşenleri bir arada sunarak güçlü, verimli ve uzun ömürlü bir klima çözümü sunar.

--------------------

Başlık : Albatros Klima Kapağı
Açıklama : Ticari araçlarda klima sisteminin dış etkenlerden korunması, sistemin uzun ömürlü ve verimli çalışması için büyük önem taşır. Albatros Klima Kapağı, klima sistemini darbelere, toza, güneş ışınlarına ve çevresel etkilere karşı koruyarak performansın korunmasına yardımcı olur.

Özellikle kabin üstü veya dış ünite klima sistemlerinde kullanılan bu kapak, hem koruma hem de estetik görünüm açısından önemli bir parçadır.

--------------------

Başlık : COOLERTECH Klima Kapağı
Açıklama : Ticari araçlarda kullanılan klima sistemlerinin dış etkenlere karşı korunması, sistemin performansı ve ömrü açısından büyük önem taşır. CoolerTech Klima Kapağı, klima ünitesini güneş, yağmur, toz ve darbelere karşı koruyarak daha uzun ömürlü ve verimli kullanım sağlar.

Özellikle kabin üstü ve dış ünite klima sistemlerinde kullanılan bu kapak, hem koruyucu hem de estetik bir çözüm sunar.

--------------------

Başlık : COOLERTECH / Coolman Klima Düğmesi
Açıklama : Ticari araçlarda klima sisteminin verimli kullanılabilmesi için kontrol bileşenleri büyük önem taşır. COOLERTECH / Coolman Klima Düğmesi, klima sistemini kolay, hızlı ve hassas bir şekilde kontrol etmenizi sağlayarak sürüş konforunu artırır.

Ergonomik tasarımı ve dayanıklı yapısı sayesinde uzun ömürlü kullanım sunan bu klima düğmesi, özellikle yoğun kullanımda güvenilir performans sağlar.

--------------------

Başlık : COOLERTECH / Coolman Klima Kondansörü (Peteği)
Açıklama : Ticari araç klima sistemlerinde soğutma performansının en önemli parçalarından biri **kondansör (klima peteği)**dir. COOLERTECH / Coolman Klima Kondansörü (Peteği), klima gazının soğutulmasını sağlayarak sistemin verimli ve güçlü çalışmasına yardımcı olur.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum performans sunar.

--------------------

Başlık : Safkar Klima Fanı
Açıklama : Ticari araç klima sistemlerinde hava sirkülasyonu, soğutma performansının en kritik unsurlarından biridir. Safkar Klima Fanı, klima sisteminin verimli çalışmasını sağlayarak kabin içi hava dağılımını optimize eder ve hızlı soğutma sağlar.

Yüksek devir gücü ve dayanıklı motor yapısı sayesinde, yoğun kullanımda bile stabil ve güçlü performans sunar.

--------------------

Başlık : Safkar Klima Soğutucu Kapağı
Açıklama : Ticari araç klima sistemlerinde dış ünitenin korunması ve hava akışının doğru yönlendirilmesi, sistem performansı açısından büyük önem taşır. Safkar Klima Soğutucu Kapağı, klima sistemini dış etkenlere karşı korurken aynı zamanda hava sirkülasyonunu optimize ederek daha verimli soğutma sağlar.

Dayanıklı yapısı ve profesyonel tasarımı sayesinde özellikle otobüs ve ticari araçlarda uzun ömürlü kullanım sunar.

--------------------

Başlık : Safkar Klima Düğmesi
Açıklama : Ticari araç klima sistemlerinde kontrol bileşenleri, sistemin verimli ve doğru çalışması açısından büyük önem taşır. Safkar Klima Düğmesi, klima sistemini kolay, hızlı ve hassas şekilde yönetmenizi sağlayarak sürüş konforunu artırır.

Ergonomik tasarımı ve dayanıklı yapısı sayesinde yoğun kullanımda bile uzun ömürlü ve stabil performans sunar.

--------------------

Başlık : Volkswagen Volt Klima Braketi
Açıklama : Ticari araçlarda klima sisteminin verimli çalışabilmesi için montaj ekipmanlarının doğru seçilmesi büyük önem taşır. Volkswagen Volt Klima Braketi, klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin performansını maksimum seviyeye çıkarır.

Dayanıklı yapısı ve yüksek uyumluluğu sayesinde, hem sonradan klima kurulumu hem de mevcut sistemlerin güçlendirilmesi için ideal bir çözümdür.

--------------------

Başlık : Peugeot Boxer / Citroën Jumper Yeni Model Klima Braketi
Açıklama : Ticari araçlarda klima sisteminin verimli çalışabilmesi için doğru montaj ekipmanlarının kullanılması büyük önem taşır. Peugeot Boxer / Citroën Jumper Yeni Model Klima Braketi, klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin maksimum performansla çalışmasına yardımcı olur.

Yeni kasa Boxer ve Jumper modeller için özel olarak tasarlanan bu klima braketi, yüksek dayanıklılığı ve birebir uyumu ile profesyonel klima kurulumlarının vazgeçilmez parçalarından biridir.

--------------------

Başlık : Peugeot Boxer / Citroën Jumper Kasnaklı (2007-2017)
Açıklama : Ticari araçlarda klima sisteminin verimli çalışabilmesi için montaj ekipmanlarının doğru seçilmesi büyük önem taşır. Peugeot Boxer / Citroën Jumper Kasnaklı (2007-2017), klima kompresörünün motor üzerine sağlam ve doğru şekilde sabitlenmesini sağlayarak sistemin maksimum performansla çalışmasına yardımcı olur.

Kasnaklı yapısı sayesinde kayış sistemi ile tam uyum sağlayan bu braket, 2007-2017 model Boxer ve Jumper araçlar için özel olarak tasarlanmıştır.

--------------------

Başlık : Otokar Sultan Klima Fanı
Açıklama : Ticari ve yolcu taşımacılığında kullanılan araçlarda klima sisteminin verimli çalışması, konfor açısından büyük önem taşır. Otokar Sultan Klima Fanı, kabin içi hava sirkülasyonunu artırarak klima sisteminin daha hızlı ve etkili soğutma sağlamasına yardımcı olur.

Yüksek performanslı motor yapısı ve dayanıklı tasarımı sayesinde, yoğun kullanımda bile stabil ve güçlü hava akışı sunar.

--------------------

Başlık : Isuzu Nova Klima Kondansörü
Açıklama : Toplu taşıma ve ticari araçlarda klima sisteminin verimli çalışması, yolcu konforu açısından kritik öneme sahiptir. Isuzu Nova Klima Kondansörü (Peteği), klima gazının soğutulmasını sağlayarak sistemin daha güçlü ve stabil çalışmasına yardımcı olur.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum soğutma performansı sunar.

--------------------

Başlık : Isuzu Nova Klima Kompresörü TM21
Açıklama : Toplu taşıma ve ticari araçlarda klima sisteminin en kritik parçası olan kompresör, sistemin verimli çalışmasını sağlar. Isuzu Nova Klima Kompresörü TM21, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak güçlü ve stabil bir soğutma performansı sunar.

Yoğun kullanım koşullarına uygun olarak üretilen TM21 kompresör, dayanıklı yapısı ve yüksek performansı ile uzun ömürlü bir çözüm sağlar.

--------------------

Başlık : Safkar S75 Klima Kondansörü
Açıklama : Toplu taşıma ve ticari araçlarda klima sisteminin verimli çalışması, yolcu konforu açısından kritik öneme sahiptir. Safkar S75 Klima Kondansörü (Peteği), klima gazını etkili şekilde soğutarak sistemin güçlü ve stabil çalışmasını sağlar.

Yüksek ısı transfer kapasitesi ve dayanıklı yapısı sayesinde, yoğun kullanımda bile maksimum performans sunar.

--------------------

Başlık : Albatros Klima Kondansörü (Peteği)
Açıklama : Ticari araç klima sistemlerinde soğutma performansını belirleyen en önemli bileşenlerden biri kondansördür. Albatros Klima Kondansörü (Peteği), klima gazını hızlı ve etkili şekilde soğutarak sistemin yüksek verimle çalışmasını sağlar.

Dayanıklı yapısı ve yüksek ısı transfer kapasitesi sayesinde, yoğun kullanım şartlarında bile maksimum performans sunar.

--------------------

Başlık : 2 Fanlı Klima Kapağı
Açıklama : Ticari araç klima sistemlerinde dış ünitenin korunması ve hava sirkülasyonunun doğru sağlanması, sistem performansı açısından kritik öneme sahiptir. 2 Fanlı Klima Kapağı, klima sistemini dış etkenlerden korurken aynı zamanda çift fan yapısı sayesinde daha güçlü hava akışı sağlayarak soğutma performansını artırır.

Özellikle kabin üstü klima sistemlerinde tercih edilen bu ürün, hem koruma hem de performans odaklı bir çözümdür.

--------------------

Başlık : 3 Fanlı Klima Kapağı
Açıklama : Ticari araç klima sistemlerinde yüksek performans elde etmek için hava sirkülasyonu ve dış koruma büyük önem taşır. 3 Fanlı Klima Kapağı, üçlü fan sistemi sayesinde maksimum hava akışı sağlayarak klima performansını artırırken, dış üniteyi de çevresel etkenlere karşı korur.

Yoğun kullanımda ve büyük hacimli araçlarda tercih edilen bu sistem, güçlü soğutma ve uzun ömürlü kullanım sunar.

--------------------

Başlık : Webasto Klima Kapağı
Açıklama : Ticari araçlarda klima sistemlerinin dış etkenlere karşı korunması, sistem performansı ve uzun ömür açısından kritik öneme sahiptir. Webasto Klima Kapağı, klima ünitesini güneş, yağmur, toz ve darbelere karşı koruyarak güvenli ve verimli kullanım sağlar.

Özellikle kabin üstü klima sistemlerinde tercih edilen bu kapak, hem koruyucu hem de estetik bir çözüm sunar.

--------------------

Başlık : Webasto Klima Filtresi
Açıklama : Ticari araç klima sistemlerinde hava kalitesi ve sistem verimliliği açısından filtreler büyük önem taşır. Webasto Klima Filtresi, klima sistemine giren havayı toz, polen ve zararlı partiküllerden arındırarak hem sağlıklı hem de verimli bir kullanım sağlar.

Düzenli filtre kullanımı, klima sisteminin performansını artırırken aynı zamanda diğer bileşenlerin ömrünü de uzatır.

--------------------

Başlık : Webasto Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinin kalbi olan kompresör, sistemin verimli çalışmasını sağlayan en önemli bileşendir. Webasto Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak güçlü ve stabil bir soğutma performansı sunar.

Yoğun kullanım şartlarına uygun olarak tasarlanan bu kompresör, dayanıklı yapısı ve yüksek verimliliği ile uzun ömürlü bir çözüm sağlar.

--------------------

Başlık : Yılkar Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinin en kritik bileşeni olan kompresör, sistemin verimli ve güçlü çalışmasını sağlar. Yılkar Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak hızlı ve dengeli bir soğutma performansı sunar.

Yoğun kullanım koşullarına uygun olarak tasarlanan bu kompresör, dayanıklı yapısı ve uzun ömürlü performansı ile ticari araçlar için ideal bir çözümdür.

--------------------

Başlık : Citroën Jumper Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinin en önemli bileşeni olan kompresör, sistemin verimli ve güçlü çalışmasını sağlar. Citroën Jumper Klima Kompresörü, klima gazını yüksek basınçla dolaştırarak kabin içi sıcaklığın hızlı ve dengeli şekilde düşmesini sağlar.

Yoğun kullanım şartlarına uygun olarak üretilen bu kompresör, dayanıklı yapısı ve yüksek performansı ile uzun ömürlü bir çözüm sunar.

--------------------

Başlık : Mercedes Yeni Kasa Sanden Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinde performansı belirleyen en önemli bileşen kompresördür. Mercedes Yeni Kasa Sanden Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını güçlü şekilde dolaştırarak kabin içi sıcaklığı hızlı ve dengeli şekilde düşürür.

Sanden markası, dünya genelinde OEM (orijinal ekipman) üreticilerine yüksek kaliteli kompresörler sunan güvenilir bir markadır ve birçok araçta tercih edilmektedir.


--------------------

Başlık : Volkswagen Crafter Sanden Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinde performansın temelini kompresör oluşturur. Volkswagen Crafter Sanden Klima Kompresörü, yüksek basınç üretme kapasitesi sayesinde klima gazını etkili şekilde dolaştırarak kabin içi sıcaklığı hızlı ve dengeli şekilde düşürür.

Sanden kompresörler, ağır hizmet tipi yapıları ve OEM kaliteleri ile özellikle Volkswagen Crafter gibi ticari araçlarda yaygın olarak tercih edilmektedir.

--------------------

Başlık : Ford Transit Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinde en önemli bileşenlerden biri olan kompresör, sistemin verimli çalışmasını sağlar. Ford Transit Klima Kompresörü, klima gazını yüksek basınçla dolaştırarak kabin içi sıcaklığın hızlı ve dengeli şekilde düşmesini sağlar.

Ford Transit modellerine özel olarak üretilen kompresörler, farklı motor ve kasa seçeneklerine uyum sağlayarak uzun ömürlü ve yüksek performanslı kullanım sunar.

--------------------

Başlık : Fiat Ducato 6PK Klima Kompresörü
Açıklama : Ticari araç klima sistemlerinde en kritik bileşenlerden biri olan kompresör, sistemin verimli çalışmasını sağlar. Fiat Ducato 6PK Klima Kompresörü, 6 kanallı kasnak yapısı sayesinde kayış sistemi ile uyumlu çalışarak klima gazını yüksek basınçla dolaştırır ve güçlü bir soğutma performansı sunar.

Özellikle Ducato, Boxer ve Jumper gibi aynı platform araçlarda yaygın olarak kullanılan bu kompresör tipi, dayanıklılığı ve yüksek performansı ile öne çıkar."""

blocks = re.split(r"-{10,}", data)
products = []

image_files = os.listdir("public/yedek-parca")

def slugify(text):
    text = text.lower()
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('ascii')
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text)
    return text.strip('-')

js_objects = []

for idx, block in enumerate(blocks):
    block = block.strip()
    if not block: continue
    
    # parse Başlık and Açıklama
    title_match = re.search(r"[Bb]a[şs]l[ıi]k\s*:\s*(.+)", block)
    desc_match = re.search(r"[Aa][çc][ıi]klama\s*:\s*(.+)", block, re.DOTALL)
    
    if not title_match or not desc_match: continue
    
    title = title_match.group(1).strip()
    desc = desc_match.group(1).strip()
    
    # generate id
    pid = "yp-" + slugify(title)
    
    # find best image
    best_img = None
    target_slug = slugify(title)
    # let's try exact match with image name (minus extension)
    for img in image_files:
        img_basename = os.path.splitext(img)[0]
        if slugify(img_basename) == target_slug:
            best_img = "/yedek-parca/" + img
            break
            
    if not best_img:
        # maybe partial match
        # sort by most word overlaps
        target_words = set(target_slug.split('-'))
        best_count = 0
        for img in image_files:
            img_basename = os.path.splitext(img)[0]
            img_words = set(slugify(img_basename).split('-'))
            overlap = len(target_words & img_words)
            if overlap > best_count:
                best_count = overlap
                best_img = "/yedek-parca/" + img
    
    if desc:
        img_str = "'" + best_img + "'" if best_img else ""
        js_obj = "  {\n"
        js_obj += f"    id: '{pid}',\n"
        js_obj += "    brandId: 'yedek-parca',\n"
        js_obj += f"    name: '{title.replace(chr(39), chr(92)+chr(39))}',\n"
        js_obj += f"    images: [{img_str}],\n"
        js_obj += f"    description: `{desc.replace('`', chr(39))}`,\n"
        js_obj += "    category: 'Yedek Parça'\n  }"
        js_objects.append(js_obj)

output_js = ",\n".join(js_objects)

# inject into mockData.ts
with open("src/data/mockData.ts", "r", encoding="utf-8") as f:
    mock_content = f.read()

if "];\nexport const services = [" in mock_content:
    mock_content = mock_content.replace("];\nexport const services = [", ",\n" + output_js + "\n];\nexport const services = [")
else:
    print("Could not find insertion point!")

with open("src/data/mockData.ts", "w", encoding="utf-8") as f:
    f.write(mock_content)

print(f"Added {len(js_objects)} spare parts to mockData.ts")
