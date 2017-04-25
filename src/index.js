import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var crimes = {
  "headline": "Sinner! What is the nature of your sin?",
  "options": {
    "Lifestyle":{
      "headline": "Go on...",
      "options": {
        "Become a fat, drunk son": {
          "punishmentObj":
            {"punishment": "Your parents will lead you to the village elders. Then they'll invite all the men of the village to stone you to death.",
            "explanation": "And they shall say unto the elders of his city, This our son is stubborn and rebellious, he will not obey our voice; he is a glutton, and a drunkard. And all the men of his city shall stone him with stones, that he die: so shalt thou put evil away from among you; and all Israel shall hear, and fear.",
            "source_url": "http://biblehub.com/deuteronomy/21-20.htm",
            "source": "(Deuteronomy 21:20-21)"}

        },
        "Cursed your parents": {
            "punishmentObj":
              {"punishment": "Death!",
              "explanation": "And he that curseth his father, or his mother, shall surely be put to death.",
              "source_url": "http://biblehub.com/exodus/21-17.htm",
              "source": "(Exodus 21:17)"}
          },
          "Crossdressed": {
            "punishmentObj":
              {"punishment": "God doesn't like you anymore.",
              "explanation": "The woman shall not wear that which pertaineth unto a man, neither shall a man put on a woman's garment: for all that do so are abomination unto the LORD thy God.",
              "source_url": "http://biblehub.com/deuteronomy/22-5.htm",
              "source": "(Deuteronomy 22:5)"}

          }
      }
    },
    "Violent": {
      "headline": "Go on...",
      "options": {
        "Stole a human being": {
          "punishmentObj":
            {"punishment": "Death!",
            "explanation": "And he that stealeth a man, and selleth him, or if he be found in his hand, he shall surely be put to death.",
            "source_url": "http://biblehub.com/exodus/21-16.htm",
            "source": "(Exodus 21:16)"}

        },
        "Gored": {

          "headline": "Are You An Ox?",
          "options":
            {"No, I'm not an ox.":
              {"punishmentObj": {"punishment": "Come on, man...",
              "explanation": "",
              "source_url": "",
              "source": ""}
              }
            ,
            "Yes, I'm an ox.":
              {"punishmentObj": {"punishment": "You will be stoned, ox!",
              "explanation": "If an ox gore a man or a woman, that they die: then the ox shall be surely stoned, and his flesh shall not be eaten.",
              "source_url": "http://biblehub.com/exodus/21-28.htm",
              "source": "Exocus 21:28"}
              }
            }
        },
        "Knocked a slave's eye out":
          {"punishmentObj": {"punishment": "Free the slave!",
          "explanation": "And if a man smite the eye of his servant, or the eye of his maid, that it perish; he shall let him go free for his eye's sake.",
          "source_url": "http://biblehub.com/exodus/21-26.htm",
          "source": "Exodus 21:26"}
}
        ,
        "Knocked a slave's tooth out":
        {"punishmentObj": {"punishment": "Free the slave!",
        "explanation": "And if he smite out his manservant's tooth, or his maidservant's tooth; he shall let him go free for his tooth's sake.",
        "source_url": "http://biblehub.com/exodus/21-27.htm",
        "source": "(Exodus 21:27)"}
}
    }},
  "Sexual": {
    "headline": "Go on...",
    "options": {
        "Incest":
          {"headline": "With...",
          "options":
            {"Your aunt":
              {"punishmentObj": {"punishment": "No kids!",
              "explanation": "And if a man shall lie with his uncle's wife, he hath uncovered his uncle's nakedness: they shall bear their sin; they shall die childless.",
              "source_url": "http://biblehub.com/leviticus/20-20.htm",
              "source": "(Leviticus 20:20)"}
              }
            ,
            "Your mother-in-law":
            {"punishmentObj": {"punishment": "Death by fire!",
            "explanation": "And if a man take a wife and her mother, it is wickedness: they shall be burnt with fire, both he and they; that there be no wickedness among you.",
            "source_url": "http://biblehub.com/leviticus/20-14.htm",
            "source": "(Leviticus 20:14)"}
            },
            "Your brother's wife":
            {"punishmentObj": {"punishment": "No kids!",
            "explanation": "And if a man shall take his brother's wife, it is an unclean thing: he hath uncovered his brother's nakedness; they shall be childless.",
            "source_url": "http://biblehub.com/leviticus/20-21.htm",
            "source": "(Leviticus 20:21)"}
            },
            "Your subling":
            {"punishmentObj": {"punishment": "Banishment!",
            "explanation": "And if a man shall take his sister, his father's daughter, or his mother's daughter, and see her nakedness, and she see his nakedness; it is a wicked thing; and they shall be cut off in the sight of their people: he hath uncovered his sister's nakedness; he shall bear his iniquity.",
            "source_url": "http://biblehub.com/leviticus/20-17.htm",
            "source": "(Leviticus 20:17)"}
            }

        }},
        "Victim of Rape":
          {"headline": "Were you engaged at the time?",
          "options":
            {"No":
              {"punishmentObj": {"punishment": "Marry the rapist.",
              "explanation": "If a man find a damsel that is a virgin, which is not betrothed, and lay hold on her, and lie with her, and they be found; Then the man that lay with her shall give unto the damsel's father fifty shekels of silver, and she shall be his wife; because he hath humbled her, he may not put her away all his days.",
              "source_url": "http://biblehub.com/deuteronomy/22-29.htm",
              "source": "(Deuteronomy 22:28-29)"}
              }
            ,
            "Yes":
          {"headline": "Where Did It Happen?",
          "options":
            {"In the fields":
              {"punishmentObj":
                {"punishment": "Oh the fields? That's not a sin.",
                  "explanation": "If a man find a betrothed damsel in the field, and the man force her, and lie with her: then the man only that lay with her shall die. But unto the damsel thou shalt do nothing; there is in the damsel no sin worthy of death.",
                  "source_url": "http://biblehub.com/deuteronomy/22-25.htm",
                  "source": "(Deuteronomy 22:25-26)"}
              },
              "In the city":
              {"punishmentObj":
                {"punishment": "Stoned to death!",
                "explanation": "If a damsel that is a virgin be betrothed unto an husband, and a man find her in the city, and lie with her; Then ye shall bring them both out unto the gate of that city, and ye shall stone them with stones that they die; the damsel, because she cried not, being in the city; and the man, because he hath humbled his neighbour's wife: so thou shalt put away evil from among you.",
                "source_url": "http://biblehub.com/deuteronomy/22-24.htm",
                "source": "(Deuteronomy 22:23-24)"}
                  }
                }
              }
              }
          },
              "Bestiality": {
                "punishmentObj":
                  {"punishment": "Death! And the animal dies too!",
                  "explanation": "And if a man lie with a beast, he shall surely be put to death: and ye shall slay the beast. And if a woman approach unto any beast, and lie down thereto, thou shalt kill the woman, and the beast: they shall surely be put to death; their blood shall be upon them.",
                  "source_url": "http://biblehub.com/leviticus/20-16.htm",
                  "source": "(Leviticus 20:15-16)"}

              },
            "Adultery": {"punishmentObj":
              {"punishment": "Death!",
              "explanation": "If a man be found lying with a woman married to an husband, then they shall both of them die, both the man that lay with the woman, and the woman: so shalt thou put away evil from Israel.",
              "source_url": "http://biblehub.com/deuteronomy/22-22.htm",
              "source": "(Deuteronomy 22:22)"}
            },
            "Intimacy during menstruation": {"punishmentObj":
              {"punishment": "Banishment!",
              "explanation": "And if a man shall lie with a woman having her sickness, and shall uncover her nakedness; he hath discovered her fountain, and she hath uncovered the fountain of her blood: and both of them shall be cut off from among their people.",
              "source_url": "http://biblehub.com/leviticus/20-18.htm",
              "source": "(Leviticus 20:18)"}
            },
            "Lied about being a virgin":
              {"punishmentObj":
                {"punishment": "Stoned to death!",
                "explanation": "Then they shall bring out the damsel to the door of her father's house, and the men of her city shall stone her with stones that she die: because she hath wrought folly in Israel, to play the whore in her father's house: so shalt thou put evil away from among you.",
                "source_url": "http://biblehub.com/deuteronomy/22-21.htm",
                "source": "(Deuteronomy 22:21)"}},
            "Homosexuality":
            {"punishmentObj":
              {"punishment": "Death!",
                "explanation": "If a man also lie with mankind, as he lieth with a woman, both of them have committed an abomination: they shall surely be put to death; their blood shall be upon them.",
              "source_url": "http://biblehub.com/leviticus/20-13.htm",
              "source": "(Leviticus 20:13)"}
            }}},
  "Food": {"headline": "What did you do with your food?!",
    "options": {
      "Ate blood": {"punishmentObj":
        {"punishment": "Gross! Banished!",
          "explanation": "I will even set my face against that soul that eateth blood, and will cut him off from among his people.",
        "source_url": "http://biblehub.com/leviticus/17-10.htm",
        "source": "(Leviticus 17:10)"}
      },
      "Ate bread during passover": {"punishmentObj":
        {"punishment": "Banished!",
          "explanation": "Seven days shall ye eat unleavened bread; even the first day ye shall put away leaven out of your houses: for whosoever eateth leavened bread from the first day until the seventh day, that soul shall be cut off from Israel.",
        "source_url": "https://www.biblegateway.com/passage/?search=Exodus%2012:15",
        "source": "(Exodus 12:15)"}
      }
    }},
  "God Crime": {"headline": "Go on...",
    "options": {
      "Witchcraft": {"punishmentObj":
        {"punishment": "Death!",
          "explanation": "Thou shalt not suffer a witch to live.",
        "source_url": "http://biblehub.com/exodus/22-18.htm",
        "source": "(Exodus 22:18)"}
      },
      "Cursed God": {"punishmentObj":
        {"punishment": "Stoned to death!",
          "explanation": "And he that blasphemeth the name of the LORD, he shall surely be put to death, and all the congregation shall certainly stone him: as well the stranger, as he that is born in the land, when he blasphemeth the name of the Lord, shall be put to death.",
        "source_url": "http://biblehub.com/leviticus/24-16.htm",
        "source": "(Leviticus 24:16)"}
      },
      "Didn't get circumcised": {"punishmentObj":
        {"punishment": "Banishment!",
          "explanation": "And the uncircumcised man child whose flesh of his foreskin is not circumcised, that soul shall be cut off from his people; he hath broken my covenant.",
        "source_url": "http://biblehub.com/genesis/17-14.htm",
        "source": "(Genesis 17:14)"}
      },
      "Sacrificed your child to the god Molek": {"punishmentObj":
        {"punishment": "Stoned to death!",
          "explanation": "Say to the Israelites: 'Any Israelite or any foreigner residing in Israel who sacrifices any of his children to Molek is to be put to death. The members of the community are to stone him.",
        "source_url": "http://biblehub.com/leviticus/20-2.htm",
        "source": "(Leviticus 20:2)"}
      }
    }
  }
  }
}

  let buttonNames=[]
  for(var category in crimes.options){
    buttonNames.push(category)
  }



ReactDOM.render(
  <App cat={5} sins={crimes} firstOptions={buttonNames}/>,
  document.getElementById('root')
);
