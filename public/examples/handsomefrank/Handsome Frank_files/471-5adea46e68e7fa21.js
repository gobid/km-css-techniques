"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{8471:function(n,e,t){t.d(e,{bH:function(){return L},I0:function(){return w},i8:function(){return G},w8:function(){return V},j6:function(){return H},Tl:function(){return R},r:function(){return U}});var o="\n  _type == 'discoverArtistsTeaserModule' => {\n    _type,\n    'headline': headline,\n    'selectedArtists': selectedArtists[] {\n      artist->{\n        'slug': content.slug.current,\n        'artistName': content.artistName,\n        'teaserImages': content.teaserImages[] {\n          'url': teaserImage.image,\n          'alt': teaserImage.alt\n        },\n        'pageTransitionSettings': content.pageTransitionSettings {\n          'backgroundColor': backgroundColor.hex,\n          'image': {\n            'imageUrl': image.image,\n            'alt': image.alt\n          }\n        },\n      }\n    },\n    'artists': *[_type == 'artistPage'] {\n      'slug': content.slug.current,\n      'artistName': content.artistName,\n      'teaserImages': content.teaserImages[] {\n        'url': teaserImage.image,\n        'alt': teaserImage.alt\n      },\n      'pageTransitionSettings': content.pageTransitionSettings {\n        'backgroundColor': backgroundColor.hex,\n        'image': {\n          'imageUrl': image.image,\n          'alt': image.alt\n        }\n      },\n   },\n  },\n",a="\n  _type == 'singleColumnContentTeaserModule' => {\n    _type,\n    content->{\n      'isNewsletterSignUp': content.isNewsletterSignUp,\n      'headline': content.headline,\n      'copy': content.copy,\n      'link': content.linkGroup {\n        linkText,\n        'linkTarget': linkTarget.page-> {\n          'pageType': _type,\n          'slug': content.slug.current\n        },\n        externalLinkTarget\n      },\n      'colorSettings': {\n        'headlineColor': content.colorSettings.headlineColor.hex,\n        'copyColor': content.colorSettings.copyColor.hex,\n        'linkColor': content.colorSettings.linkColor.hex,\n        'backgroundColor': content.colorSettings.backgroundColor.hex\n      },\n      'image': {\n        'imageUrl': content.image.image.asset,\n        'imageAlt': content.image.alt\n      },\n      'imageSettings': content.imageSettings,\n      'videoSettings': content.videoSettings {\n        ...,\n        'video': video.asset -> {\n          ...,\n          \"url\": \"https://stream.mux.com/\" + playbackId\n        } ,\n        'backgroundVideo': backgroundVideo.asset -> {\n          ...,\n          \"url\": \"https://stream.mux.com/\" + playbackId\n        } ,\n      }\n    }\n  },\n",c="\n  _type == 'multiColumnContentTeaserModule' => {\n    _type,\n    'content': content-> {\n      'columns': columns[] {\n        'textColor': colorSettings.textColor.color.hex,\n        'headline': headline,\n        'copy': copy,\n        'image': image,\n        'link': linkGroup {\n          linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n          externalLinkTarget\n        },\n      }\n    }\n  },\n",r="\n  _type == 'masonryImageGridModule' => {\n    ...\n  },\n",l="\n  _type == 'masonryVideoGridModule' => {\n    _type,\n    'gridColumnCount': gridColumnCount,\n    'gridItems': gridItems[] {\n      ...,\n      asset->{\n        ...,\n        \"url\": \"https://stream.mux.com/\" + playbackId\n      }  \n    }\n  },\n",i="\n  _type == 'textBlockModule' => {\n    ...,\n    'headline': headline,\n    'bodyText': bodyText[] {\n      ...,\n      markDefs[]{\n        ...\n      }\n    }\n  },\n",s="\n  _type == 'videoModule' => {\n    ...\n  },\n",g="\n  _type == 'carouselModule' => {\n    _type,\n    'colorSettings': {\n      'primaryColor': carouselSettings.primaryColor.hex,\n      'secondaryColor': carouselSettings.secondaryColor.hex,\n      'backgroundColor': carouselSettings.backgroundColor.hex\n    },\n    'slides': slides[]\n  },\n",m="\n'contentTeaserSettings': {\n  'hideRandomContentTeasersInFooter': content.hideRandomContentTeasersInFooter,\n   'allSingleColumnContentTeasers': *[_type == 'singleColumnContentTeaser']{\n     'content': {\n        'headline': content.headline,\n        'copy': content.copy,\n        'link': content.linkGroup {\n          linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n          externalLinkTarget\n        },\n        'colorSettings': {\n          'headlineColor': content.colorSettings.headlineColor.hex,\n          'copyColor': content.colorSettings.copyColor.hex,\n          'linkColor': content.colorSettings.linkColor.hex,\n          'backgroundColor': content.colorSettings.backgroundColor.hex\n        },\n        'image': {\n          'imageUrl': content.image.image.asset,\n          'imageAlt': content.image.alt\n        },\n        'imageSettings': content.imageSettings,\n        'videoSettings': content.videoSettings {\n          ...,\n          'video': video.asset -> {\n            ...,\n            \"url\": \"https://stream.mux.com/\" + playbackId\n          } ,\n          'backgroundVideo': backgroundVideo.asset -> {\n            ...,\n            \"url\": \"https://stream.mux.com/\" + playbackId\n          } ,\n        }\n     }\n   },\n   'allMultiColumnContentTeasers': *[_type == 'multiColumnContentTeaser'] {\n    'content': {\n      'columns': columns[] {\n        'textColor': colorSettings.textColor.color.hex,\n        'headline': headline,\n        'copy': copy,\n        'image': image,\n        'link': linkGroup {\n          linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n          externalLinkTarget\n        },\n      }\n    }\n   }\n},\n",u="\n'footerSettings': content.footerSettings {\n  showRandomContentTeasersInFooter,\n  'linkedIllustrator': artistFooter.artist->{\n     'slug': content.slug.current,\n     'artistName': content.artistName,\n     'teaserImages': content.teaserImages[] {\n       'url': teaserImage.image,\n       'alt': teaserImage.alt\n     },\n    'pageTransitionSettings': content.pageTransitionSettings {\n      'backgroundColor': backgroundColor.hex,\n      'textColor': textColor.hex,\n      'image': {\n        'imageUrl': image.image,\n        'alt': image.alt\n      }\n    },\t\n   },\n   'allSingleColumnContentTeasers': *[_type == 'singleColumnContentTeaser']{\n     'content': {\n        'headline': content.headline,\n        'copy': content.copy,\n        'link': content.linkGroup {\n          linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n          externalLinkTarget\n        },\n        'colorSettings': {\n          'headlineColor': content.colorSettings.headlineColor.hex,\n          'copyColor': content.colorSettings.copyColor.hex,\n          'linkColor': content.colorSettings.linkColor.hex,\n          'backgroundColor': content.colorSettings.backgroundColor.hex\n        },\n        'image': {\n          'imageUrl': content.image.image.asset,\n          'imageAlt': content.image.alt\n        },\n        'imageSettings': content.imageSettings,\n        'videoSettings': content.videoSettings {\n          ...,\n          'video': video.asset -> {\n            ...,\n            \"url\": \"https://stream.mux.com/\" + playbackId\n          } ,\n          'backgroundVideo': backgroundVideo.asset -> {\n            ...,\n            \"url\": \"https://stream.mux.com/\" + playbackId\n          } ,\n        }\n     }\n   },\n   'allMultiColumnContentTeasers': *[_type == 'multiColumnContentTeaser'] {\n    'content': {\n      'columns': columns[] {\n        'textColor': colorSettings.textColor.color.hex,\n        'headline': headline,\n        'copy': copy,\n        'image': image,\n        'link': linkGroup {\n          linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n          externalLinkTarget\n        },\n      }\n    }\n   }\n},\n",d="\n  _type == 'insightsTeaserHorizontalScrollModule' => {\n    _type,\n    moduleSettings,\n    'colors': {\n      'backgroundColor': colorSettings.backgroundColor.hex,\n      'primaryColor': colorSettings.primaryColor.hex,\n      'secondaryColor': colorSettings.secondaryColor\n    },\n    headlineSettings,\n    randomizePosts,\n    'allPosts': *[_type == 'insightsReadPostPage'] {\n      'cardType': _type,\n      'slug': content.slug.current,\n      'publishDate': content.date,\n      'headline': content.headline,\n      'excerpt': content.introText,\n      'image': content.metaSettings.metaImage,\n      'category': content.category->categoryTitle,\n      'colors': {\n        'backgroundColor': content.teaserSettings.colorSettings.cardBackgroundColor.hex,\n        'primaryColor': content.teaserSettings.colorSettings.primaryColor.hex,\n        'secondaryColor': content.teaserSettings.colorSettings.secondaryColorScheme\n      },\n    },\n    'featuredPosts': featuredPosts[]-> {\n      'cardType': _type,\n      'slug': content.slug.current,\n      'publishDate': content.date,\n      'headline': content.headline,\n      'excerpt': content.introText,\n      'image': content.metaSettings.metaImage,\n      'category': content.category->categoryTitle,\n      'colors': {\n        'backgroundColor': content.teaserSettings.colorSettings.cardBackgroundColor.hex,\n        'primaryColor': content.teaserSettings.colorSettings.primaryColor.hex,\n        'secondaryColor': content.teaserSettings.colorSettings.secondaryColorScheme\n      },\n    }\n  },\n",p="\n  _type == 'insightsTeaserGridModule' => {\n    _type,\n    'headline': headline,\n    'sectionBackgroundColor': sectionBackgroundColor.hex,\n    'cards': teaserCards[]-> {\n      'cardType': _type,\n      'slug': content.slug.current,\n      'title': content.teaserSettings.copy.teaserTitle,\n      'excerpt': content.teaserSettings.copy.teaserExcerpt,\n      'alternativeTitle': content.metaSettings.metaTitle,\n      'alternativeDescription': content.metaSettings.metaDescription,\n      'teaserImage': content.metaSettings.metaImage,\n      'colors': {\n        'backgroundColor': content.teaserSettings.colorSettings.cardBackgroundColor.hex,\n        'primaryColor': content.teaserSettings.colorSettings.primaryColor.hex,\n        'secondaryColor': content.teaserSettings.colorSettings.secondaryColorScheme\n      },\n      'video': content.video\n    }\n  },\n",y="\n  _type == 'multipleImagesModule' => {\n    ...\n  },\n",h="\n  _type == 'flexibleGridModule' => {\n    _type,\n    'gridItems': gridItems[] {\n      _type == 'hoverableImage' => {\n        ...\n      },\n      _type == 'image' => {\n        ...\n      },\n      _type == 'lineBreak' => {\n        ...\n      }, \n      _type == 'vimeoVideoModule' => {\n        ...\n      },\n      _type == 'muxVideoModule' => {\n        ...,\n      \t'content': content {\n          ...,\n      \t\t'muxVideo': muxVideo {\n      \t\t\t'asset': asset->{\n              ...,\n      \t\t\t\t\"url\": \"https://stream.mux.com/\" + playbackId,\n              \"thumbnail\": \"https://image.mux.com/\" + playbackId + \"/thumbnail.jpg\"\n    \t\t\t\t}\n    \t\t\t}\n    \t\t}\n      },\n      _type == 'infoModule' => {\n        ...,\n        'link': link {\n          'linkText': linkText,\n          'linkTarget': linkTarget.page-> {\n            'pageType': _type,\n            'slug': content.slug.current\n          },\n        },\n      },\n    },\n  },\n",C="\n  _type == 'commissionIllustratorModule' => {\n    _type,\n    'baseSettings': *[_type == 'commissionIllustratorBaseSettings'] {\n      'headline': globalHeadline,\n      'copy': globalCopy\n    },\n    'headline': text.headline,\n    'copy': text.copy,\n    'teamMember': teamMember.teamMember-> {\n      firstName,\n      lastName,\n      email,\n      phone,\n      'primaryColor': colors.primaryColor.color.hex,\n      profileImage\n    }\n  },\n",x="\n_type == 'illustratorPodcastModule' => {\n  ...,\n  'podcast': podcast.selectedPodcast->{\n    ...\n  }\n},\n",k="\n\t'modules': content.modules[] {\n    ".concat(o,"\n    ").concat(a,"\n    ").concat(c,"\n    ").concat(d,"\n  },\n"),S="\n  'modules': content.modules[] {\n    ".concat(o,"\n    ").concat("\n  _type == 'verticalCarouselWithCopyModule' => {\n    ...\n  },\n","\n    ").concat(a,"\n    ").concat(c,"\n    ").concat("\n  _type == 'accordionModule' => {\n    ...\n  },\n","\n    ").concat("\n_type == 'clientListModule' => {\n  _type,\n  'clients': clients[] {\n    'clientName': clientName,\n    'linkTarget': linkTarget {\n      'pageType': page->_type,\n      'slug': page->content.slug.current\n    }\n  }\n},\n","\n    ").concat(C,"\n  },\n"),b="\n  'modules': content.modules[] {\n    ".concat(o,"\n    ").concat(a,"\n    ").concat(c,"\n  },\n"),T="\n  'modules': content.modules[] {\n    ".concat(i,"\n    ").concat(h,"\n    ").concat(r,"\n    ").concat(l,"\n    ").concat(s,"\n    ").concat(a,"\n    ").concat(c,"\n  },\n"),_="\n  'modules': content.modules[] {\n    ".concat(i,"\n    ").concat(h,"\n  },\n"),I="\n  'modules': content.modules[] {\n    ".concat(r,"\n    ").concat(l,"\n    ").concat(i,"\n    ").concat(s,"\n    ").concat(g,"\n    _type == 'basicCarouselModule' => {\n      ...\n    },\n    ").concat("\n  _type == 'twoColumnMediaModule' => {\n    _type,\n    'columnLeftModules': content.columnLeftModules,\n    'columnRightModules': content.columnRightModules,\n  },\n","\n    ").concat(y,"\n    ").concat(x,"\n  },\n"),M="\n  'pageHeaderSettings': content.headerSettings {\n    'initialLogoColor': initialLogoColor.hex,\n    'logoColorOnScroll': logoColorOnScroll.hex,\n    'menuIconBackgroundColor': menuIconBackgroundColor.hex,\n    'menuIconLinesColor': menuIconLinesColor.hex\n  },\n",f="\n  'meta': {\n    'title': content.metaSettings.metaTitle,\n    'description': content.metaSettings.metaDescription,\n    'image': content.metaSettings.metaImage\n  },\n",P="\n  'hero': {\n    'headline': content.hero.headline,\n    'subheading': content.hero.subheading,\n    'colors': content.hero.colorSettings {\n      'headlineColor': headlineColor.hex,\n      'sublineColor': sublineColor.hex,\n      'backgroundColor': backgroundColor.hex\n    },\n\t\t'video': content.hero.videoSettings {\n      ...,\n      'heroVideo': heroVideo.asset->{\n        ...,\n        \"url\": \"https://stream.mux.com/\" + playbackId\n      }\n    },\n    'image': {\n      'image': content.hero.imageSettings.image,\n      'imagePosition': content.hero.imageSettings.imagePosition,\n      'imageScale': content.hero.imageSettings.imageScale,\n    },\n  },\n",N="\n  'randomHero': {\n    'headline': content.randomHero.headline,\n    'subheading': content.randomHero.subheading,\n    'items': content.randomHero.items[] {\n      'colors': colorSettings {\n        'headlineColor': headlineColor.hex,\n        'sublineColor': sublineColor.hex,\n        'backgroundColor': backgroundColor.hex\n      },\n      'video': videoSettings {\n        ...,\n        'heroVideo': heroVideo.asset->{\n          ...,\n          \"url\": \"https://stream.mux.com/\" + playbackId\n        }\n      },\n    }\n  },\n",v="\n  'collapsedHeroSettings': content.collapsedHeroSettings {\n    'backgroundColor': backgroundColor.hex,\n    'textColor': textColor.hex,\n  },\n",B="\n  'pageTransitionSettings': content.pageTransitionSettings {\n    'backgroundColor': backgroundColor.hex,\n    'textColor': textColor.hex,\n  },\n",V=("\n  *[_type == 'home' && _id == 'home'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(N,"\n    ").concat(k,"\n  }\n"),"\n  *[(_id in path('drafts.**')) && _type == 'home'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(N,"\n    ").concat(k,"\n  }\n")),L=("\n  *[_type == 'aboutPage' && _id == 'aboutPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(S,"\n  }\n"),"\n  *[(_id in path('drafts.**')) && _type == 'aboutPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(S,"\n  }\n")),G=("\n  *[_type == 'errorPage' && _id == 'errorPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    'headline': content.headline,\n    'copy': content.copy,\n    'links': content.links[] {\n      page->{\n        'pageType': _type,\n        'pageTitle': content.metaSettings.metaTitle\n      }\n    },\n    'image': content.image,\n  }\n"),"\n  *[_type == 'contactPage' && _id == 'contactPage'] {\n    ".concat(M,"\n\t\t'video': content.videoSettings {\n      ...,\n      'heroVideo': heroVideo.asset->{\n        ...,\n        \"url\": \"https://stream.mux.com/\" + playbackId\n      }\n    },\n    'phoneNumbers': content.phoneNumbers[] {\n      isVisible,\n      'teamMember': teamMember.teamMember->{\n        firstName,\n        phone\n      }\n    },\n    ").concat(b,"\n    ").concat(f,"\n  }\n"),"\n  *[_type == 'flexiblePage' && content.slug.current == $slug][0] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(T,"\n  }\n"),"\n*[(_id in path('drafts.**')) && content.slug.current == $slug][0] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(T,"\n  }\n")),H=("\n  *[_type == 'artistPage' && content.slug.current == $slug][0] {\n    'artistName': content.artistName,\n    'pageBackgroundColor': content.pageBackgroundColor.hex,\n    'carouselColorTheme': content.carouselColorTheme,\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(v,"\n    ").concat(B,"\n    ").concat(I,"\n    ").concat(x,"\n    'commissionIllustratorModule': content.commissionIllustratorModule {\n      _type,\n      'baseSettings': *[_type == 'commissionIllustratorBaseSettings'] {\n        'headline': globalHeadline,\n        'copy': globalCopy\n      },\n      'headline': text.headline,\n      'copy': text.copy,\n      'teamMember': teamMember.teamMember->{\n        firstName,\n        lastName,\n        email,\n        phone,\n        'primaryColor': colors.primaryColor.color.hex,\n        profileImage\n      }\n    },\n    ").concat(m,"\n  }\n"),"\n  *[(_id in path('drafts.**')) && content.slug.current == $slug][0] {\n    'artistName': content.artistName,\n    'pageBackgroundColor': content.pageBackgroundColor.hex,\n    'carouselColorTheme': content.carouselColorTheme,\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(v,"\n    ").concat(B,"\n    ").concat(I,"\n    ").concat(x,"\n    'commissionIllustratorModule': content.commissionIllustratorModule {\n      _type,\n      'baseSettings': *[_type == 'commissionIllustratorBaseSettings'] {\n        'headline': globalHeadline,\n        'copy': globalCopy\n      },\n      'headline': text.headline,\n      'copy': text.copy,\n      'teamMember': teamMember.teamMember->{\n        firstName,\n        lastName,\n        email,\n        phone,\n        'primaryColor': colors.primaryColor.color.hex,\n        profileImage\n      }\n    },\n    ").concat(m,"\n  }\n")),w=("\n  *[_type == 'illustratorsPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat("\n  'heroTextOnly': {\n    'headline': content.hero.headline,\n    'subline': content.hero.subline\n  },\n","\n    'illustratorsGrid': content.illustratorsGrid[] {\n      artist->{\n        'artistName': content.artistName,\n        'newBadgeVisibility': content.newBadgeVisibility,\n        'slug': content.slug.current,\n        'teaserImages': content.teaserImages[] {\n          'url': teaserImage.image,\n          'alt': teaserImage.alt\n        },\n        'pageTransitionSettings': content.pageTransitionSettings {\n          'backgroundColor': backgroundColor.hex,\n          'image': {\n            'imageUrl': image.image,\n            'alt': image.alt\n          }\n        },\n      }\n    },\n    'modules': content.modules[] {\n      ").concat(a,"\n    },\n  }\n"),"\n  *[_type == 'animationPage' && _id == 'animationPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(_,"\n  }\n"),"\n  *[(_id in path('drafts.**')) && _type == 'animationPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(P,"\n    ").concat(_,"\n  }\n")),R=("\n  *[_type == 'insightsPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    'modules': content.modules[] {\n      ").concat(a,"\n      ").concat(p,"\n      _type == 'insightsTeaserListSection' => {\n        ...\n      },\n      ").concat(d,"\n    },\n  }\n"),"\n  *[_type == 'insightsReadPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    'categories': *[_type == 'insightsReadCategory'] {\n      categoryTitle\n    },\n    'modules': content.modules[] {\n      ").concat(a,"\n      ").concat(c,"\n      ").concat(p,"\n      ").concat(o,"\n      _type == 'insightsTeaserListSection' => {\n        ...\n      },\n      ").concat(d,"\n    },\n  }\n"),"\n  *[_type == 'insightsWatchPage'] {\n    ".concat(M,"\n    'bodyText': content.bodyText,\n    ").concat(f,"\n    'modules': content.modules[] {\n      ").concat(a,"\n      ").concat(o,"\n      ").concat(p,"\n      _type == 'insightsTeaserListSection' => {\n        ...\n      },\n      ").concat(d,"\n    },\n  }\n"),"\n  *[_type == 'insightsReadPostPage' && content.slug.current == $slug][0] {\n    ".concat(M,"\n    ").concat(u,"\n    ").concat(f,"\n    'intro': {\n      'headline': content.headline,\n      'introText': content.introText,\n      'date': content.date,\n      'author': content.author,\n      'category': content.category->categoryTitle\n    },\n    'modules': content.modules[] {\n      _type == 'expandableCarouselModule' => {\n        ...\n      },\n      _type == 'textBlock' => {\n        ...,\n        'text': text[] {\n          ...,\n          markDefs[]{\n            ...,\n            _type == \"internalLink\" => {\n              'pageType': @.reference->_type,\n              'slug': @.reference->content.slug.current,\n              'transitionBgColor': @.reference->content.pageTransitionSettings.backgroundColor.hex,\n              'transitionTextColor': @.reference->content.pageTransitionSettings.textColor.hex,\n              'transitionImage': @.reference->content.pageTransitionSettings.image,\n              'artistName': @.reference->content.artistName\n            }\n          }\n        }\n      },\n      _type == 'blockQuote' => {\n        ...\n      },\n      ").concat(y,"\n      ").concat(o,"\n      ").concat(a,"\n      ").concat(d,"\n\n      // New modules:\n      ").concat(r,"\n      ").concat(l,"\n      ").concat(g,"\n      ").concat(c,"\n      ").concat(s,"\n      ").concat(C,"\n    },\n  }\n"),"\n  *[(_id in path('drafts.**')) && content.slug.current == $slug][0] {\n    ".concat(M,"\n    ").concat(f,"\n    ").concat(u,"\n    'intro': {\n      'headline': content.headline,\n      'introText': content.introText,\n      'date': content.date,\n      'author': content.author,\n      'category': content.category->categoryTitle\n    },\n    'modules': content.modules[] {\n      _type == 'expandableCarouselModule' => {\n        ...\n      },\n      _type == 'textBlock' => {\n        ...\n      },\n      _type == 'blockQuote' => {\n        ...\n      },\n      ").concat(y,"\n      ").concat(o,"\n      ").concat(a,"\n      ").concat(d,"\n\n      // New modules:\n      ").concat(r,"\n      ").concat(l,"\n      ").concat(g,"\n      ").concat(c,"\n      ").concat(s,"\n      ").concat(C,"\n    },\n  }\n")),U=("\n  *[_type == 'insightsListenPage'] {\n    ".concat(M,"\n    ").concat(f,"\n    'bodyText': content.bodyText,\n    'modules': content.modules[] {\n      ").concat(a,"\n      ").concat(o,"\n    },\n  }\n"),"\n*[_type == 'jobPostPage' && content.slug.current == $slug][0] {\n  ".concat(M,"\n  ").concat(f,"\n  ...   \n}\n"),"\n*[(_id in path('drafts.**')) && content.slug.current == $slug][0] {\n  ".concat(M,"\n  ").concat(f,"\n  ...   \n}\n"))}}]);