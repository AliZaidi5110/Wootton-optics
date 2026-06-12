import type { BlogPost } from "@/types";

const authors = {
  clinical: {
    name: "Wootton Clinical Team",
    bio: "Qualified audiologists and dispensing opticians at Wootton Optician & Hearing Care, Northampton.",
  },
  margaret: {
    name: "Wootton Clinical Team",
    bio: "Qualified audiologists and dispensing opticians at Wootton Optician & Hearing Care, Northampton.",
  },
  daniel: {
    name: "Wootton Clinical Team",
    bio: "Qualified audiologists and dispensing opticians at Wootton Optician & Hearing Care, Northampton.",
  },
  sarah: {
    name: "Wootton Clinical Team",
    bio: "Qualified audiologists and dispensing opticians at Wootton Optician & Hearing Care, Northampton.",
  },
};

function createPost(
  slug: string,
  title: string,
  excerpt: string,
  content: string,
  category: BlogPost["category"],
  author: keyof typeof authors,
  datePublished: string,
  tags: string[],
  featured = false
): BlogPost {
  return {
    slug,
    title,
    excerpt,
    content,
    category,
    author: authors[author].name,
    authorBio: authors[author].bio,
    datePublished,
    dateModified: datePublished,
    readTime: Math.max(5, Math.ceil(content.split(" ").length / 200)),
    image: `/blog/${slug}.jpg`,
    imageAlt: title,
    tags,
    featured,
  };
}

