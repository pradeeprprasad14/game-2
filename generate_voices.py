import os
import asyncio
import edge_tts

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'audio', 'voices')
os.makedirs(OUTPUT_DIR, exist_ok=True)

VOICES = {
    'en': 'en-IN-NeerjaExpressiveNeural',
    'hi': 'hi-IN-SwaraNeural',
    'mr': 'mr-IN-AarohiNeural'
}

AUDIO_ITEMS = [
    # Welcome greetings
    ('welcome_en', 'en', "Namaste! Welcome to Tarazu Bazaar! Let's weigh delicious fruits and vegetables together!"),
    ('welcome_hi', 'hi', "नमस्ते! तराजू बाज़ार में आपका स्वागत है! आओ ताज़े फल, सब्ज़ियाँ और बोरियाँ तोलें!"),
    ('welcome_mr', 'mr', "नमस्ते! तराजूच्या बाजारात आपले स्वागत आहे! चला ताजी फळे, भाजी आणि धान्याची गोणी तोकूया!"),

    ('animal_welcome_en', 'en', "Namaste! Welcome to Animal Kingdom! Drag cute animals to either side of the Tarazu to balance it!"),
    ('animal_welcome_hi', 'hi', "नमस्ते! पशु साम्राज्य में आपका स्वागत है! जानवरों को तराजू के दोनों पलड़ों पर रखकर बराबर तोलो!"),
    ('animal_welcome_mr', 'mr', "नमस्ते! प्राण्यांच्या राज्यात आपले स्वागत आहे! तराजूच्या दोन्ही पारड्यात प्राणी ठेवून समसमान करा!"),

    # Bazaar levels 1-14
    ('level_1_en', 'en', "Weigh the sweet corn, 1 kg! Put a 1 kg hexagonal brass weight on the right pan."),
    ('level_1_hi', 'hi', "मीठा भुट्टा, 1 किग्रा तोलो! दाएं पलड़े पर 1 किग्रा का षट्कोण बाट रखो।"),
    ('level_1_mr', 'mr', "गोड मका, 1 किलो तोका! उजव्या पारड्यात 1 किलोचे षट्कोणी वजन ठेवा."),

    ('level_2_en', 'en', "Weigh the coconut, 2 kg! Place brass weights on the right pan."),
    ('level_2_hi', 'hi', "नारियल, 2 किग्रा तोलो! दाएं पलड़े पर 2 किग्रा का अष्टकोण बाट रखो।"),
    ('level_2_mr', 'mr', "नारळ, 2 किलो तोका! उजव्या पारड्यात 2 किलोचे अष्टकोणी वजन ठेवा."),

    ('level_3_en', 'en', "Weigh the bananas, 2 kg! Add brass weights to the right."),
    ('level_3_hi', 'hi', "केले का गुच्छा, 2 किग्रा तोलो! दाएं पलड़े पर बाट रखकर तराजू सीधा करो।"),
    ('level_3_mr', 'mr', "केळ्यांचा घड, 2 किलो तोका! उजव्या पारड्यात वजन ठेवून काटा समसमान करा."),

    ('level_4_en', 'en', "Weigh the mango basket, 3 kg! Balance with the conical bell weight on the right."),
    ('level_4_hi', 'hi', "आम की टोकरी, 3 किग्रा तोलो! दाएं पलड़े पर घंटाकार बाट रखकर बराबर करो।"),
    ('level_4_mr', 'mr', "आंब्यांची टोपली, 3 किलो तोका! घंटाकार वजनाने काटा बरोबर करा."),

    ('level_5_en', 'en', "Weigh the black grapes, 3 kg! Put brass weights on the right."),
    ('level_5_hi', 'hi', "काले अंगूर, 3 किग्रा तोलो! दाईं तरफ सही बाट रखो।"),
    ('level_5_mr', 'mr', "काळे द्राक्ष, 3 किलो तोका! उजव्या बाजूला योग्य वजने ठेवा."),

    ('level_6_en', 'en', "Weigh the farm carrots, 3 kg! Make both sides equal."),
    ('level_6_hi', 'hi', "ताज़ी गाजर, 3 किग्रा तोलो! दोनों तरफ बिल्कुल बराबर करो।"),
    ('level_6_mr', 'mr', "ताजे गाजर, 3 किलो तोका! दोन्ही बाजू अगदी समसमान करा."),

    ('level_7_en', 'en', "Weigh the golden pumpkin, 4 kg! Place decagonal brass weights on the right."),
    ('level_7_hi', 'hi', "बड़ा कद्दू, 4 किग्रा तोलो! दाएं पलड़े पर 4 किग्रा का दशकोण बाट रखो।"),
    ('level_7_mr', 'mr', "मोठा भोपळा, 4 किलो तोका! उजव्या पारड्यात 4 किलोचे दशकोणी वजन ठेवा."),

    ('level_8_en', 'en', "Weigh the burlap potato sack, 4 kg! Balance the scale."),
    ('level_8_hi', 'hi', "आलू की बोरी, 4 किग्रा तोलो! तराजू को बराबर सीधा करो।"),
    ('level_8_mr', 'mr', "बटाट्याची गोणी, 4 किलो तोका! वजन काटा अगदी समसमान करा."),

    ('level_9_en', 'en', "Weigh the pineapples, 4 kg! Place weights on the right pan."),
    ('level_9_hi', 'hi', "अनानास, 4 किग्रा तोलो! दाएं पलड़े पर बाट रखकर तोलो।"),
    ('level_9_mr', 'mr', "अननस, 4 किलो तोका! उजव्या पारड्यात वजने ठेवा."),

    ('level_10_en', 'en', "Weigh the giant watermelon, 5 kg! Balance with the heavy master weight on the right."),
    ('level_10_hi', 'hi', "बड़ा तरबूज, 5 किग्रा तोलो! दाएं पलड़े पर भारी बाट रखकर तराजू बराबर करो।"),
    ('level_10_mr', 'mr', "मोठे कलिंगड, 5 किलो तोका! उजव्या पारड्यात वजने ठेवून संतुलित करा."),

    ('level_11_en', 'en', "Weigh the Kashmiri apple crate, 5 kg! Make the scale level."),
    ('level_11_hi', 'hi', "सेब की पेटी, 5 किग्रा तोलो! पलड़े को बराबर करो।"),
    ('level_11_mr', 'mr', "सफरचंदांची पेटी, 5 किलो तोका! दोन्ही पारडी समान करा."),

    ('level_12_en', 'en', "Weigh the farmer's wheat sack, 5 kg! Balance with brass weights."),
    ('level_12_hi', 'hi', "गेहूं की बोरी, 5 किग्रा तोलो! सही बाट रखो।"),
    ('level_12_mr', 'mr', "गव्हाची गोणी, 5 किलो तोका! योग्य वजने ठेवा."),

    ('level_13_en', 'en', "Find two different ways to balance this 5 kg watermelon!"),
    ('level_13_hi', 'hi', "इस 5 किग्रा तरबूज को तोलने के 2 अलग-अलग तरीके खोजो!"),
    ('level_13_mr', 'mr', "हे 5 किलोचे कलिंगड तोकण्याचे 2 वेगळे मार्ग शोधा!"),

    ('level_14_en', 'en', "Balance this 6 kg Basmati rice sack in two different ways!"),
    ('level_14_hi', 'hi', "इस 6 किग्रा बासमती चावल की बोरी को 2 अलग तरीकों से तोलो!"),
    ('level_14_mr', 'mr', "ह्या 6 किलो बासमती तांदळाच्या गोणीला 2 वेगळ्या पद्धतींनी तोका!"),

    # Animal challenges 1-6
    ('chal_1_en', 'en', "Can you balance the 10 kg Monkey? How many 5 kg Rabbits do you need on the right?"),
    ('chal_1_hi', 'hi', "क्या आप 10 किग्रा के बंदर को तोल सकते हैं? दाईं तरफ 5 किग्रा के कितने खरगोश चाहिए?"),
    ('chal_1_mr', 'mr', "तुम्ही 10 किलोच्या माकडाला तोकू शकता का? उजवीकडे 5 किलोचे किती ससे लागतील?"),

    ('chal_2_en', 'en', "The Lion weighs 50 kg! Add 10 kg Monkeys to the right pan to balance him!"),
    ('chal_2_hi', 'hi', "शेर का वजन 50 किग्रा है! दाएं पलड़े पर 10 किग्रा वाले बंदर रखकर बराबर करो!"),
    ('chal_2_mr', 'mr', "सिंहाचे वजन 50 किलो आहे! उजव्या पारड्यात 10 किलोची माकडे ठेवून समान करा!"),

    ('chal_3_en', 'en', "Gappu the Elephant weighs 100 kg! How many 50 kg Lions will balance him?"),
    ('chal_3_hi', 'hi', "गप्पू हाथी 100 किग्रा का है! 50 किग्रा के कितने शेर उसे बराबर तोलेंगे?"),
    ('chal_3_mr', 'mr', "गप्पू हत्ती 100 किलोचा आहे! 50 किलोचे किती सिंह त्याला समान तोकतील?"),

    ('chal_4_en', 'en', "Balance the 50 kg Lion using a mix of Monkeys (10 kg) and Rabbits (5 kg)!"),
    ('chal_4_hi', 'hi', "50 किग्रा के शेर को बंदर (10 किग्रा) और खरगोश (5 किग्रा) मिलाकर बराबर तोलो!"),
    ('chal_4_mr', 'mr', "50 किलोच्या सिंहाला माकडे (10 किलो) व ससे (5 किलो) एकत्र करून तोका!"),

    ('chal_5_en', 'en', "Elephant and Monkey together weigh 110 kg! Balance both sides with animals!"),
    ('chal_5_hi', 'hi', "हाथी और बंदर मिलकर 110 किग्रा! दोनों तरफ जानवर रखकर तराजू सीधा करो!"),
    ('chal_5_mr', 'mr', "हत्ती आणि माकड मिळून 110 किलो! उजवीकडे प्राणी ठेवून तराजू समसमान करा!"),

    ('chal_6_en', 'en', "Safari Playground! Place any animals on either pan and explore balancing!"),
    ('chal_6_hi', 'hi', "सफारी मैदान! दोनों में से किसी भी पलड़े पर जानवर रखो और तराजू तोलो!"),
    ('chal_6_mr', 'mr', "सफारी मैदान! कोणत्याही पारड्यात प्राणी ठेवून मुक्तपणे तोलून खेळा!"),

    # Feedbacks
    ('win_en', 'en', "Wah! Shabaash! Perfect balance! The scale is completely level!"),
    ('win_hi', 'hi', "वाह! शाबाश! बिल्कुल सही वजन! दोनों पलड़े बराबर हैं!"),
    ('win_mr', 'mr', "वाह! शाब्बास! अगदी बरोबर तोकले! दोन्ही बाजू समसमान झाल्या!"),

    ('tilted_left_en', 'en', "Left side is heavier! Add more weights to the right."),
    ('tilted_left_hi', 'hi', "बायां पलड़ा भारी है! दाएं पलड़े में और बाट रखो।"),
    ('tilted_left_mr', 'mr', "डावे पारडे जड आहे! उजवीकडे आणखी वजन वाढवा."),

    ('tilted_right_en', 'en', "Right side is heavier! Remove a weight or try a smaller one."),
    ('tilted_right_hi', 'hi', "दायां पलड़ा भारी है! कोई छोटा बाट लगाकर देखो।"),
    ('tilted_right_mr', 'mr', "उजवे पारडे जड आहे! उजवीकडून थोडे वजन कमी करा."),

    ('way_1_done_en', 'en', "Brilliant! Now clear the right pan and balance it a different way!"),
    ('way_1_done_hi', 'hi', "बहुत बढ़िया! अब दूसरे अलग तरीके से तोलकर दिखाओ!"),
    ('way_1_done_mr', 'mr', "छान! आता उजवीकडची वजने काढून वेगळ्या पद्धतीने तोका!")
]

async def generate_item(item_id, lang, text):
    voice = VOICES[lang]
    filename = f"{item_id}.mp3"
    filepath = os.path.join(OUTPUT_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        return
    print(f"Generating {filename} with {voice}...")
    try:
        communicate = edge_tts.Communicate(text, voice)
        await communicate.save(filepath)
    except Exception as e:
        print(f"Error generating {filename}: {e}")

async def main():
    tasks = []
    # Process sequentially with small delay to avoid rate limiting
    for item_id, lang, text in AUDIO_ITEMS:
        await generate_item(item_id, lang, text)
        await asyncio.sleep(0.1)
    print("All human voice audio clips generated successfully!")

if __name__ == '__main__':
    asyncio.run(main())
