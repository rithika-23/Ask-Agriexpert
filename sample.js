//accepting number from user and printing factors on webpage

let input = document.querySelector("#text");
let inpBtn = document.querySelector(".inpBtn");
let sentence = document.querySelector("#sentence");
let result = document.querySelector(".result");


inpBtn.addEventListener("click", () => {
    let text = input.value;
    if(text.includes("fertilizer"))
        sentence.textContent = "The most common and important N fertilizers are ammonium sulphate and urea which are used for crop production. Many different chemical and physical forms of nitrogen (N) fertilizers exist. Some of the more common fertilizer nitrogen sources are given here. The nitrogen in most farm-grade fertilizers is readily available"
    else if(text.includes("wheat") && text.includes("harvested"))
        sentence.textContent = "The sowing of the seeds also takes place in winters from October to December. It usually takes 7-8 months for a wheat crop to mature before you can harvest it from February to May."
    else if( text.includes("diseases"))
        sentence.textContent = "Some vegetable plant diseases are characterized by a variety of symptoms, including moldy coatings, wilting, scabs, blotches, rusts, and rot. Anthracnose – Tomatoes, cucumbers, melons, and beans are most affected by anthracnose. Symptoms have fruits and pods with small, sunken spots. Pinkish spores appear in the center of the spots in wet weather."
    else if(text.includes("pesticide"))
        sentence.textContent = "(B)-BHC is the most commonly used pesticide in India. It accounts for roughly half of the total amount of pesticides used in India. BHC is a highly toxic, non-specific organochlorine insecticide that is primarily used for agricultural purposes."
    else if(text.includes("best summer"))
        sentence.textContent = "Cucumber  This is one of the best-grown summer crops in India .Cucumbers are one of the most popular vegetables during the summer season. Cucumbers are consumed raw in the form of salads, or as part of beverages. Cucumbers are a classic summer vegetable."
    else if(text.includes("symptoms") ) 
        sentence.textContent = "The symptoms of crop diseases caused by virus are malformations, such as abnormal growth of shoots, distortion of leaves and flowers; necrosis, wilting and the appearance of annular stripes and spots; dwarfism, growth retardation of both individual parts and the whole plant"
    else if(text.includes("land preparation"))
        sentence.textContent = "The soil having pH 5-7 is considered good for its cultivation. The land should be leveled after every ploughing and apply enough cow dung .  "
    else if(text.includes("sowing"))
    sentence.textContent="The seeds are dropped into furrow lines in a continuous flow & are covered with soil. The seeds must be sown at proper depths & spaces"
    else if(text.includes("fertilization"))
    sentence.textContent="15 to 30 lb. N per acre is recommended to be sprayed either before or at the time of seeding. The remaining fertilizer N should be top dressed."
    else if(text.includes("prefer"))
    sentence.textContent="The cropping season in India starts in June and ends in October where monsoon crops are cultivated and harvested(Kharif season). Crops grown: rice, sorghum, maize, tea, rubber, coffee, guar, Sesame, cereals such as Arhar Dhal, pearl millet, soybeans, cotton, oilseeds, etc. The season where crops are sown in mid-November and harvested in April/May is called Rabi Season. Some important Rabi Crops are: wheat, oats, barley, pulses, cereals, oilseeds, linseed, etc.The Zaid crops, also called summer crops, are sown and harvested between March and June. Some important Zaid Crops are:Pumpkin, Cucumber, Bitter Gourd, Seasonal fruits and vegetables"
})