export const blogPosts: BlogPost[] = [
  createPost(
    "hearing-aids-ilford-complete-guide",
    "Hearing Aids in Ilford: The Complete 2025 Guide",
    "Everything you need to know about choosing, fitting, and maintaining hearing aids in Ilford, Essex. Expert advice from Wootton Hearing Care.",
    `Choosing the right hearing aids in Ilford can feel overwhelming, but with the right guidance from a trusted local audiologist, the process becomes straightforward and rewarding. At Wootton Hearing Care on Cranbrook Road, we have helped thousands of Essex residents rediscover clear hearing.

## Why Choose a Local Hearing Care Provider?

Local hearing care providers like Wootton Hearing offer advantages that online retailers simply cannot match. Face-to-face consultations, custom ear impressions, real-time adjustments, and ongoing aftercare are essential for hearing aid success. Our Ilford clinic provides all of this under one roof.

## Types of Hearing Aids Available

Modern hearing aids come in several styles, each suited to different degrees of hearing loss and lifestyle preferences:

**Behind-the-Ear (BTE):** Versatile and powerful, suitable for mild to profound hearing loss. Modern BTE models are far more discreet than older designs.

**Receiver-in-Canal (RIC):** Our most popular choice in Ilford. These offer excellent sound quality with a nearly invisible profile.

**In-the-Ear (ITE):** Custom-moulded for comfort and security. Available in full-shell and half-shell designs.

**Completely-in-Canal (CIC) and Invisible-in-Canal (IIC):** Maximum discretion for those who prefer an invisible solution.

## The Fitting Process at Wootton Hearing

Our fitting process follows best clinical practice: comprehensive hearing assessment, lifestyle consultation, recommendation of suitable models, custom programming, trial period, and ongoing fine-tuning. We never rush this process because the right fit makes all the difference.

## Costs and Funding Options

Hearing aid prices in the UK range from approximately £495 to £3,500 per aid depending on technology level. We offer transparent pricing, trial periods, and can advise on insurance and employer benefit schemes. NHS referrals are also available for eligible patients.

## Aftercare Matters

Hearing aids require regular maintenance, reprogramming as your hearing changes, and professional cleaning. Our included aftercare programme ensures your investment continues to perform optimally for years.

Book your free hearing consultation at our Ilford clinic today and take the first step toward better hearing.`,
    "hearing-health",
    "margaret",
    "2025-05-15",
    ["hearing aids Ilford", "hearing care Essex", "hearing test Ilford"],
    true
  ),
  createPost(
    "signs-you-need-hearing-test",
    "10 Signs You Need a Hearing Test",
    "Recognise the early warning signs of hearing loss and learn when to book a professional hearing assessment in Essex.",
    `Hearing loss often develops gradually, making it easy to miss the early signs. Research suggests people wait an average of seven years before seeking help. Here are ten signs that indicate it is time for a hearing test at Wootton Hearing Care.

## 1. You Frequently Ask People to Repeat Themselves
If "pardon?" has become your most-used word, it may indicate high-frequency hearing loss affecting consonant sounds.

## 2. Family Complains the TV Is Too Loud
When others comment on volume levels, your hearing may have shifted without you noticing.

## 3. Difficulty Following Conversations in Noisy Places
Restaurants, parties, and busy environments become challenging when background noise overwhelms speech.

## 4. You Feel Exhausted After Social Events
Straining to hear causes listening fatigue — a hallmark of untreated hearing loss.

## 5. You Avoid Phone Calls
Difficulty hearing on the phone, especially without visual cues, is a common early indicator.

## 6. Tinnitus (Ringing in the Ears)
Persistent ringing, buzzing, or humming often accompanies hearing loss and warrants professional assessment.

## 7. Misunderstanding Conversations
Mishearing words leads to inappropriate responses and social embarrassment.

## 8. Colleagues Notice Communication Issues
Workplace feedback about missed instructions or meeting participation is a significant red flag.

## 9. You Rely on Lip Reading
Watching mouths rather than making eye contact suggests compensatory behaviour for hearing difficulty.

## 10. It Has Been Over Two Years Since Your Last Test
Even without symptoms, regular hearing checks after age 50 are recommended.

Our free hearing consultations in Ilford take just 60 minutes and could change your life. Book online today.`,
    "hearing-health",
    "sarah",
    "2025-05-10",
    ["hearing test", "hearing loss signs", "Ilford audiologist"]
  ),
  createPost(
    "hearing-aid-technology-2025",
    "Latest Hearing Aid Technology in 2025",
    "Explore cutting-edge hearing aid features including AI, Bluetooth streaming, and rechargeable batteries available in Essex.",
    `Hearing aid technology has advanced dramatically. Today's devices are miniature computers that adapt to your environment in real time. Here is what is available at Wootton Hearing Care in 2025.

## Artificial Intelligence and Machine Learning
Modern hearing aids use AI to analyse your sound environment 500+ times per second, automatically adjusting settings for speech clarity in noise, wind reduction, and feedback management.

## Bluetooth Connectivity
Stream phone calls, music, and television audio directly to your hearing aids. Many models now support hands-free calling on both iPhone and Android devices.

## Rechargeable Technology
Lithium-ion rechargeable batteries provide a full day of use on a single charge. No more fiddling with tiny batteries — simply place aids in their charger overnight.

## Remote Programming
Many adjustments can now be made remotely via smartphone apps, reducing the need for clinic visits while maintaining professional oversight.

## Health Monitoring
Some premium models track physical activity, detect falls, and monitor social engagement — valuable features for independent living.

Visit our Ilford showroom to experience the latest technology firsthand with a free demonstration.`,
    "hearing-health",
    "margaret",
    "2025-04-28",
    ["hearing aid technology", "rechargeable hearing aids", "Bluetooth hearing aids"]
  ),
  createPost(
    "tinnitus-management-guide",
    "Understanding and Managing Tinnitus",
    "A comprehensive guide to tinnitus causes, treatments, and coping strategies from our Ilford audiologists.",
    `Tinnitus affects approximately 15% of the UK population. While often described as ringing, it can also present as buzzing, humming, or whistling. Understanding tinnitus is the first step toward effective management.

## What Causes Tinnitus?
Common causes include noise exposure, age-related hearing loss, ear infections, earwax buildup, certain medications, and stress. Sometimes no clear cause is identified.

## The Link Between Tinnitus and Hearing Loss
Up to 80% of tinnitus sufferers also have hearing loss. Addressing the hearing loss with properly fitted hearing aids often reduces tinnitus perception significantly.

## Management Strategies
**Sound therapy:** Background sounds mask tinnitus perception. **Hearing aids with tinnitus programmes:** Built-in masking features provide relief. **Cognitive behavioural therapy:** Helps change emotional response to tinnitus. **Stress management:** Relaxation techniques reduce tinnitus intensity. **Lifestyle changes:** Reducing caffeine, alcohol, and salt can help some sufferers.

## When to Seek Help
Sudden onset tinnitus, tinnitus in one ear only, or tinnitus accompanied by dizziness or hearing loss requires prompt medical assessment.

Our audiologists in Ilford offer tinnitus assessments and personalised management plans. Contact Wootton Hearing Care to book your consultation.`,
    "hearing-health",
    "sarah",
    "2025-04-15",
    ["tinnitus", "tinnitus treatment", "hearing care Ilford"]
  ),
  createPost(
    "protecting-hearing-at-work",
    "Protecting Your Hearing in the Workplace",
    "Essential guide to occupational hearing protection for workers in Essex and London.",
    `Occupational noise exposure is one of the leading preventable causes of hearing loss. Whether you work in construction, manufacturing, music, or hospitality, protecting your hearing is essential.

## Understanding Safe Noise Levels
Sounds above 85 decibels (dB) can cause permanent damage with prolonged exposure. A typical construction site reaches 100+ dB. Without protection, damage can occur in under 15 minutes.

## Types of Hearing Protection
**Foam earplugs:** Basic, inexpensive protection. **Custom moulded earplugs:** Comfortable, high-attenuation protection fitted to your ear canal. **Earmuffs:** Over-ear protection suitable for intermittent use. **Electronic protection:** Allows speech through while blocking harmful noise.

## Employer Responsibilities
UK employers must assess noise risks, provide hearing protection, and offer hearing surveillance for workers exposed above action levels.

## Custom Hearing Protection at Wootton
We create custom moulded earplugs for musicians, industrial workers, and anyone needing reliable protection without sacrificing comfort. Book an impression appointment at our Cranbrook Road clinic.`,
    "hearing-health",
    "margaret",
    "2025-04-01",
    ["hearing protection", "workplace safety", "custom earplugs"]
  ),
  createPost(
    "children-hearing-health",
    "Children's Hearing Health: What Parents Should Know",
    "Essential information for parents about children's hearing development, screening, and when to seek help.",
    `Children's hearing is crucial for speech development, learning, and social interaction. Early detection of hearing problems makes a significant difference to outcomes.

## Newborn Hearing Screening
All UK babies receive newborn hearing screening within days of birth. However, hearing loss can develop later in childhood.

## Signs of Hearing Problems in Children
Not responding to their name by 12 months, delayed speech development, speaking loudly, turning up TV volume, inattentiveness, and frequent ear infections all warrant investigation.

## Common Childhood Hearing Issues
**Glue ear (otitis media with effusion):** Fluid buildup behind the eardrum, extremely common in young children. **Ear infections:** Recurrent infections can affect hearing temporarily or permanently. **Congenital hearing loss:** Present from birth, often genetic.

## When to Test
If you have concerns at any age, do not wait. Our Ilford clinic offers paediatric hearing assessments in a child-friendly environment.

## Protecting Young Ears
Limit headphone volume to 60% maximum, ensure regular hearing breaks, use volume-limiting headphones, and protect ears at loud events with child-sized ear defenders.

Contact Wootton Hearing Care for children's hearing assessments in Essex.`,
    "hearing-health",
    "sarah",
    "2025-03-20",
    ["children hearing", "paediatric audiology", "glue ear"]
  ),
  createPost(
    "hearing-aids-vs-amplifiers",
    "Hearing Aids vs Personal Sound Amplifiers: Know the Difference",
    "Why professionally fitted hearing aids outperform over-the-counter amplifiers for most people.",
    `The rise of over-the-counter (OTC) hearing devices has created confusion. Understanding the difference between hearing aids and personal sound amplifiers (PSAPs) is essential for making the right choice.

## What Are PSAPs?
Personal sound amplifiers simply make all sounds louder. They do not address specific frequency losses, cannot be custom-programmed, and lack professional fitting.

## What Makes Hearing Aids Different?
Hearing aids are medical devices programmed to your specific audiogram. They amplify only the frequencies you need, reduce background noise, manage feedback, and adapt to environments automatically.

## The Importance of Professional Fitting
An audiologist identifies your exact hearing profile, recommends appropriate technology, takes custom impressions, programmes devices precisely, and provides ongoing adjustments. This clinical process cannot be replicated by self-fitting devices.

## When OTC Devices May Be Suitable
Mild, age-related hearing loss in adults who cannot access professional care may benefit temporarily. However, professional assessment first ensures no underlying medical conditions are missed.

## Our Recommendation
Visit Wootton Hearing Care for a free assessment before purchasing any hearing device. We will give you honest advice about what will genuinely help your hearing.`,
    "hearing-health",
    "margaret",
    "2025-03-08",
    ["hearing aids vs amplifiers", "OTC hearing aids", "professional fitting"]
  ),
  createPost(
    "eye-test-essex-importance",
    "Why Regular Eye Tests Matter: An Essex Optician's Guide",
    "Discover why routine eye examinations are essential for vision health and early disease detection.",
    `Regular eye tests do far more than update your glasses prescription. They are a vital health check that can detect serious conditions before symptoms appear.

## What Happens During an Eye Test?
Our comprehensive examination at Wootton Optics includes vision assessment, eye pressure measurement, retinal examination, visual field testing, and assessment of eye muscle coordination.

## Conditions Detected by Eye Tests
**Glaucoma:** The silent thief of sight, detectable through pressure and optic nerve assessment. **Cataracts:** Clouding of the lens, common with age. **Macular degeneration:** Leading cause of vision loss in over-50s. **Diabetic retinopathy:** Damage to retinal blood vessels. **High blood pressure and diabetes:** Often first detected during eye examinations.

## How Often Should You Test?
Adults: every two years. Over 40s: annually. Children: annually from age 4. Contact lens wearers: annually minimum. Diabetics: annual diabetic screening.

## NHS Eye Tests in Essex
You qualify for free NHS eye tests if you are under 16, over 60, diagnosed with glaucoma or diabetes, registered partially sighted, at risk of glaucoma, or on certain benefits.

Book your eye test at our Ilford practice on Cranbrook Road. NHS and private appointments available.`,
    "eye-care",
    "daniel",
    "2025-05-12",
    ["eye test Essex", "optical services Ilford", "NHS eye test"],
    true
  ),
  createPost(
    "choosing-right-eyewear",
    "How to Choose the Perfect Eyewear for Your Face Shape",
    "Expert frame styling advice from Wootton Optics to help you find glasses that complement your features.",
    `The right frames enhance your features and express your personality. The wrong frames can overwhelm your face. Our frame styling guide helps you make the perfect choice.

## Determining Your Face Shape
**Round:** Soft curves, similar width and length. **Oval:** Balanced proportions, gently curved jaw. **Square:** Strong jawline, similar width at forehead and jaw. **Heart:** Wider forehead, narrow chin. **Diamond:** Narrow forehead and jaw, wide cheekbones.

## Frame Recommendations by Face Shape
**Round faces:** Angular, rectangular frames add definition. **Oval faces:** Most styles work — maintain proportional balance. **Square faces:** Round or oval frames soften angular features. **Heart faces:** Bottom-heavy frames or rimless styles balance proportions. **Diamond faces:** Cat-eye or oval frames highlight cheekbones.

## Beyond Face Shape
Consider your skin tone (warm or cool), hair colour, lifestyle (active vs professional), prescription strength (high prescriptions suit smaller frames), and personal style preferences.

## Visit Our Frame Gallery
Wootton Optics stocks 100+ styles from designer and everyday brands. Our frame stylists provide complimentary styling consultations. Visit us on Cranbrook Road, Ilford.`,
    "eye-care",
    "daniel",
    "2025-04-22",
    ["eyewear", "glasses frames", "face shape glasses"]
  ),
  createPost(
    "blue-light-glasses-truth",
    "Blue Light Glasses: Do They Really Work?",
    "Separating fact from fiction about blue light filtering lenses and digital eye strain.",
    `Blue light glasses have become enormously popular, but do they live up to the claims? As dispensing opticians, we provide evidence-based advice on blue light protection.

## What Is Blue Light?
Blue light is part of the visible light spectrum. Natural blue light from the sun regulates our sleep-wake cycle. Digital screens emit artificial blue light at lower intensities than sunlight.

## Digital Eye Strain
Symptoms include dry eyes, headaches, blurred vision, and neck pain after screen use. The primary cause is not blue light but rather reduced blinking and prolonged near focus.

## What Blue Light Lenses Do
Quality blue light filtering lenses reduce exposure from screens by 20-40%. They may improve comfort during extended screen use and potentially support better sleep when used in the evening.

## What They Do Not Do
They do not prevent eye disease, eliminate all digital eye strain, or replace the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds).

## Our Recommendation
Combine blue light lenses with regular breaks, proper screen distance, adequate lighting, and regular eye tests. We offer blue light coating on all lens types at Wootton Optics.`,
    "eye-care",
    "daniel",
    "2025-04-08",
    ["blue light glasses", "digital eye strain", "screen glasses"]
  ),
  createPost(
    "uv-protection-eyes",
    "UV Protection for Your Eyes: Why It Matters",
    "Learn how ultraviolet radiation affects eye health and how to protect your vision year-round.",
    `Most people understand UV protection for skin, but your eyes are equally vulnerable to ultraviolet damage. Long-term UV exposure contributes to several serious eye conditions.

## UV-Related Eye Conditions
**Cataracts:** UV exposure accelerates lens clouding. **Macular degeneration:** UV contributes to retinal damage. **Pterygium:** Growth on the eye surface from sun exposure. **Photokeratitis:** Sunburn of the cornea from intense UV exposure.

## Year-Round Protection
UV radiation exists even on cloudy days and reflects off water, snow, and sand. Winter sun at low angles can be particularly intense.

## Protection Methods
**UV-blocking lenses:** Ensure your everyday glasses include UV protection — most quality lenses do. **Sunglasses:** Look for CE mark and UV400 rating. **Wide-brimmed hats:** Reduce direct and reflected UV. **Wraparound styles:** Protect peripheral exposure during outdoor activities.

## Children's UV Protection
Children's eyes transmit more UV to the retina than adult eyes. Start protection habits early with proper sunglasses and UV-blocking lenses.

All lenses dispensed at Wootton Optics include UV protection as standard. Ask our team about prescription sunglasses options.`,
    "eye-care",
    "daniel",
    "2025-03-25",
    ["UV protection", "sunglasses", "eye health"]
  ),
  createPost(
    "varifocal-lenses-guide",
    "Varifocal Lenses Explained: Everything You Need to Know",
    "A complete guide to progressive lenses, adaptation tips, and choosing the right varifocal for your lifestyle.",
    `Varifocal (progressive) lenses provide clear vision at all distances without the visible lines of bifocals. They are the most popular choice for people with presbyopia.

## How Varifocals Work
The lens surface gradually changes power from top (distance) through middle (intermediate) to bottom (near). This seamless transition allows natural vision at any distance.

## Types of Varifocal Lenses
**Standard:** Good for general use at an accessible price point. **Premium:** Wider fields of vision and smoother transitions. **Occupational:** Optimised for desk work and intermediate distances. **Freeform/digital:** Precision-manufactured for your individual measurements.

## Adaptation Period
Most people adapt within one to two weeks. Tips include wearing them consistently (not switching to old glasses), moving your head rather than just your eyes initially, and returning for adjustments if needed.

## Common Concerns
"I feel swimming sensations" — normal initially, resolves with wear. "Stairs are difficult" — look through the upper portion when walking. "My peripheral vision is blurry" — expected with all varifocals, improves with premium designs.

Wootton Optics specialises in varifocal dispensing with advanced measurement technology. Book your consultation in Ilford.`,
    "eye-care",
    "daniel",
    "2025-03-12",
    ["varifocal lenses", "progressive lenses", "presbyopia"]
  ),
  createPost(
    "contact-lenses-beginners",
    "Contact Lenses for Beginners: A Step-by-Step Guide",
    "Everything first-time contact lens wearers need to know about types, fitting, and care.",
    `Contact lenses offer freedom from glasses for sport, social occasions, and everyday life. If you are considering contacts for the first time, this guide covers the essentials.

## Types of Contact Lenses
**Daily disposables:** Fresh pair every day, maximum convenience and hygiene. **Monthly/fortnightly:** Replaced on schedule, economical for regular wearers. **Toric:** Correct astigmatism. **Multifocal:** Correct presbyopia without reading glasses.

## The Fitting Process
A contact lens fitting at Wootton Optics includes assessment of corneal health, measurement of corneal curvature, trial lens fitting, vision assessment with trial lenses, and teaching insertion, removal, and care techniques.

## Hygiene Essentials
Always wash hands before handling lenses. Never use tap water on lenses. Replace lens cases every three months. Follow the wearing schedule prescribed by your optician. Never sleep in lenses unless specifically designed for it.

## When to Remove Lenses
Remove immediately if you experience pain, redness, discharge, or sudden vision changes. Seek prompt professional advice.

Book a contact lens assessment at our Essex practice. Free trial lenses available for new wearers.`,
    "eye-care",
    "daniel",
    "2025-02-28",
    ["contact lenses", "first time contacts", "lens fitting"]
  ),
  createPost(
    "dry-eye-syndrome-relief",
    "Dry Eye Syndrome: Causes and Relief Strategies",
    "Practical advice for managing dry, irritated eyes from our Essex opticians.",
    `Dry eye syndrome affects up to one in three adults, increasing with age and screen use. Understanding causes and treatments brings significant relief.

## What Causes Dry Eyes?
Age-related changes, screen use (reduced blinking), environmental factors (air conditioning, heating), contact lens wear, certain medications, hormonal changes, and medical conditions including Sjögren's syndrome.

## Symptoms
Grittiness, burning, redness, watery eyes (reflex tearing), blurred vision, and discomfort wearing contact lenses.

## Relief Strategies
**Artificial tears:** Use preservative-free drops for frequent application. **Warm compresses:** Stimulate oil gland function. **Blink exercises:** Conscious blinking during screen work. **Humidifiers:** Add moisture to dry indoor air. **Omega-3 supplements:** May improve tear quality. **Lid hygiene:** Clean eyelid margins to reduce inflammation.

## When to See an Optician
Persistent symptoms despite self-care, significant pain, or vision changes require professional assessment. Our Ilford team can recommend prescription treatments including medicated drops and punctal plugs.

Visit Wootton Optics for a dry eye assessment and personalised treatment plan.`,
    "eye-care",
    "daniel",
    "2025-02-14",
    ["dry eyes", "eye comfort", "artificial tears"]
  ),
  createPost(
    "screen-time-children-eyes",
    "Screen Time and Children's Eye Health",
    "Guidance for parents on managing screen use and protecting children's developing vision.",
    `Digital devices are integral to modern childhood, but excessive screen time poses risks to developing eyes. Balanced guidance helps children enjoy technology safely.

## Potential Concerns
Increased myopia (short-sightedness) risk, digital eye strain, reduced outdoor time (associated with myopia progression), and sleep disruption from evening screen use.

## Recommended Limits
Under 2: avoid screens except video calls. Ages 2-5: maximum one hour daily of quality content. Ages 5+: consistent limits with breaks, no screens one hour before bedtime.

## The 20-20-20 Rule for Children
Every 20 minutes of screen use, look at something 20 feet away for 20 seconds. Encourage outdoor play — two hours daily outdoors is associated with reduced myopia risk.

## Signs of Vision Problems
Squinting, sitting close to screens, headaches after screen use, rubbing eyes, and covering one eye may indicate vision issues requiring an eye test.

## Blue Light and Children
Evening screen use affects sleep more than eye health. Enable night modes and establish screen-free bedtime routines.

Book children's eye tests at Wootton Optics, Ilford. NHS-funded tests available for eligible children.`,
    "eye-care",
    "daniel",
    "2025-01-30",
    ["children screen time", "myopia", "children eye health"]
  ),
  createPost(
    "hearing-optical-wellness-connection",
    "The Connection Between Hearing and Overall Wellness",
    "How hearing health impacts cognitive function, mental health, and quality of life.",
    `Emerging research reveals profound connections between hearing health and overall wellbeing. Treating hearing loss is not just about hearing better — it is about living better.

## Hearing Loss and Cognitive Decline
Studies link untreated hearing loss to accelerated cognitive decline and increased dementia risk. The Lancet Commission identified hearing loss as the largest modifiable risk factor for dementia.

## Social Isolation and Mental Health
Hearing difficulties lead to social withdrawal, loneliness, anxiety, and depression. Hearing aids restore social participation and emotional wellbeing.

## Balance and Falls
The inner ear controls balance. Hearing loss correlates with increased fall risk in older adults. Treating hearing loss may improve spatial awareness.

## The Brain's Effort
When hearing is difficult, the brain diverts resources from memory and thinking to decoding speech. This "cognitive load" theory explains why hearing aid users often report improved mental clarity.

## Taking Action
If you or a loved one has hearing concerns, early intervention matters. Our free consultations at Wootton Hearing Care, Ilford, assess your hearing and discuss options with compassion and expertise.`,
    "wellness",
    "margaret",
    "2025-05-01",
    ["hearing wellness", "cognitive health", "dementia prevention"]
  ),
  createPost(
    "senior-eye-care-guide",
    "Senior Eye Care: Age-Related Vision Changes Explained",
    "A guide to common age-related eye conditions and maintaining vision health in later life.",
    `Vision naturally changes with age, but many age-related eye conditions are treatable or manageable with early detection and proper care.

## Common Age-Related Changes
**Presbyopia:** Difficulty focusing on near objects, typically from age 40. Corrected with reading glasses or varifocals. **Reduced contrast sensitivity:** Colours appear less vivid, reading becomes harder in dim light. **Increased glare sensitivity:** Night driving becomes more challenging.

## Conditions to Watch For
**Cataracts:** Gradual clouding causing blurry, faded vision. Surgical treatment is highly effective. **Glaucoma:** Often symptomless until advanced. Regular eye pressure checks are essential. **Age-related macular degeneration (AMD):** Affects central vision. **Diabetic retinopathy:** A concern for diabetic patients.

## Staying Safe
Regular eye tests (at least annually), good lighting at home, contrast-rich environments, updated prescriptions, and prompt reporting of sudden vision changes.

Wootton Optics provides compassionate eye care for seniors in Essex. Home visit arrangements available for those with mobility challenges.`,
    "wellness",
    "daniel",
    "2025-04-18",
    ["senior eye care", "age-related vision", "cataracts"]
  ),
  createPost(
    "nutrition-eyes-ears",
    "Nutrition for Healthy Eyes and Ears",
    "Foods and nutrients that support long-term hearing and vision health.",
    `Diet plays a supporting role in maintaining sensory health. While nutrition cannot prevent all conditions, certain nutrients support eye and ear function.

## For Eye Health
**Lutein and zeaxanthin:** Found in leafy greens, eggs, and corn. Support macular health. **Omega-3 fatty acids:** In oily fish, flaxseed. May help dry eye syndrome. **Vitamin C and E:** Antioxidants in citrus, nuts, and seeds. **Zinc:** In meat, legumes, and shellfish. Supports retinal health.

## For Hearing Health
**Omega-3 fatty acids:** Associated with reduced age-related hearing loss. **Folate:** In leafy greens and legumes. May protect against noise-induced damage. **Magnesium:** Found in bananas, avocados, and dark chocolate. May protect against noise damage. **Antioxidants:** General cellular protection for delicate inner ear structures.

## General Wellness
A Mediterranean-style diet rich in vegetables, fish, whole grains, and healthy fats supports overall health including sensory function. Stay hydrated and limit processed foods.

## The Bigger Picture
Nutrition complements but does not replace regular hearing and eye examinations. Book your check-ups at Wootton Hearing & Optics, Ilford.`,
    "wellness",
    "margaret",
    "2025-03-30",
    ["nutrition", "eye health diet", "hearing health"]
  ),
  createPost(
    "managing-diabetes-eyes",
    "Diabetes and Eye Health: What You Need to Monitor",
    "Essential eye care guidance for diabetic patients in Essex and London.",
    `Diabetes is the leading cause of preventable sight loss in working-age adults. Regular eye screening and proactive management protect your vision.

## How Diabetes Affects Eyes
High blood sugar damages tiny blood vessels in the retina (diabetic retinopathy). It also increases cataract and glaucoma risk.

## Diabetic Retinopathy Stages
**Background:** Minor vessel changes, often no symptoms. **Pre-proliferative:** More significant changes requiring monitoring. **Proliferative:** New abnormal vessels that can bleed and cause sight loss. **Diabetic macular oedema:** Fluid at the macula affecting central vision.

## Screening Recommendations
Annual diabetic retinal screening is essential for all diabetic patients. Additional comprehensive eye tests at an optician provide broader health assessment.

## Protecting Your Vision
Maintain target blood sugar levels, control blood pressure and cholesterol, do not smoke, attend all screening appointments, and report sudden vision changes immediately.

Wootton Optics works alongside diabetic screening programmes, offering comprehensive eye examinations for diabetic patients in Ilford and Essex.`,
    "wellness",
    "daniel",
    "2025-03-15",
    ["diabetes eye care", "diabetic retinopathy", "eye screening"]
  ),
  createPost(
    "sleep-hearing-health",
    "How Sleep Affects Your Hearing Health",
    "The surprising relationship between quality sleep and auditory function.",
    `Sleep and hearing health are more connected than most people realise. Understanding this relationship helps you protect both.

## Sleep Deprivation and Hearing
Fatigue reduces the brain's ability to process speech, mimicking hearing difficulty. Poor sleep worsens tinnitus perception and increases sensitivity to sound.

## Tinnitus and Sleep
Tinnitus frequently disrupts sleep, creating a vicious cycle. Sound therapy, hearing aids with masking features, and sleep hygiene practices help break this cycle.

## Sleep Apnoea and Hearing
Research links obstructive sleep apnoea with hearing loss, possibly due to reduced blood flow to the cochlea. If you snore heavily, seek medical assessment.

## Tips for Better Sleep with Hearing Aids
Remove hearing aids at night (unless using tinnitus masking programmes designed for sleep). Establish consistent bedtime routines. Keep bedrooms quiet and dark. Manage tinnitus with bedside sound generators if needed.

Discuss sleep-related hearing concerns at your next appointment with Wootton Hearing Care, Ilford.`,
    "wellness",
    "sarah",
    "2025-02-20",
    ["sleep health", "tinnitus sleep", "hearing wellness"]
  ),
  createPost(
    "nhs-vs-private-hearing-aids",
    "NHS vs Private Hearing Aids: Making the Right Choice",
    "An honest comparison to help you decide between NHS and private hearing care in the UK.",
    `Choosing between NHS and private hearing care is a significant decision. Both pathways have merits — understanding the differences helps you choose confidently.

## NHS Hearing Aids
**Pros:** Free at point of use, clinically appropriate technology, professional fitting. **Limitations:** Referral required via GP, waiting times vary, limited model choice, typically behind-the-ear style, replacement intervals of 3-5 years.

## Private Hearing Aids
**Pros:** Immediate access, widest technology and style choice, premium features (Bluetooth, rechargeability, AI), extensive aftercare, trial periods. **Considerations:** Cost (£495-£3,500 per aid), not all budgets suit premium technology.

## Can You Use Both?
Yes. Some clients obtain NHS aids and later upgrade privately. Others use NHS aids as backup devices.

## Our Approach at Wootton
We provide honest, unbiased advice. If NHS provision suits your needs, we will say so. If private aids offer meaningful benefits for your lifestyle, we explain why without pressure.

Book a free consultation at our Ilford clinic for personalised guidance on the best pathway for your hearing needs.`,
    "hearing-health",
    "margaret",
    "2025-02-05",
    ["NHS hearing aids", "private hearing aids", "hearing aid cost UK"]
  ),
  createPost(
    "spring-allergies-eyes-ears",
    "Spring Allergies: Effects on Your Eyes and Ears",
    "Managing seasonal allergies and their impact on vision and hearing comfort.",
    `Spring brings blossom and pollen — and for many Essex residents, allergy symptoms affecting eyes and ears. Here is how to manage seasonal discomfort.

## Allergic Effects on Eyes
Itchy, watery, red eyes (allergic conjunctivitis) are the most common spring complaint. Rubbing eyes worsens inflammation and risks corneal damage.

## Allergic Effects on Ears
Eustachian tube inflammation causes fullness, popping, and temporary hearing changes. Allergies can also worsen existing tinnitus.

## Relief Strategies
**Antihistamine eye drops:** Reduce ocular itching and redness. **Oral antihistamines:** Systemic relief for multiple symptoms. **Saline rinses:** Flush pollen from nasal passages and eustachian tubes. **Avoid rubbing:** Use cool compresses instead. **Sunglasses outdoors:** Physical barrier against pollen. **Shower after outdoor activities:** Remove pollen from hair and skin.

## When to Seek Help
Symptoms persisting beyond allergy season, significant hearing changes, or eye pain require professional assessment. Our Ilford team can distinguish allergy symptoms from other conditions requiring treatment.

Visit Wootton Hearing & Optics for allergy-season eye and ear health support.`,
    "wellness",
    "sarah",
    "2025-04-05",
    ["spring allergies", "allergic conjunctivitis", "seasonal health"]
  ),
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === current.category)
    .slice(0, limit);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}
