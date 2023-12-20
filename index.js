const app = require("express")();
const PORT = 8111;

app.listen(PORT, () => {
    console.log("PORT 8111 Active!")
})


app.get("/tarot", (req, res) => {
    res.status(200).send({
        tarotCards
    })
})


const tarotCards = {
    card1: {
        card: "The Fool",
        meaning: "The Fool reminds us to recognize the path of personal development within ourselves -- and the stage upon that path where we find ourselves -- in order to energize our movement toward deeper self-realization.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card3: {
        card: "The Magician",
        meaning: "It's best to keep your imagination open with this card. Visualize yourself manifesting something unique, guided by evolutionary forces that emerge spontaneously from within your soul.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },

    card5: {
        card: "The High Prietess",
        meaning: "The High Priestess advises you to adhere to your chosen spiritual practice on a more regular basis. If you want the benefits of evolution, you'll have to cooperate with spirit. We all have distractions, demands -- a whole life full of reasons why we cannot find the time to retreat into our inner sanctum.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card7: {
        card: "The Empress",
        meaning: "This supreme archetype of femininity also symbolizes fertility. It is The Empress who provides us nourishment and security. She is also sometimes seen as delighting us with flowers and fruit. A potentially terrifying aspect of this archetype manifests itself whenever karmic mood swings wipe out our plans, like a storm that has come upon us. Whatever happens, The Empress is the source of our embodiment and of natural lLaw. She might even be called 'The Great Recycler.'",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card9: {
        card: "The Emperor",
        meaning: "The more enlightenment and cosmic perspective this energy brings, the better life is for all. The Emperor archetype masters the world of matter and physical manifestation. When you apply this card to your situation, acknowledge your potentials for mastery. Reinforce a sense of sovereignty within yourself, despite any self-limiting beliefs, habits, or appearances to the contrary.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card11: {
        card: "The Hierophant",
        meaning: "The Hierophant Tarot this card refers to a master and the learning of practical lessons from the study of natural law. This energy of this card points to some agent or resource that can reveal the secrets of life, the cycles of the Moon and tides, the links between human beings and the heavens.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card13: {
        card: "The Lovers",
        meaning: "The Lovers Tarot card reflected the challenges of choosing a partner. At a crossroads, one cannot take both paths.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card15: {
        card: "The Chariot",
        meaning: "The Chariot Tarot card points to a triumphal feeling of freedom, as if the Charioteer is being paraded through the streets as a hero (or heroine). The card reflects congratulations for high achievement, and serves as a sign of empowerment.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card17: {
        card: "Strength",
        meaning: "The Strength Tarot card represents nature, which, however wild in its primal form, is tamed by our subtler, finer self -- our feminine side, our inner self. The will and passion of our instinctive nature does not need to be broken, but refined and brought to consciousness, so that all levels of creation may come into harmony. The feminine soul-force contains a persuasive power that can nurture and induce cooperation from others, stilling disruptive energies by harmonizing differences in the spirit of collective good will.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card19: {
        card: "The Hermit",
        meaning: "The challenge of The Hermit card is to be able to recognize a teacher in a humble disguise. This font of mysterious knowledge will not make it easy for the student to acquire his wisdom, as it takes time and long contemplation to fathom what he knows. He often speaks wordlessly, or in ancient and barbaric tongues, communicating with the elements, animals, and nature herself. The Hermit card reminds us of the value of time away from the hubbub of civic life, to relax the ego in communion with nature.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card21: {
        card: "Wheel of Fortune",
        meaning: "The central theme of The Wheel of Fortune card is cyclical change. The wheel keeps on rolling, churning events in a ceaseless progression of ups and downs, either way freeing us from the past. No one can escape its cyclical action, which can feel somewhat terrifying -- no matter whether we are rising or falling. When one is balanced on top of the wheel, there is a moment of crystal clarity. However, the only part of the wheel that's actually not going up and down is the hub, which represents your eternal self. Every one of us will occupy all the points on the wheel at one point or another. The cycle of the wheel is its lesson -- and we can learn to take comfort in it. If you don't like the look of things right now, just wait -- things will change. Of course, if you do like the look of things right now, enjoy it while it lasts, because that will change too!",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card23: {
        card: "Justice",
        meaning: "The Justice Tarot card has to do with moral sensitivity and that which gives rise to empathy, compassion, and a sense of fairness. Since the time of Solomon, this image has represented a standard for the humane and fair-minded treatment of other beings. Often including the image of a fulcrum or scale which helps to balance competing needs against the greater good, and a two-edged sword to symbolize the precision needed to make clear judgments, this card reminds us to be careful to attend to important details. It's a mistake to overlook or minimize anything where this card is concerned. The law of karma is represented here -- what goes around comes around.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card25: {
        card: "The Hanged Man",
        meaning: "The Hanged Man usually indicates a lack of ability to help oneself through independent action. The energy is arrested and awaiting judgment. With this card, there is no avenue for the will to regain control until the situation has passed. This represents a good time to be philosophical, to study and meditate upon the position you find yourself in, and to form resolutions for the moment you become free again. Only those who possess wisdom, patience, and optimism will be able to see through limitations, including possible humiliation, to grasp the inspiring lesson one can gain from such an experience.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card27: {
        card: "Death",
        meaning: "The Death card is not about the literal death of any person. It may represent the death of something else, like a project, plan, or relationship. This card also points to a time of harvest, symbolized in classical decks by the reaping skeleton. Unless the fruits of summer are harvested, they are lost to winter's harshness, and the people do not eat. As the scythe cuts the cords that link us to the past, it liberates us to go forward without fear, because we have nothing left to lose. Everything being pruned away is recycled for the fertility of the future, so that nothing is really ever lost, despite seasonal cycles of gain and loss.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card29: {
        card: "Temperance",
        meaning: "The Temperance card is a reference to the soul. Classically female, the woman or angel on the Temperance card is mixing up a blend of subtle energies for the evolution of the personality. One key to interpreting this card can be found in its title -- a play on the process of tempering metals in a forge. Metals must undergo extremes of temperature, folding, and pounding, but the end product is infinitely superior to impure ore mined from the earth. In this image, the soul volunteers the ego for a cleansing and healing experience, which may turn the personality inside-out, but which brings out the gold hidden within the heart.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card31: {
        card: "The Devil",
        meaning: "The Devil Tarot card expresses the realm of the taboo -- the culturally rejected wildness and undigested shadow side that each of us carries in our subconscious. This shadow is actually at the core of our being, which we cannot get rid of and will never succeed in taming.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card33: {
        card: "The Tower",
        meaning: "In practically all renditions of the Tower card, disaster is striking or has just struck. The demons of madness and despair are released from ancient hiding places, and nature conspires with human failings to destabilize a society. The upheaval is collective and impersonal. Let us remember these images were created for the educated nobles and clergy -- reminding them that they have the most to lose if the hierarchy is toppled. Lightning is a fitting karmic payback for the guilt of those whose fortunes come from the exploitation or abuse of others. A modern subtitle might be revolution, indicating that through drastic social change, oppressed people can find renewed hope of better times. The Tower experience comes like a flash of lightning to topple the hierarchy of the old order, after which everyone can have a fresh start on a more equal footing.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card35: {
        card: "The Star ",
        meaning: "The Star Tarot card is about reconnecting one's soul with the divine -- the transcending of personality, family, community, and reputation. It has to do ultimately with the freedom to be one's self. The soul is responding to celestial influences -- forces that can provide the personality with a stronger sense of purpose. The Star card helps us to remember our exalted origins and our attraction to a higher union. This card could also be called The Celestial Mandate -- that which refers us back to our reason for being, our mission in this lifetime. The Star reminds us that, in a sense, we are agents of divine will in our day-to-day lives. If we let go of the idea that we are supposed to be in control, we can more easily notice and appreciate the synchronicities that are nudging us along. In this way, we become more conscious of the invisible helping hand, and we better understand our place within -- and value to -- the larger cosmos.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card37: {
        card: "The Moon",
        meaning: "The Moon card refers to a deep state of sensitivity and imaginative impressionability, developed within a womb of deep relaxation. Here we dream and go into trance, have visions and receive insights, wash in and out with the psychic tides, and experience deep mystical and/or terrifying realities beyond our ordinary senses. In a state of expanded consciousness, we cannot always control what happens. The Moon card represents the ultimate test of a soul's integrity, where the membrane between the self and the unknown is removed, and the drop of individuality re-enters the ocean of being. What transpires next is between a soul and its maker.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card39: {
        card: "The Sun",
        meaning: "The Sun card is about the self -- who you are and how you cultivate your personality and character. The Sun's radiance is where one's original nature can be encountered in health and safety. The limitations of time and space are stripped away; the soul is refreshed and temporarily protected from the chaos outside the garden walls. Under the light of the Sun, life reclaims its primordial goodness, truth, and beauty. If one person is shown on this card, it is usually signifying a human incarnation of the divine. When two humans are shown, the image is portraying a resolution of the tension between opposites at all levels. It's as if this card is saying 'You can do no wrong' -- it's all to the good!",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card41: {
        card: "Judgement",
        meaning: "In personal terms, the Judgment Tarot card points to freedom from inner conflicts, and so clear a channel, that the buried talents and gifts of past incarnations can come through an individual in this lifetime. This card counsels you to trust the process of opening yourself, because what emerges is of consistently high quality. You can effortlessly manifest as a multi-dimensional being, and assist in evoking that response from others.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "The World",
        meaning: "The goddess of The World card invites us into cosmic citizenship -- once we come to realize our soul's potential for it. It announces the awakening of the soul's immortal being, accomplished without the necessity of dying. This card, like the Sun, is reputed to have no negative meaning no matter where or how it appears. If the Hermetic axiom is 'Know Thyself', this image represents what becomes known when the true nature of self is followed to creative freedom and its ultimate realization.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Ace of Wands",
        meaning: "An Ace of this suit in this position symbolizes a pivotal act, or fateful step, that will set loose a chain of events leading toward your desired goal. It refers to a birth or new beginning, the inauguration of an endeavor, and the building of the necessary commitment to see a project or plan through. It personifies an aroused Will that is totally focused, aiming at the bulls-eye.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Two of Wands",
        meaning: "The Two in this suit, often portrayed as crossed wands, imply a deadlock due to energies working at cross-purposes. This could refer to an internal split -- perhaps a duel between optimistic and pessimistic parts of your psyche, for example -- or some situation where you feel 'damned if you do, damned if you don't.' This could be a standoff with another person or rubbing up against limitations that are currently imposed upon you. This card points to the possibility of creeping self-doubt -- the kind that arises in a situation where one has bitten off more than one can chew. Give yourself a moment to take in the full implications of your situation. Find your bearings again before launching back into action. Deal with real concerns now -- before they become regrets!",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Three of Wands",
        meaning: "A Three in this suit symbolizes an inner balance that allows you to feel more optimistic about new endeavors you are committed to, or want to commit to. In the illustrated Tarots, the human character is standing on his balcony, watching ships leave the harbor, loaded with his goods for far-off ports, dreaming of the fortune he will reap if all goes well. Summon the optimism within you. This energy must be patient and trusting, because he or she will have to wait some time to find out how the ships have fared. Meanwhile, a lot of resources are tied up until they return with the bounty. Only those truly confident in their ideas and abilities would undertake such a risk. This card represents the energy a person needs to take on great adventures and accomplish noble (and remunerative) deeds.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Four of Wands",
        meaning: "A Four in this suit is the teamwork card, often symbolized by two couples who have come together to create something profitable and enduring. Quite likely, they will create a gift for the future -- a business, hospital, theater or university. They represent the founding families of the future community that will grow around their inspiration. Teamwork is the key. It takes time to build a grand vision; and other people of ambition and talent must be attracted to it for it to fulfill its potential. What we see here is the start-up group, the founding visionaries committing their energies to designing the blueprints and laying the groundwork. This partnership is the prototype for society or any grouping where the whole is greater than the sum of the parts.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Five of Wands",
        meaning: "The Five of this suit symbolizes struggles caused by ambitious maneuvering and a competitive urge. This could be about someone who is pushing his or her agenda forward at the expense of others.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Six of Wands",
        meaning: "The Six of this suit points to the respect and acknowledgment due to you for your efforts to solve the problems of your community. The image is usually of a victory parade, after the celebrated leader helped troops win a pivotal battle.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Seven of Wands",
        meaning: "The Seven of this suit generally shows a person who is nearly always successful in working his or her will in the world. This is a person who is truly gifted, standing head and shoulders above the rest. This person sets standards and sets examples that exceed previous conceptions of what is possible.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Eight of Wands",
        meaning: "This can refer to swiftly unfolding events, whether of unintentional or intentional design. There are also versions that emphasize the agricultural cycle, paralleling the yearly crop cycle with the swift growth of children into adults with children of their own. In each case, the emphasis is on the necessity of change and the challenge of keeping up with it. With the turning of the seasons, we are constantly being forced to deal with change and there is no remedy but to live with that in mind. So, get busy -- there is no time to waste!",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Nine of Wands",
        meaning: "The Nine of this suit usually indicates a need for rest; some time out to mend wounds and savor victories. Although it may be hard to do, this card would have you leave the field to fresher teammates for now. Release any attachment you may feel to being in a leadership role for now.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Ten of Wands",
        meaning: "The Ten of this suit represents an all-out effort, an obsessive commitment to a task which demands everything you've got. The person shown in decks with pictures is in no position to rest until he makes it inside the stout walls of the well-defended castle in the distance. If he fails, he will become prey for the highway robbers after dark.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Page of Wands",
        meaning: "Don't be fooled by this humble appearance. This person is a future captain of industry or world leader, now serving an apprenticeship. These people are sometimes seen planting a staff like a flagpole into the earth in the far off wilderness (where they can start fresh without having to make any compromises). You could think of this card as a wild card.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Knight of Wands",
        meaning: " Traditionally, this card indicates the energy of an instigator, a fire-starter, a feisty and easily provoked character who is liable to attack first and ask questions later. This energy is quick to anger and enjoys a fight -- so much so that the thought of a diplomatic solution can provoke a secret disappointment! Nevertheless, he sees himself as trying to help, rescuing the world from its madness by imposing his sense of order upon it.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "Queen of Wands",
        meaning: "Traditionally, representing the energy of a Queen, this woman represents the natural manager, whose gift is to inspire teamwork and divvy up tasks. She is the one who sees ensures everything runs smoothly. She'll be sweating in the sun along with her family or crew, inspiring everybody to keep up and supporting morale with her infectious energy.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },
    card43: {
        card: "King of Wands",
        meaning: "Traditionally representing the energy of a dynamic King, this card represents the classic conquering hero. He's a charismatic leader, entrepreneurial and ambitious, always creating new adventures. He does this because he doesn't like to stay home or to have to 'mind the store' -- he gets to feeling restless and bored with the predictable. If you need a crusader, or someone to take on a big challenge, he's your man. He needs a big assignment, and would rather lead than follow.",
        image: "https://res.cloudinary.com/dqggp5pir/image/upload/v1703012457/Tarot%20Cards/Tarot_Card_wc3pwm.jpg"

    },

}