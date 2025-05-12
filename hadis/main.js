"use strict";
(self["webpackChunkhadith"] = self["webpackChunkhadith"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/pages/hadith-mobile/hadith-mobile.component */ 582);
/* harmony import */ var _app_components_pages_book_mobile_book_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/pages/book-mobile/book-mobile.component */ 8230);
/* harmony import */ var _app_components_pages_chapter_mobile_chapter_mobile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/components/pages/chapter-mobile/chapter-mobile.component */ 2352);
/* harmony import */ var _app_components_pages_bookmark_hadith_bookmark_hadith_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/pages/bookmark-hadith/bookmark-hadith.component */ 6662);
/* harmony import */ var _app_components_pages_last_read_hadith_last_read_hadith_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/components/pages/last-read-hadith/last-read-hadith.component */ 2120);
/* harmony import */ var _components_pages_hadith_book_desc_hadith_book_desc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/hadith-book-desc/hadith-book-desc.component */ 8600);
/* harmony import */ var _components_pages_title_mobile_title_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/title-mobile/title-mobile.component */ 314);
/* harmony import */ var _app_components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/pages/settings/settings.component */ 5398);
/* harmony import */ var _app_components_pages_single_hadith_mobile_single_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/pages/single-hadith-mobile/single-hadith-mobile.component */ 9788);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












const routes = [{
  path: '',
  component: _app_components_pages_book_mobile_book_mobile_component__WEBPACK_IMPORTED_MODULE_1__.BookMobileComponent,
  data: {
    title: 'হাদীস'
  }
}, {
  path: 'mobile-book/:book_id/chapter/:chapter_id/hadiths',
  component: _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_0__.HadithMobileComponent,
  data: {
    title: 'হাদীস'
  }
}, {
  path: 'mobile-book/:book_id/chapter/:chapter_id/titles',
  component: _components_pages_title_mobile_title_mobile_component__WEBPACK_IMPORTED_MODULE_6__.TitleMobileComponent,
  data: {
    title: 'পরিচ্ছেদ'
  }
}, {
  path: 'mobile-book/:book_id/chapter/:chapter_id/title/:title_id/hadiths',
  component: _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_0__.HadithMobileComponent,
  data: {
    title: 'হাদীস'
  }
}, {
  path: 'mobile-book/hadith/:id',
  component: _app_components_pages_single_hadith_mobile_single_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_8__.SingleHadithMobileComponent,
  data: {
    title: 'হাদীস'
  }
}, {
  path: 'mobile-hadith-bookmarks',
  component: _app_components_pages_bookmark_hadith_bookmark_hadith_component__WEBPACK_IMPORTED_MODULE_3__.BookmarkHadithComponent,
  data: {
    title: 'সংরক্ষিত হাদীস'
  }
}, {
  path: 'last-read-hadith',
  component: _app_components_pages_last_read_hadith_last_read_hadith_component__WEBPACK_IMPORTED_MODULE_4__.LastReadHadithComponent,
  data: {
    title: 'সর্বশেষ পঠিত হাদীস'
  }
}, {
  path: 'hadith-mobile/search',
  component: _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_0__.HadithMobileComponent,
  data: {
    title: 'হাদীস সার্চ'
  }
}, {
  path: 'mobile-book/:id/chapters',
  component: _app_components_pages_chapter_mobile_chapter_mobile_component__WEBPACK_IMPORTED_MODULE_2__.ChapterMobileComponent,
  data: {
    title: 'অধ্যায়'
  }
}, {
  path: 'book-description/:id',
  component: _components_pages_hadith_book_desc_hadith_book_desc_component__WEBPACK_IMPORTED_MODULE_5__.HadithBookDescComponent,
  data: {
    title: 'হাদীসের কিতাব'
  }
}, {
  path: 'settings',
  component: _app_components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent,
  data: {
    title: 'সেটিংস'
  }
},
// otherwise redirect to homepage
{
  path: '**',
  redirectTo: ''
}];
const routerOptions = {
  scrollPositionRestoration: 'enabled'
  // onSameUrlNavigation: 'reload'
  // anchorScrolling: 'enabled',
  // scrollOffset: [0, 100] // [x, y]
  // ...any other options you'd like to use
};

let AppRoutingModule = /*#__PURE__*/(() => {
  class AppRoutingModule {
    static {
      this.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, routerOptions), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
      });
    }
  }
  return AppRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);



let AppComponent = /*#__PURE__*/(() => {
  class AppComponent {
    constructor(activatedRoute, themeService) {
      this.activatedRoute = activatedRoute;
      this.themeService = themeService;
      this.title = 'Hadith';
    }
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(queryParams => {
        if (queryParams.theme) {
          this.themeService.setCurrentTheme(queryParams.theme);
        }
      });
    }
    static {
      this.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          }
        },
        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return AppComponent;
})();

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_intercepters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/intercepters */ 5229);
/* harmony import */ var _app_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/pipes/safeHtml.pipe */ 6578);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ng-select/ng-select */ 2223);
/* harmony import */ var _app_modules_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/material-module */ 8438);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/components/component/search-comp/search-comp.component */ 4421);
/* harmony import */ var _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/components/pages/hadith-mobile/hadith-mobile.component */ 582);
/* harmony import */ var _app_components_pages_chapter_mobile_chapter_mobile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/components/pages/chapter-mobile/chapter-mobile.component */ 2352);
/* harmony import */ var _app_components_pages_book_mobile_book_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/components/pages/book-mobile/book-mobile.component */ 8230);
/* harmony import */ var _app_components_pages_bookmark_hadith_bookmark_hadith_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/components/pages/bookmark-hadith/bookmark-hadith.component */ 6662);
/* harmony import */ var _app_components_pages_last_read_hadith_last_read_hadith_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/components/pages/last-read-hadith/last-read-hadith.component */ 2120);
/* harmony import */ var _app_components_component_mobile_hadith_comp_mobile_hadith_comp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/components/component/mobile-hadith-comp/mobile-hadith-comp.component */ 2553);
/* harmony import */ var _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/components/component/mobile-hadith-list-comp/mobile-hadith-list-comp.component */ 3189);
/* harmony import */ var _components_component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/component/pagination/pagination.component */ 5251);
/* harmony import */ var _components_component_hadith_copy_dialog_hadith_copy_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/component/hadith-copy-dialog/hadith-copy-dialog.component */ 4845);
/* harmony import */ var _components_pages_hadith_book_desc_hadith_book_desc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/hadith-book-desc/hadith-book-desc.component */ 8600);
/* harmony import */ var _components_pages_title_mobile_title_mobile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/title-mobile/title-mobile.component */ 314);
/* harmony import */ var _app_components_pages_single_hadith_mobile_single_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @app/components/pages/single-hadith-mobile/single-hadith-mobile.component */ 9788);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-indexed-db */ 1307);
/* harmony import */ var _components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/component/download-hadith-modal/download-hadith-modal.component */ 8921);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/theme.pipe */ 4635);
/* harmony import */ var _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layouts/footer/footer.component */ 4677);
/* harmony import */ var _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/settings/settings.component */ 5398);
/* harmony import */ var _components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/component/confirmation-modal/confirmation-modal.component */ 1429);
/* harmony import */ var ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-mat-intl-tel-input */ 1503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 7580);


































const booksSlug = ['bukhari', 'muslim', 'tirmiji', 'daud', 'nasai', 'majah', 'muatta-malik', 'shamail-tirmiji', 'twahabi-sharif', 'musnad-hanifa', 'muatta-muhammad', 'mufrad', 'mishkat-al-misbah', 'fiqh-us-sunnan', 'akhlakhunnabi', 'riaz-us-salihin', 'imam-ahmad', 'bukhari-urdu', 'muslim-urdu', 'tirmiji-urdu', 'abu-daud-urdu', 'nasai-urdu', 'ibn-majah-urdu', 'muatta-malik-urdu', 'shamail-tirmiji-urdu', 'imam-ahmad-urdu', 'ibn-shaibah-urdu', 'dara-kutni-urdu', 'daremi-urdu', 'baihaqi-urdu', 'kanzul-ummal-urdu', 'hammam-urdu', 'maariful-hadith-urdu', 'aat-targib', 'shahifaye-hammam', 'hadith-kudsi'];
const hadithTables = booksSlug.map(book => {
  return {
    store: book + 'Hadiths',
    storeConfig: {
      keyPath: 'id',
      autoIncrement: true
    },
    storeSchema: [{
      name: 'id',
      keypath: 'id',
      options: {
        unique: true
      }
    }, {
      name: 'sequence',
      keypath: 'sequence',
      options: {
        unique: false
      }
    }, {
      name: 'hadith_number',
      keypath: 'hadith_number',
      options: {
        unique: false
      }
    }, {
      name: 'hadith_number_one',
      keypath: 'hadith_number_one',
      options: {
        unique: false
      }
    }, {
      name: 'hadith_number_two',
      keypath: 'hadith_number_two',
      options: {
        unique: false
      }
    }, {
      name: 'book_id',
      keypath: 'book_id',
      options: {
        unique: false
      }
    }, {
      name: 'chapter_id',
      keypath: 'chapter_id',
      options: {
        unique: false
      }
    }, {
      name: 'title_id',
      keypath: 'title_id',
      options: {
        unique: false
      }
    }, {
      name: 'type_id',
      keypath: 'type_id',
      options: {
        unique: false
      }
    }, {
      name: 'description',
      keypath: 'description',
      options: {
        unique: false
      }
    }, {
      name: 'description_ar',
      keypath: 'description_ar',
      options: {
        unique: false
      }
    }, {
      name: 'note',
      keypath: 'note',
      options: {
        unique: false
      }
    }, {
      name: 'explanation',
      keypath: 'explanation',
      options: {
        unique: false
      }
    }]
  };
});
const chapterTables = booksSlug.map(book => {
  return {
    store: book + 'Chapters',
    storeConfig: {
      keyPath: 'id',
      autoIncrement: true
    },
    storeSchema: [{
      name: 'id',
      keypath: 'id',
      options: {
        unique: true
      }
    }, {
      name: 'book_id',
      keypath: 'book_id',
      options: {
        unique: false
      }
    }, {
      name: 'title',
      keypath: 'title',
      options: {
        unique: false
      }
    }, {
      name: 'title_ar',
      keypath: 'title_ar',
      options: {
        unique: false
      }
    }, {
      name: 'total_hadith',
      keypath: 'total_hadith',
      options: {
        unique: false
      }
    }, {
      name: 'range_start',
      keypath: 'range_start',
      options: {
        unique: false
      }
    }, {
      name: 'range_end',
      keypath: 'range_end',
      options: {
        unique: false
      }
    }]
  };
});
const titleTables = booksSlug.map(book => {
  return {
    store: book + 'Titles',
    storeConfig: {
      keyPath: 'id',
      autoIncrement: true
    },
    storeSchema: [{
      name: 'id',
      keypath: 'id',
      options: {
        unique: true
      }
    }, {
      name: 'title',
      keypath: 'title',
      options: {
        unique: false
      }
    }, {
      name: 'title_ar',
      keypath: 'title_ar',
      options: {
        unique: false
      }
    }, {
      name: 'sequence',
      keypath: 'sequence',
      options: {
        unique: false
      }
    }, {
      name: 'total_hadith',
      keypath: 'total_hadith',
      options: {
        unique: false
      }
    }, {
      name: 'range_start',
      keypath: 'range_start',
      options: {
        unique: false
      }
    }, {
      name: 'range_end',
      keypath: 'range_end',
      options: {
        unique: false
      }
    }, {
      name: 'book_id',
      keypath: 'book_id',
      options: {
        unique: false
      }
    }, {
      name: 'chapter_id',
      keypath: 'chapter_id',
      options: {
        unique: false
      }
    }]
  };
});
const books = {
  store: 'books',
  storeConfig: {
    keyPath: 'id',
    autoIncrement: true
  },
  storeSchema: [{
    name: 'id',
    keypath: 'id',
    options: {
      unique: true
    }
  }, {
    name: 'title',
    keypath: 'title',
    options: {
      unique: false
    }
  }, {
    name: 'english_title',
    keypath: 'english_title',
    options: {
      unique: false
    }
  }, {
    name: 'title_ar',
    keypath: 'title_ar',
    options: {
      unique: false
    }
  }, {
    name: 'description',
    keypath: 'description',
    options: {
      unique: false
    }
  }, {
    name: 'publication',
    keypath: 'publication',
    options: {
      unique: false
    }
  }, {
    name: 'total_section',
    keypath: 'total_section',
    options: {
      unique: false
    }
  }, {
    name: 'total_hadith',
    keypath: 'total_hadith',
    options: {
      unique: false
    }
  }, {
    name: 'has_title',
    keypath: 'has_title',
    options: {
      unique: false
    }
  }, {
    name: 'slug',
    keypath: 'slug',
    options: {
      unique: true
    }
  }, {
    name: 'downloaded',
    keypath: 'downloaded',
    options: {
      unique: false
    }
  }]
};
const dbConfig = {
  name: 'hadithBooks',
  version: 4,
  objectStoresMeta: [...hadithTables, ...titleTables, ...chapterTables, books]
};
let AppModule = /*#__PURE__*/(() => {
  class AppModule {
    static {
      this.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
        providers: [_app_intercepters__WEBPACK_IMPORTED_MODULE_2__.httpInterceptorProviders],
        imports: [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_24__.NgxIndexedDBModule.forRoot(dbConfig), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _app_modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_32__.NgxMatIntlTelInputComponent]
      });
    }
  }
  return AppModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _app_components_pages_hadith_mobile_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_6__.HadithMobileComponent, _app_components_pages_book_mobile_book_mobile_component__WEBPACK_IMPORTED_MODULE_8__.BookMobileComponent, _app_components_pages_chapter_mobile_chapter_mobile_component__WEBPACK_IMPORTED_MODULE_7__.ChapterMobileComponent, _app_components_pages_bookmark_hadith_bookmark_hadith_component__WEBPACK_IMPORTED_MODULE_9__.BookmarkHadithComponent, _app_components_pages_last_read_hadith_last_read_hadith_component__WEBPACK_IMPORTED_MODULE_10__.LastReadHadithComponent, _app_components_component_mobile_hadith_comp_mobile_hadith_comp_component__WEBPACK_IMPORTED_MODULE_11__.MobileHadithCompComponent, _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_12__.MobileHadithListCompComponent, _app_pipes_safeHtml_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe, _app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_5__.SearchCompComponent, _components_component_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__.PaginationComponent, _components_component_hadith_copy_dialog_hadith_copy_dialog_component__WEBPACK_IMPORTED_MODULE_14__.HadithCopyDialogComponent, _components_pages_hadith_book_desc_hadith_book_desc_component__WEBPACK_IMPORTED_MODULE_15__.HadithBookDescComponent, _components_pages_title_mobile_title_mobile_component__WEBPACK_IMPORTED_MODULE_16__.TitleMobileComponent, _components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_18__.DownloadHadithModalComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_19__.ThemePipe, _components_layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__.FooterComponent, _components_pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__.SettingsComponent, _components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_22__.ConfirmationModalComponent, _app_components_pages_single_hadith_mobile_single_hadith_mobile_component__WEBPACK_IMPORTED_MODULE_17__.SingleHadithMobileComponent],
    imports: [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_24__.NgxIndexedDBModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _app_modules_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_27__.NgSelectModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_28__.NgxPaginationModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_31__.BrowserAnimationsModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgOptimizedImage, ngx_mat_intl_tel_input__WEBPACK_IMPORTED_MODULE_32__.NgxMatIntlTelInputComponent]
  });
})();

/***/ }),

/***/ 1429:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/component/confirmation-modal/confirmation-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationModalComponent: () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);





let ConfirmationModalComponent = /*#__PURE__*/(() => {
  class ConfirmationModalComponent {
    constructor(dialogRef, data) {
      this.dialogRef = dialogRef;
      this.data = data;
    }
    ngOnInit() {}
    closeDialog(confirmation) {
      this.dialogRef.close(confirmation);
    }
    static {
      this.ɵfac = function ConfirmationModalComponent_Factory(t) {
        return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ConfirmationModalComponent,
        selectors: [["app-confirmation-modal"]],
        decls: 10,
        vars: 9,
        consts: [["mat-dialog-content", ""], [1, "bangla-font", "text-justify"], [1, "d-flex", "justify-content-center", "mt-3"], ["mat-raised-button", "", "type", "submit", 1, "modal-cancel-btn", "ms-auto", "me-2", "bangla-font", 3, "click"], ["mat-raised-button", "", 1, "bangla-font", "btn-green", 3, "click"]],
        template: function ConfirmationModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_a_click_6_listener() {
              return ctx.closeDialog(true);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u09B9\u09CD\u09AF\u09BE\u0981 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_8_listener() {
              return ctx.closeDialog(false);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u09A8\u09BE ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_0__.ThemePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ConfirmationModalComponent;
})();

/***/ }),

/***/ 8921:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/component/download-hadith-modal/download-hadith-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadHadithModalComponent: () => (/* binding */ DownloadHadithModalComponent)
/* harmony export */ });
/* harmony import */ var _Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);










function DownloadHadithModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.data.book.title, " \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u09B9\u099A\u09CD\u099B\u09C7...");
  }
}
function DownloadHadithModalComponent_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 23);
  }
}
function DownloadHadithModalComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DownloadHadithModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0985\u09A7\u09CD\u09AF\u09BE\u09DF\u09B8\u09AE\u09C2\u09B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DownloadHadithModalComponent_div_3_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DownloadHadithModalComponent_div_3_div_6_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.chaptersDownloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.chaptersDownloading);
  }
}
function DownloadHadithModalComponent_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 23);
  }
}
function DownloadHadithModalComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DownloadHadithModalComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u09B8\u09AE\u09C2\u09B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DownloadHadithModalComponent_div_4_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DownloadHadithModalComponent_div_4_div_6_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.titlesDownloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.titlesDownloading);
  }
}
function DownloadHadithModalComponent_div_5_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 23);
  }
}
function DownloadHadithModalComponent_div_5_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DownloadHadithModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u09B9\u09BE\u09A6\u09C0\u09B8\u09B8\u09AE\u09C2\u09B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DownloadHadithModalComponent_div_5_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DownloadHadithModalComponent_div_5_div_6_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.hadithsDownloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.hadithsDownloading);
  }
}
let DownloadHadithModalComponent = /*#__PURE__*/(() => {
  class DownloadHadithModalComponent {
    constructor(dialog, dialogRef, hadithService, indexeddbService, data) {
      this.dialog = dialog;
      this.dialogRef = dialogRef;
      this.hadithService = hadithService;
      this.indexeddbService = indexeddbService;
      this.data = data;
      this.chaptersDownloading = false;
      this.titlesDownloading = false;
      this.hadithsDownloading = false;
    }
    ngOnInit() {
      var _this = this;
      return (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.data?.book) {
          switch (_this.data?.type) {
            case 'chapters':
              yield _this.downloadChapters(_this.data.book.slug);
              break;
            case 'titles':
              yield _this.downloadTitles(_this.data.book.slug);
              break;
            case 'hadiths':
              yield _this.downloadHadiths(_this.data.book.slug);
              break;
            default:
              yield _this.downloadChapters(_this.data.book.slug);
              yield _this.downloadTitles(_this.data.book.slug);
              yield _this.downloadHadiths(_this.data.book.slug);
          }
        }
      })();
    }
    downloadChapters(slug) {
      this.chaptersDownloading = true;
      this.hadithService.downloadChaptersBySlug(slug).subscribe(res => {
        const chapters = res.data.rows;
        this.indexeddbService.bulkAdd(slug + 'Chapters', chapters);
        if (this.data?.type === 'chapters') {
          this.hadithsDownloading = false;
          this.indexeddbService.setDownloadedValue({
            book: slug,
            downloaded: true
          });
          this.dialogRef.close();
        }
      });
    }
    downloadTitles(slug) {
      this.titlesDownloading = true;
      this.hadithService.downloadTitlesBySlug(slug).subscribe(res => {
        const titles = res.data.rows;
        this.indexeddbService.bulkAdd(slug + 'Titles', titles);
        if (this.data?.type === 'titles') {
          this.hadithsDownloading = false;
          this.indexeddbService.setDownloadedValue({
            book: slug,
            downloaded: true
          });
          this.dialogRef.close();
        }
        this.titlesDownloading = false;
      });
    }
    downloadHadiths(slug) {
      this.hadithsDownloading = true;
      this.hadithService.downloadHadithsBySlug(slug).subscribe(res => {
        const hadiths = res.data.rows;
        this.indexeddbService.bulkAdd(slug + 'Hadiths', hadiths).subscribe(value => {
          this.hadithsDownloading = false;
          this.indexeddbService.setDownloadedValue({
            book: slug,
            downloaded: true
          });
          this.dialogRef.close();
        });
      });
    }
    isVisible(type, givenType) {
      switch (type) {
        case 'chapters':
          return givenType === type;
        case 'titles':
          return givenType === type;
        case 'hadiths':
          return givenType === type;
        case 'all':
          return true;
        default:
          return 'none';
      }
    }
    static {
      this.ɵfac = function DownloadHadithModalComponent_Factory(t) {
        return new (t || DownloadHadithModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: DownloadHadithModalComponent,
        selectors: [["app-download-hadith-modal"]],
        decls: 6,
        vars: 8,
        consts: [["mat-dialog-content", ""], ["class", "bangla-font text-center font-weight-bold mb-2", 3, "class", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "bangla-font", "text-center", "font-weight-bold", "mb-2"], [1, "row"], [1, "col-6", "bangla-font"], [1, "col-6"], [4, "ngIf"], ["strokeWidth", "3", 3, "diameter"]],
        template: function DownloadHadithModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DownloadHadithModalComponent_div_2_Template, 3, 5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DownloadHadithModalComponent_div_3_Template, 7, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DownloadHadithModalComponent_div_4_Template, 7, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DownloadHadithModalComponent_div_5_Template, 7, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 6, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVisible(ctx.data == null ? null : ctx.data.type, "chapters"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVisible(ctx.data == null ? null : ctx.data.type, "titles"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVisible(ctx.data == null ? null : ctx.data.type, "hadiths"));
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return DownloadHadithModalComponent;
})();

/***/ }),

/***/ 4845:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/component/hadith-copy-dialog/hadith-copy-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HadithCopyDialogComponent: () => (/* binding */ HadithCopyDialogComponent)
/* harmony export */ });
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);







let HadithCopyDialogComponent = /*#__PURE__*/(() => {
  class HadithCopyDialogComponent {
    constructor(helperService, snackBarService, dialog, dialogRef, hadithShareDialogData) {
      this.helperService = helperService;
      this.snackBarService = snackBarService;
      this.dialog = dialog;
      this.dialogRef = dialogRef;
      this.hadithShareDialogData = hadithShareDialogData;
      this.baseUrl = 'https://muslimbangla.com/';
      this.applink = true;
      this.website = true;
      // tslint:disable-next-line:variable-name
      this.title_ar = true;
      // tslint:disable-next-line:variable-name
      this.title_bn = true;
      // tslint:disable-next-line:variable-name
      this.hadith_ar = true;
      // tslint:disable-next-line:variable-name
      this.hadith_bn = true;
      this.type = true;
      this.rabi = true;
      this.tohabiBookId = 9;
      this.misqatBookId = 13;
    }
    ngOnInit() {
      const settingsObjectString = localStorage.getItem('hadithCopySettings');
      try {
        if (settingsObjectString) {
          // @ts-ignore
          const settingsObject = JSON.parse(settingsObjectString);
          this.applink = settingsObject.applink !== undefined ? settingsObject.applink : true;
          this.website = settingsObject.website !== undefined ? settingsObject.website : true;
          this.title_ar = settingsObject.title_ar !== undefined ? settingsObject.title_ar : true;
          this.title_bn = settingsObject.title_bn !== undefined ? settingsObject.title_bn : true;
          this.hadith_ar = settingsObject.hadith_ar !== undefined ? settingsObject.hadith_ar : true;
          this.hadith_bn = settingsObject.hadith_bn !== undefined ? settingsObject.hadith_bn : true;
          this.type = settingsObject.type !== undefined ? settingsObject.type : true;
          this.rabi = settingsObject.rabi !== undefined ? settingsObject.rabi : true;
        }
      } catch (e) {
        this.changeHadithShareLocalStorage();
      }
    }
    closeDialog() {
      this.dialogRef.close();
    }
    changeHadithShareLocalStorage() {
      const hadithCopySettings = {
        applink: this.applink,
        website: this.website,
        title_ar: this.title_ar,
        title_bn: this.title_bn,
        hadith_ar: this.hadith_ar,
        hadith_bn: this.hadith_bn,
        type: this.type,
        rabi: this.rabi
      };
      localStorage.setItem('hadithCopySettings', JSON.stringify(hadithCopySettings));
    }
    newLine(str) {
      return str.replace(/<br>/g, '\n');
    }
    onCopy(hadith) {
      // tslint:disable-next-line:one-variable-per-declaration
      let textarea, result;
      // tslint:disable-next-line:variable-name
      let string = '';
      if (this.title_ar) {
        string += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.title_ar)))}\n\n`;
      }
      if (this.hadith_ar) {
        string += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.description_ar)))}\n\n`;
      }
      if (this.title_bn) {
        string += `পরিচ্ছেদঃ ${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.title)))}\n\n`;
      }
      if (this.hadith_bn) {
        string += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.description)))}\n\n`;
      }
      string += `${hadith.book.title}\n`;
      // tslint:disable-next-line:triple-equals
      if (hadith.book_id == this.tohabiBookId ||
      // tslint:disable-next-line:triple-equals
      hadith.book_id == this.misqatBookId) {
        string += `হাদীস নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number.toString())}  `;
        if (hadith.hadith_number_one) {
          string += ` - ${this.helperService.changeEnglishToBengali(hadith.hadith_number_one?.toString())}`;
        }
      } else {
        string += `হাদীস নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number.toString())}  `;
        if (hadith.hadith_number_one) {
          string += `আন্তর্জাতিক নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number_one.toString())}`;
        }
        if (hadith.hadith_number_two) {
          string += ` - ${this.helperService.changeEnglishToBengali(hadith.hadith_number_two.toString())}`;
        }
      }
      string += '\n\n';
      if (this.type) {
        if (hadith.book.id === 1 || hadith.book.id === 2) {
          string += `তাহকীকঃ তাহকীক নিষ্প্রয়োজন\n\n`;
        } else {
          if (hadith.type && hadith.type?.title) {
            string += `তাহকীকঃ ${hadith.type.title}\n\n`;
          }
        }
      }
      if (this.rabi && hadith.rabis.length > 0) {
        string += `বর্ণনাকারীঃ `;
        for (const rabi of hadith.rabis) {
          string += ` ${rabi.title}`;
          if (rabi.death_year) {
            string += `(মৃত্যুঃ ${this.helperService.changeEnglishToBengali(rabi.death_year)} হিজরী)`;
          }
          if (rabi.id !== hadith.rabis[hadith.rabis.length - 1].id) {
            string += `,`;
          }
        }
        string += '\n\n';
      }
      if (this.website) {
        string += `হাদীসের লিংকঃ https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
      }
      if (this.applink) {
        string += `অ্যাপসের লিংকঃ https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
      }
      try {
        textarea = document.createElement('textarea');
        textarea.setAttribute('readonly', true);
        textarea.setAttribute('contenteditable', true);
        textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
        textarea.value = string;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const range = document.createRange();
        range.selectNodeContents(textarea);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
        textarea.setSelectionRange(0, textarea.value.length);
        result = document.execCommand('copy');
      } catch (err) {
        console.error(err);
        result = null;
      } finally {
        document.body.removeChild(textarea);
      }
      // manual copy fallback using prompt
      if (!result) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
        result = prompt(`Press ${copyHotkey}`, string); // eslint-disable-line no-alert
        if (!result) {
          this.snackBarService.warn(`Sorry! Link not copied!`);
        }
      }
      this.snackBarService.success(`হাদীসটি কপি করা হয়েছে।`);
      this.closeDialog();
    }
    addHtmlTag(str) {
      const htmlRemoved = str.replace(/&lt;p&gt;/g, '<p>');
      return htmlRemoved.replace(/&lt;\/p&gt;/g, '</p>').replace(/&amp;#39;/g, '’').replace(/&amp;rsquo;/g, '’').replace(/&amp;lsquo;/g, '‘').replace(/&amp;mdash;/g, '-').replace(/&amp;zwnj;/g, '&zwnj;').replace(/&amp;quot;/g, '″').replace(/&lt;hr \/&gt;/g, '<hr/>').replace(/&lt;br \/&gt;/g, '<br />').replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\/strong&gt;/g, '</strong>').replace(/&lt;p dir=&quot;rtl&quot;&gt;/g, '<p>').replace(/&#039;/g, '’').replace(/&rsquo;/g, '’').replace(/&rlm;/g, '').replace(/&quot;/g, '').replace(/&amp;ldquo;/g, '“').replace(/&amp;rdquo;/g, '”').replace(/&ndash;/g, '–').replace(/\(ইফাঃ\)/g, '').replace(/&zwnj;/g, '');
    }
    openShareDialog(hadith) {
      let hadithText = '';
      if (this.title_ar) {
        hadithText += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.title_ar)))}\n\n`;
      }
      if (this.hadith_ar) {
        hadithText += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.description_ar)))}\n\n`;
      }
      if (this.title_bn) {
        hadithText += `পরিচ্ছেদঃ ${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.title)))}\n\n`;
      }
      if (this.hadith_bn) {
        hadithText += `${_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService.removeHtmlTag(this.addHtmlTag(this.newLine(hadith.description)))}\n\n`;
      }
      hadithText += `${hadith.book.title}\n`;
      // tslint:disable-next-line:triple-equals
      if (hadith.book_id == this.tohabiBookId ||
      // tslint:disable-next-line:triple-equals
      hadith.book_id == this.misqatBookId) {
        hadithText += `হাদীস নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number.toString())}  `;
        if (hadith.hadith_number_one) {
          hadithText += ` - ${this.helperService.changeEnglishToBengali(hadith.hadith_number_one?.toString())}`;
        }
      } else {
        hadithText += `হাদীস নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number.toString())}  `;
        if (hadith.hadith_number_one) {
          hadithText += `আন্তর্জাতিক নং: ${this.helperService.changeEnglishToBengali(hadith.hadith_number_one.toString())}`;
        }
        if (hadith.hadith_number_two) {
          hadithText += ` - ${this.helperService.changeEnglishToBengali(hadith.hadith_number_two.toString())}`;
        }
      }
      hadithText += '\n\n';
      if (this.type) {
        if (hadith.book.id === 1 || hadith.book.id === 2) {
          hadithText += `তাহকীকঃ তাহকীক নিষ্প্রয়োজন\n\n`;
        } else {
          if (hadith.type && hadith.type?.title) {
            hadithText += `তাহকীকঃ ${hadith.type.title}\n\n`;
          }
        }
      }
      if (this.rabi && hadith.rabis.length > 0) {
        hadithText += `বর্ণনাকারীঃ `;
        for (const rabi of hadith.rabis) {
          hadithText += ` ${rabi.title}`;
          if (rabi.death_year) {
            hadithText += `(মৃত্যুঃ ${this.helperService.changeEnglishToBengali(rabi.death_year)} হিজরী)`;
          }
          if (rabi.id !== hadith.rabis[hadith.rabis.length - 1].id) {
            hadithText += `,`;
          }
        }
        hadithText += '\n\n';
      }
      if (this.website) {
        hadithText += `হাদীসের লিংকঃ https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
      }
      if (this.applink) {
        hadithText += `অ্যাপসের লিংকঃ https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
      }
      this.closeDialog();
      // @ts-ignore
      AndroidNative.share(hadithText);
    }
    static {
      this.ɵfac = function HadithCopyDialogComponent_Factory(t) {
        return new (t || HadithCopyDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HadithCopyDialogComponent,
        selectors: [["app-hadith-copy-dialog"]],
        decls: 57,
        vars: 56,
        consts: [["mat-dialog-content", "", 1, "bangla-font"], [1, "d-flex", "justify-content-between"], [1, "bangla-font", "text-center", "font-weight-bold", 2, "font-size", "18px"], ["aria-label", "Close", 1, "dialog-close", 3, "click"], [1, "form-check", "mt-3"], ["id", "applink", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "applink", 1, "form-check-label", "clickable"], [1, "form-check"], ["id", "website", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "website", 1, "form-check-label", "clickable"], ["id", "title_ar", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "title_ar", 1, "form-check-label", "clickable"], ["id", "title_bn", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "title_bn", 1, "form-check-label", "clickable"], ["id", "hadith_ar", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "hadith_ar", 1, "form-check-label", "clickable"], ["id", "hadith_bn", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "hadith_bn", 1, "form-check-label", "clickable"], ["id", "type", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "type", 1, "form-check-label", "clickable"], ["id", "rabi", "type", "checkbox", 1, "form-check-input", "clickable", 3, "checked", "change"], ["for", "rabi", 1, "form-check-label", "clickable"], ["mat-dialog-actions", "", 1, "d-flex", "justify-content-center", "bangla-font", "pb-3"], ["type", "button", 1, "btn", "btn-dark", "me-3", 3, "click"], ["type", "button", 1, "btn", "btn-success", 3, "click"]],
        template: function HadithCopyDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0995\u09BF \u0995\u09BF \u0995\u09AA\u09BF \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HadithCopyDialogComponent_Template_span_click_7_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4)(12, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_12_listener() {
              ctx.applink = !ctx.applink;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0985\u09CD\u09AF\u09BE\u09AA\u09B8\u09C7\u09B0 \u09B2\u09BF\u0982\u0995");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_17_listener() {
              ctx.website = !ctx.website;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09B2\u09BF\u0982\u0995");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 7)(22, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_22_listener() {
              ctx.title_ar = !ctx.title_ar;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6 (\u0986\u09B0\u09AC\u09BF)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7)(27, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_27_listener() {
              ctx.title_bn = !ctx.title_bn;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6 (\u09AC\u09BE\u0982\u09B2\u09BE)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7)(32, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_32_listener() {
              ctx.hadith_ar = !ctx.hadith_ar;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u09B9\u09BE\u09A6\u09C0\u09B8 (\u0986\u09B0\u09AC\u09BF) - \u09B9\u09B0\u0995\u09A4\u09B8\u09B9");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 7)(37, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_37_listener() {
              ctx.hadith_bn = !ctx.hadith_bn;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\u09B9\u09BE\u09A6\u09C0\u09B8 (\u09AC\u09BE\u0982\u09B2\u09BE)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 7)(42, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_42_listener() {
              ctx.type = !ctx.type;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09A4\u09BE\u09B9\u0995\u09C0\u0995");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 7)(47, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HadithCopyDialogComponent_Template_input_change_47_listener() {
              ctx.rabi = !ctx.rabi;
              return ctx.changeHadithShareLocalStorage();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09B0\u09BE\u09AC\u09C0 (\u09AC\u09B0\u09CD\u09A3\u09A8\u09BE\u0995\u09BE\u09B0\u09C0)");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HadithCopyDialogComponent_Template_button_click_53_listener() {
              return ctx.openShareDialog(ctx.hadithShareDialogData.hadith);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u09B6\u09C7\u09DF\u09BE\u09B0 \u0995\u09B0\u09C1\u09A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HadithCopyDialogComponent_Template_button_click_55_listener() {
              return ctx.onCopy(ctx.hadithShareDialogData.hadith);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u0995\u09AA\u09BF \u0995\u09B0\u09C1\u09A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 32, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 34, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 36, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.applink);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 38, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.website);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 40, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.title_ar);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 42, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.title_bn);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 44, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.hadith_ar);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 46, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.hadith_bn);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 48, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.type);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 50, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.rabi);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 52, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](52, 54, "background_color"));
          }
        },
        dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__.ThemePipe],
        styles: [".snackbar-success[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  color: white !important;\n}\n\n.snackbar-warn[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnQvaGFkaXRoLWNvcHktZGlhbG9nL2hhZGl0aC1jb3B5LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyIuc25hY2tiYXItc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICMyOGE3NDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5zbmFja2Jhci13YXJuIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return HadithCopyDialogComponent;
})();

/***/ }),

/***/ 2553:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/component/mobile-hadith-comp/mobile-hadith-comp.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileHadithCompComponent: () => (/* binding */ MobileHadithCompComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);




function MobileHadithCompComponent_ul_2_span_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", ctx_r8.helperService.changeEnglishToBengali(ctx_r8.hadith.hadith_number_one.toString()), " ");
  }
}
function MobileHadithCompComponent_ul_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MobileHadithCompComponent_ul_2_span_9_span_5_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.helperService.changeEnglishToBengali(ctx_r2.hadith.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hadith.hadith_number_one);
  }
}
function MobileHadithCompComponent_ul_2_ng_template_10_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" - ", ctx_r10.helperService.changeEnglishToBengali(ctx_r10.hadith.hadith_number_two.toString()), " ");
  }
}
function MobileHadithCompComponent_ul_2_ng_template_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobileHadithCompComponent_ul_2_ng_template_10_span_4_span_2_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09A8\u0982 - ", ctx_r9.helperService.changeEnglishToBengali(ctx_r9.hadith.hadith_number_one.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hadith.hadith_number_two);
  }
}
function MobileHadithCompComponent_ul_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MobileHadithCompComponent_ul_2_ng_template_10_span_4_Template, 3, 2, "span", 17);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.helperService.changeEnglishToBengali(ctx_r4.hadith.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.hadith.hadith_number_one);
  }
}
function MobileHadithCompComponent_ul_2_div_14_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r11.helperService.addHtmlTag(ctx_r11.hadith.title_ar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithCompComponent_ul_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19)(3, "h5", 20)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, MobileHadithCompComponent_ul_2_div_14_span_11_Template, 1, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 12, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.hadith.book_id >= 18 && ctx_r5.hadith.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.hadith.book_id >= 18 && ctx_r5.hadith.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.hadith.book_id >= 18 && ctx_r5.hadith.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r5.helperService.addHtmlTag(ctx_r5.hadith.title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.hadith.book_id >= 18 && ctx_r5.hadith.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r5.helperService.addHtmlTag(ctx_r5.hadith.description), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.hadith.title_ar.includes("null"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r5.helperService.addHtmlTag(ctx_r5.hadith.description_ar), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithCompComponent_ul_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 20)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 8, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.hadith.book_id >= 18 && ctx_r6.hadith.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.hadith.book_id >= 18 && ctx_r6.hadith.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.hadith.book_id >= 18 && ctx_r6.hadith.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r6.helperService.addHtmlTag(ctx_r6.hadith.title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.hadith.book_id >= 18 && ctx_r6.hadith.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r6.helperService.addHtmlTag(ctx_r6.hadith.description), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithCompComponent_ul_2_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995 \u09A8\u09BF\u09B7\u09CD\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 3, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "background_title_color_light"));
  }
}
function MobileHadithCompComponent_ul_2_div_16_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.hadith.type && ctx_r16.hadith.type.title || "\u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09AE\u09BE\u09A3", "");
  }
}
function MobileHadithCompComponent_ul_2_div_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MobileHadithCompComponent_ul_2_div_16_ng_template_3_span_0_Template, 8, 9, "span", 34);
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.hadith.book_id !== ctx_r14.fiqhUsSunanBookId);
  }
}
function MobileHadithCompComponent_ul_2_div_16_span_5_span_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](", ");
  }
}
function MobileHadithCompComponent_ul_2_div_16_span_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MobileHadithCompComponent_ul_2_div_16_span_5_span_6_span_7_Template, 2, 1, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rabi_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rabi_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", rabi_r18.death_year ? "(\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u0983 " + ctx_r17.helperService.changeEnglishToBengali(rabi_r18.death_year.toString()) + " \u09B9\u09BF\u099C\u09B0\u09BF)" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", rabi_r18.id !== ctx_r17.hadith.rabis[ctx_r17.hadith.rabis.length - 1].id);
  }
}
function MobileHadithCompComponent_ul_2_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u09AC\u09B0\u09CD\u09A3\u09A8\u09BE\u0995\u09BE\u09B0\u09C0: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MobileHadithCompComponent_ul_2_div_16_span_5_span_6_Template, 8, 7, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 6, "assets/img/" + "rabi.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r15.hadith.rabis);
  }
}
function MobileHadithCompComponent_ul_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobileHadithCompComponent_ul_2_div_16_span_2_Template, 8, 8, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MobileHadithCompComponent_ul_2_div_16_ng_template_3_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MobileHadithCompComponent_ul_2_div_16_span_5_Template, 7, 9, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 5, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.hadith.book_id == ctx_r7.bukhariBookId || ctx_r7.hadith.book_id == ctx_r7.muslimBookId)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.hadith.rabis.length > 0);
  }
}
function MobileHadithCompComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 2)(1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6")(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MobileHadithCompComponent_ul_2_span_9_Template, 6, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MobileHadithCompComponent_ul_2_ng_template_10_Template, 5, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MobileHadithCompComponent_ul_2_div_14_Template, 13, 16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MobileHadithCompComponent_ul_2_div_15_Template, 7, 10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, MobileHadithCompComponent_ul_2_div_16_Template, 6, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 10, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.hadith.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hadith.book_id == ctx_r0.tohabiBookId || ctx_r0.hadith.book_id == ctx_r0.misqatBookId)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.arabicText === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.arabicText !== "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r0.hadith.book_id >= 18 && ctx_r0.hadith.book_id <= 34));
  }
}
function MobileHadithCompComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 38)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0995\u09CB\u09A8 \u09B9\u09BE\u09A6\u09C0\u09B8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "background_title_color"));
  }
}
let MobileHadithCompComponent = /*#__PURE__*/(() => {
  class MobileHadithCompComponent {
    constructor(helperService, themeService) {
      this.helperService = helperService;
      this.themeService = themeService;
      this.arabicText = this.themeService.getCurrentArabicText;
      this.tohabiBookId = 9;
      this.bukhariBookId = 1;
      this.muslimBookId = 2;
      this.fiqhUsSunanBookId = 14;
      this.misqatBookId = 13;
    }
    ngOnInit() {}
    static {
      this.ɵfac = function MobileHadithCompComponent_Factory(t) {
        return new (t || MobileHadithCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: MobileHadithCompComponent,
        selectors: [["app-mobile-hadith-comp"]],
        inputs: {
          hadith: "hadith"
        },
        decls: 4,
        vars: 6,
        consts: [["class", "list-unstyled", 4, "ngIf"], [4, "ngIf"], [1, "list-unstyled"], [1, "mb-3", "mx-2", "hadith-box", 2, "position", "relative"], [1, "card", "border-radius-none"], [1, "card-header", "bangla-font"], [1, "mb-2", "book-title"], ["class", "hadith-no-field", 4, "ngIf", "ngIfElse"], ["otherBook", ""], [1, "card-body", "hadith-card-body", "pt-2"], [1, "text-justify"], ["class", "row", 3, "class", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], ["class", "bangla-font mt-3 hadith-card-footer pt-2", 3, "class", 4, "ngIf"], [1, "hadith-no-field"], [1, "me-2"], [1, "hadith-no-field", "me-2"], ["class", "hadith-no-field me-2", 4, "ngIf"], [1, "row"], [1, "col-md-6", "bangla-font", "order-md-1", "order-2", "mb-3", "mb-md-0", 3, "ngClass"], [3, "ngClass"], [3, "innerHTML"], [3, "ngClass", "innerHTML"], [1, "col-md-6", "order-md-2", "order-1", 2, "text-align", "right"], [1, "hadith-arabic-title", "arabic-font"], [3, "innerHTML", 4, "ngIf"], [1, "pb-3", "pb-lg-0", "arabic-font", 3, "innerHTML"], [1, "bangla-font", "mt-3", "hadith-card-footer", "pt-2"], ["class", "card-footer-item me-3", 4, "ngIf", "ngIfElse"], ["hadithTypeTitle", ""], ["class", "card-footer-item me-3", 3, "class", 4, "ngIf"], [1, "card-footer-item", "me-3"], ["height", "48", "width", "48", 1, "hadith-small-img", "me-1", 3, "ngSrc"], [1, "text-decoration-none"], ["class", "card-footer-item me-3", 4, "ngIf"], ["height", "48", "width", "48", "alt", "", 1, "hadith-small-img", "me-1", 3, "ngSrc"], ["height", "48", "width", "48", "alt", "", 1, "hadith-small-img", "me-1", "mb-1", 3, "ngSrc"], [4, "ngFor", "ngForOf"], [1, "text-center", "bangla-font", 2, "margin-top", "20vh"]],
        template: function MobileHadithCompComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobileHadithCompComponent_ul_2_Template, 17, 14, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MobileHadithCompComponent_div_3_Template, 5, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hadith);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hadith);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgOptimizedImage, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__.ThemePipe],
        styles: [".hadith-no-field[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 4px 6px;\n  margin: 4px 0px;\n  border: 1px solid #1d673a;\n  border-radius: 4px;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.hadith-card-header-item[_ngcontent-%COMP%] {\n  margin: 6px 0px 0px 2px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%]:hover, .hadith-small-img.active[_ngcontent-%COMP%] {\n  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(97%)\n    contrast(107%);\n  transition: all 0.4s;\n}\n\n.hadith-card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #006b434a !important;\n}\n\n.hadith-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n}\n\n.hadith-title-ur[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 2.75rem;\n}\n\n.hadith-arabic-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.card-footer-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 2px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnQvbW9iaWxlLWhhZGl0aC1jb21wL21vYmlsZS1oYWRpdGgtY29tcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTtrQkFDZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5oYWRpdGgtbm8tZmllbGQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgbWFyZ2luOiA0cHggMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWQ2NzNhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oYWRpdGgtY2FyZC1oZWFkZXItaXRlbSB7XG4gIG1hcmdpbjogNnB4IDBweCAwcHggMnB4O1xufVxuXG4uaGFkaXRoLXNtYWxsLWltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi5oYWRpdGgtc21hbGwtaW1nOmhvdmVyLFxuLmhhZGl0aC1zbWFsbC1pbWcuYWN0aXZlIHtcbiAgZmlsdGVyOiBpbnZlcnQoMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgyMjNkZWcpIGJyaWdodG5lc3MoOTclKVxuICAgIGNvbnRyYXN0KDEwNyUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmhhZGl0aC1jYXJkLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA2YjQzNGEgIWltcG9ydGFudDtcbn1cblxuLmhhZGl0aC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uaGFkaXRoLXRpdGxlLXVyIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBsaW5lLWhlaWdodDogMi43NXJlbTtcbn1cblxuLmhhZGl0aC1hcmFiaWMtdGl0bGUge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmNhcmQtZm9vdGVyLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCAycHg7XG59XG5cbi5ib29rLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return MobileHadithCompComponent;
})();

/***/ }),

/***/ 3189:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/component/mobile-hadith-list-comp/mobile-hadith-list-comp.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileHadithListCompComponent: () => (/* binding */ MobileHadithListCompComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_components_component_hadith_copy_dialog_hadith_copy_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/component/hadith-copy-dialog/hadith-copy-dialog.component */ 4845);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);









function MobileHadithListCompComponent_div_2_span_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r15.helperService.changeEnglishToBengali(hadith_r1.hadith_number_one.toString()), " ");
  }
}
function MobileHadithListCompComponent_div_2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobileHadithListCompComponent_div_2_span_9_span_5_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.helperService.changeEnglishToBengali(hadith_r1.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_one);
  }
}
function MobileHadithListCompComponent_div_2_ng_template_10_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r19.helperService.changeEnglishToBengali(hadith_r1.hadith_number_two.toString()), " ");
  }
}
function MobileHadithListCompComponent_div_2_ng_template_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobileHadithListCompComponent_div_2_ng_template_10_span_4_span_2_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ( \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09A8\u0982- ", ctx_r18.helperService.changeEnglishToBengali(hadith_r1.hadith_number_one.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_two);
  }
}
function MobileHadithListCompComponent_div_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobileHadithListCompComponent_div_2_ng_template_10_span_4_Template, 4, 2, "span", 32);
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.helperService.changeEnglishToBengali(hadith_r1.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_one);
  }
}
function MobileHadithListCompComponent_div_2_span_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MobileHadithListCompComponent_div_2_span_22_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "bookmark_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MobileHadithListCompComponent_div_2_span_22_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MobileHadithListCompComponent_div_2_span_22_ng_template_2_span_0_Template, 2, 0, "span", 35);
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r25.isSavedHadith(hadith_r1));
  }
}
function MobileHadithListCompComponent_div_2_span_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_span_22_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r28.bookmarkHadith(hadith_r1, "save"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobileHadithListCompComponent_div_2_span_22_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobileHadithListCompComponent_div_2_span_22_ng_template_2_Template, 1, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.isSavedHadith(hadith_r1))("ngIfElse", _r24);
  }
}
function MobileHadithListCompComponent_div_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_ng_template_23_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r32.bookmarkHadith(hadith_r1, "delete"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "bookmark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MobileHadithListCompComponent_div_2_span_35_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r35.helperService.changeEnglishToBengali(hadith_r1.hadith_number_one.toString()), " ");
  }
}
function MobileHadithListCompComponent_div_2_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobileHadithListCompComponent_div_2_span_35_span_5_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.helperService.changeEnglishToBengali(hadith_r1.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_one);
  }
}
function MobileHadithListCompComponent_div_2_ng_template_36_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r39.helperService.changeEnglishToBengali(hadith_r1.hadith_number_two.toString()), " ");
  }
}
function MobileHadithListCompComponent_div_2_ng_template_36_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobileHadithListCompComponent_div_2_ng_template_36_span_4_span_2_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09A8\u0982- ", ctx_r38.helperService.changeEnglishToBengali(hadith_r1.hadith_number_one.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_two);
  }
}
function MobileHadithListCompComponent_div_2_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobileHadithListCompComponent_div_2_ng_template_36_span_4_Template, 3, 2, "span", 37);
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.helperService.changeEnglishToBengali(hadith_r1.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.hadith_number_one);
  }
}
function MobileHadithListCompComponent_div_2_div_40_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 10);
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r43.helperService.addHtmlTag(hadith_r1.title_ar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithListCompComponent_div_2_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 39)(3, "h5", 40)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 42)(9, "h5", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MobileHadithListCompComponent_div_2_div_40_span_10_Template, 1, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 10, "background_title_color_bold"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r12.helperService.addHtmlTag(hadith_r1.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r12.helperService.addHtmlTag(hadith_r1.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.title_ar);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r12.helperService.addHtmlTag(hadith_r1.description_ar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithListCompComponent_div_2_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 40)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 8, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r13.helperService.addHtmlTag(hadith_r1.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r13.helperService.addHtmlTag(hadith_r1.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function MobileHadithListCompComponent_div_2_div_42_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995 \u09A8\u09BF\u09B7\u09CD\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 3, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "background_title_color_light"));
  }
}
function MobileHadithListCompComponent_div_2_div_42_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 4, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", hadith_r1.type && hadith_r1.type.title || "\u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09AE\u09BE\u09A3", "");
  }
}
function MobileHadithListCompComponent_div_2_div_42_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MobileHadithListCompComponent_div_2_div_42_ng_template_3_span_0_Template, 8, 9, "span", 51);
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.book_id !== ctx_r49.fiqhUsSunanBookId);
  }
}
function MobileHadithListCompComponent_div_2_div_42_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_div_42_a_5_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58);
      const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.openNote(hadith_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09B6\u09BE\u09B8\u09CD\u09A4\u09CD\u09B0\u09C0\u09DF \u0986\u09B2\u09CB\u099A\u09A8\u09BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, "assets/img/" + "explanation-note.svg", "svg"));
  }
}
function MobileHadithListCompComponent_div_2_div_42_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_div_42_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);
      const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r59.openExplanation(hadith_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u0996\u09CD\u09AF\u09BE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, "assets/img/" + "explanation-note.svg", "svg"));
  }
}
function MobileHadithListCompComponent_div_2_div_42_span_7_span_5_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](", ");
  }
}
function MobileHadithListCompComponent_div_2_div_42_span_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MobileHadithListCompComponent_div_2_div_42_span_7_span_5_span_7_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rabi_r63 = ctx.$implicit;
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](rabi_r63.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", rabi_r63.death_year ? "(\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u0983 " + ctx_r62.helperService.changeEnglishToBengali(rabi_r63.death_year.toString()) + " \u09B9\u09BF\u099C\u09B0\u09BF)" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", rabi_r63.id !== hadith_r1.rabis[hadith_r1.rabis.length - 1].id);
  }
}
function MobileHadithListCompComponent_div_2_div_42_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u09AC\u09B0\u09CD\u09A3\u09A8\u09BE\u0995\u09BE\u09B0\u09C0: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobileHadithListCompComponent_div_2_div_42_span_7_span_5_Template, 8, 7, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 2, "assets/img/" + "rabi.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", hadith_r1.rabis);
  }
}
function MobileHadithListCompComponent_div_2_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobileHadithListCompComponent_div_2_div_42_span_2_Template, 8, 8, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MobileHadithListCompComponent_div_2_div_42_ng_template_3_Template, 1, 1, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobileHadithListCompComponent_div_2_div_42_a_5_Template, 6, 8, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MobileHadithListCompComponent_div_2_div_42_a_6_Template, 6, 8, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MobileHadithListCompComponent_div_2_div_42_span_7_Template, 6, 5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const hadith_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 7, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.book_id == ctx_r14.bukhariBookId || hadith_r1.book_id == ctx_r14.muslimBookId)("ngIfElse", _r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.explanation_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.rabis.length > 0);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function MobileHadithListCompComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
      const hadith_r1 = restoredCtx.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r68.saveLastRead(hadith_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MobileHadithListCompComponent_div_2_span_9_Template, 6, 2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MobileHadithListCompComponent_div_2_ng_template_10_Template, 5, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MobileHadithListCompComponent_div_2_span_22_Template, 4, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, MobileHadithListCompComponent_div_2_ng_template_23_Template, 3, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_Template_span_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
      const hadith_r1 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r70.openShareDialog(hadith_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobileHadithListCompComponent_div_2_Template_span_click_28_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r69);
      const hadith_r1 = restoredCtx.$implicit;
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r71.openPlayTTS(hadith_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "play_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h6", 20)(32, "div", 21)(33, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MobileHadithListCompComponent_div_2_span_35_Template, 6, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, MobileHadithListCompComponent_div_2_ng_template_36_Template, 5, 2, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 25)(39, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, MobileHadithListCompComponent_div_2_div_40_Template, 12, 12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, MobileHadithListCompComponent_div_2_div_41_Template, 7, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, MobileHadithListCompComponent_div_2_div_42_Template, 8, 9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const hadith_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 38, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 40, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 42, "background_title_color_bold"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", "heading" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-bs-target", "#collapse" + i_r2)("aria-expanded", false)("aria-controls", "collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 44, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.book_id == ctx_r0.tohabiBookId || hadith_r1.book_id == ctx_r0.misqatBookId)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 46, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", "title" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34 ? "urdu-font accordion-header-title-ur" : "bangla-font accordion-header-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.helperService.addHtmlTag(hadith_r1.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 48, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("show", ctx_r0.hadiths.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", "collapse" + i_r2)("aria-labelledby", "heading" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 50, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isBookMark)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", "hadith-number" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c0, hadith_r1.hadith_number_one ? "d-block" : "d-inline-block"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](hadith_r1.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", hadith_r1.book_id == ctx_r0.tohabiBookId)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", "hadith" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.arabicText === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.arabicText !== "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(hadith_r1.book_id >= 18 && hadith_r1.book_id <= 34));
  }
}
let MobileHadithListCompComponent = /*#__PURE__*/(() => {
  class MobileHadithListCompComponent {
    constructor(helperService, snackBarService, dialog, router) {
      this.helperService = helperService;
      this.snackBarService = snackBarService;
      this.dialog = dialog;
      this.router = router;
      this.hadiths = [];
      this.total = 0;
      this.page = 1;
      this.arabicText = 'true';
      this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.hadithContent = false;
      this.tohabiBookId = 9;
      this.bukhariBookId = 1;
      this.muslimBookId = 2;
      this.fiqhUsSunanBookId = 14;
      this.misqatBookId = 13;
    }
    ngOnInit() {}
    showHadithContent(hadithId) {
      this.openedHadith = hadithId;
      // tslint:disable-next-line:triple-equals
      if (hadithId == -1) {
        return;
      }
      this.hadithContent = true;
      this.setOpenedhadith(hadithId);
      const hadith = this.hadiths.find(h => h.id === hadithId);
      localStorage.setItem('hadith', JSON.stringify(hadith));
    }
    setOpenedhadith(id) {
      if (typeof document !== 'undefined') {
        const el = document.getElementById('hadith-' + id.toString());
        if (el) {
          setTimeout(() => el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          }), 0);
        }
      }
    }
    hideHadithContent() {
      this.hadithContent = false;
    }
    bookmarkHadith(hadith, option) {
      // tslint:disable-next-line:triple-equals
      if (option == 'save') {
        const hadiths = localStorage.getItem('hadiths');
        if (hadiths?.length) {
          const hadithsArray = JSON.parse(hadiths);
          const isAlreadyAddedHadith = hadithsArray.find(h => h.id === hadith.id);
          if (!isAlreadyAddedHadith) {
            hadithsArray.push(hadith);
            localStorage.setItem('hadiths', JSON.stringify(hadithsArray));
            this.snackBarService.success(`হাদীসটি সংরক্ষণ করা হয়েছে।`);
          } else {
            const newHadiths = hadithsArray.filter(h => h.id !== hadith.id);
            localStorage.setItem('hadiths', JSON.stringify(newHadiths));
            this.snackBarService.success(`হাদীসটি মুছে ফেলা হয়েছে।`);
          }
        } else {
          const hadithsArray = [];
          hadithsArray.push(hadith);
          localStorage.setItem('hadiths', JSON.stringify(hadithsArray));
          this.snackBarService.success(`হাদীসটি সংরক্ষণ করা হয়েছে।`);
        }
      }
      if (option === 'delete') {
        // tslint:disable-next-line:triple-equals
        this.hadiths = this.hadiths.filter(h => h.id != hadith.id);
        localStorage.setItem('hadiths', JSON.stringify(this.hadiths));
        this.snackBarService.success(`হাদীসটি মুছে ফেলা হয়েছে।`);
      }
    }
    isSavedHadith(hadith) {
      const hadiths = localStorage.getItem('hadiths');
      if (hadiths?.length) {
        const hadithsArray = JSON.parse(hadiths);
        return hadithsArray.find(h => h.id === hadith.id);
      }
    }
    openShareDialog(hadith) {
      this.dialog.open(_app_components_component_hadith_copy_dialog_hadith_copy_dialog_component__WEBPACK_IMPORTED_MODULE_0__.HadithCopyDialogComponent, {
        width: '350px',
        data: {
          hadith
        },
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.NoopScrollStrategy()
      });
    }
    openPlayTTS(hadith) {
      // @ts-ignore
      AndroidNative.playTTS(hadith.description_ar);
    }
    saveLastRead(hadith) {
      localStorage.setItem('hadith', JSON.stringify(hadith));
    }
    openNote(hadithId) {
      if (navigator.onLine) {
        this.router.navigate([`/mobile-book/hadith/${hadithId}`]);
      } else {
        this.snackBarService.warn('হাদীসের শাস্ত্রীয় আলোচনা দেখতে আপনার নেট কানেকশন নিশ্চিত করুন');
      }
    }
    openExplanation(hadithId) {
      if (navigator.onLine) {
        this.router.navigate([`/mobile-book/hadith/${hadithId}`]);
      } else {
        this.snackBarService.warn('হাদীসের ব্যাখ্যা দেখতে আপনার নেট কানেকশন নিশ্চিত করুন');
      }
    }
    static {
      this.ɵfac = function MobileHadithListCompComponent_Factory(t) {
        return new (t || MobileHadithListCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.SnackBarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: MobileHadithListCompComponent,
        selectors: [["app-mobile-hadith-list-comp"]],
        inputs: {
          hadiths: "hadiths",
          total: "total",
          page: "page",
          arabicText: "arabicText",
          isBookMark: "isBookMark"
        },
        outputs: {
          changePage: "changePage"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "container", "px-2"], ["class", "accordion bangla-font", 3, "class", 4, "ngFor", "ngForOf"], [1, "accordion", "bangla-font"], [1, "accordion-item", "border-radius-none", "shadow-sm", "mb-3", "border-none"], [1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", 1, "accordion-button", "d-block", 3, "click"], [1, "no-field"], [4, "ngIf", "ngIfElse"], ["otherHeaderBook", ""], [1, "accordion-header-title", 3, "id", "ngClass"], [3, "innerHTML"], [1, "accordion-collapse", "collapse"], [1, "accordion-body", "p-0", "border-none"], [1, "card", "border-radius-none"], [1, "card-header", "bangla-font"], [1, "pull-right", "mt-1"], ["class", "share-btn me-1", 3, "click", 4, "ngIf", "ngIfElse"], ["bookmarkBlock", ""], [1, "share-btn", "me-1", 3, "click"], [1, "material-icons"], [3, "id"], [1, "me-2", 3, "ngClass"], [1, "hadith-no-field"], ["class", "hadith-no-field", 4, "ngIf", "ngIfElse"], ["otherBook", ""], [1, "card-body", "hadith-card-body", "pt-2", 3, "id"], [1, "text-justify"], ["class", "row", 3, "class", "ngClass", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], ["class", "bangla-font mt-3 hadith-card-footer pt-2", 3, "class", 4, "ngIf"], [1, "me-2"], [4, "ngIf"], ["class", "me-2", 4, "ngIf"], ["class", "material-icons", 4, "ngIf", "ngIfElse"], ["notSavedBlock", ""], ["class", "material-icons", 4, "ngIf"], [1, "hadith-no-field", "me-2"], ["class", "hadith-no-field me-2", 4, "ngIf"], [1, "row", 3, "ngClass"], [1, "col-md-6", "bangla-font", "order-md-1", "order-2", "mb-3", "mb-md-0"], [3, "ngClass"], [3, "ngClass", "innerHTML"], [1, "col-md-6", "order-md-2", "order-1", 2, "text-align", "right"], [1, "hadith-arabic-title", "arabic-font"], [3, "innerHTML", 4, "ngIf"], [1, "pb-3", "pb-lg-0", "arabic-font", 3, "innerHTML"], [1, "bangla-font", "mt-3", "hadith-card-footer", "pt-2"], ["class", "card-footer-item me-3", 4, "ngIf", "ngIfElse"], ["hadithTypeTitle", ""], ["class", "text-decoration-none me-3 card-footer-item me-3", 3, "class", "click", 4, "ngIf"], ["class", "text-decoration-none card-footer-item me-3", 3, "class", "click", 4, "ngIf"], ["class", "card-footer-item me-3", 4, "ngIf"], [1, "card-footer-item", "me-3"], ["alt", "", "height", "48", "width", "48", 1, "hadith-small-img", "me-1", 3, "ngSrc"], [1, "text-decoration-none"], ["height", "48", "width", "48", "alt", "", 1, "hadith-small-img", "me-1", 3, "ngSrc"], [1, "text-decoration-none", "me-3", "card-footer-item", "me-3", 3, "click"], ["width", "48", "height", "48", 1, "hadith-small-img", "me-1", "mb-1", 3, "ngSrc"], [1, "text-decoration-none", "card-footer-item", "me-3", 3, "click"], ["alt", "", "height", "48", "width", "48", 1, "hadith-small-img", "me-1", "mb-1", 3, "ngSrc"], [4, "ngFor", "ngForOf"]],
        template: function MobileHadithListCompComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobileHadithListCompComponent_div_2_Template, 43, 54, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.hadiths);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgOptimizedImage, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_2__.ThemePipe],
        styles: [".hadith-card-title[_ngcontent-%COMP%] {\n  white-space: normal;\n  line-height: 1.8em;\n  height: 1.8em;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n}\n\n.snackbar-success[_ngcontent-%COMP%] {\n  background: #28a745 !important;\n  color: white !important;\n}\n\n.snackbar-warn[_ngcontent-%COMP%] {\n  background: #dc3545 !important;\n  color: white !important;\n}\n\n.hadith-no-field[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 4px 6px;\n  margin: 4px 0px;\n  border: 1px solid #1d673a;\n  border-radius: 4px;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.hadith-card-header-item[_ngcontent-%COMP%] {\n  margin: 6px 0px 0px 2px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%]:hover, .hadith-small-img.active[_ngcontent-%COMP%] {\n  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(97%)\n    contrast(107%);\n  transition: all 0.4s;\n}\n\n.hadith-card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #006b434a !important;\n}\n\n.hadith-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n}\n\n.hadith-title-ur[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 2.75rem;\n}\n\n.hadith-arabic-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.card-footer-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 2px;\n}\n\n.accordion-button[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed) {\n  background-color: transparent;\n  box-shadow: none !important;\n}\n\n.accordion-button[_ngcontent-%COMP%]:not(.collapsed)::after {\n  background-image: none;\n  height: 0;\n  width: 0;\n}\n\n.accordion-button[_ngcontent-%COMP%]::after {\n  background-image: none;\n  height: 0;\n  width: 0;\n}\n\n.accordion-header-title[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  max-height: 2.75em;\n  font-size: 1.05rem;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.accordion-header-title-ur[_ngcontent-%COMP%] {\n  max-height: 2.8em;\n  font-size: 0.9rem;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.no-field[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-bottom: 4px;\n}\n\n.hadith-desc[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnQvbW9iaWxlLWhhZGl0aC1saXN0LWNvbXAvbW9iaWxlLWhhZGl0aC1saXN0LWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOztFQUVFO2tCQUNnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmhhZGl0aC1jYXJkLXRpdGxlIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICBoZWlnaHQ6IDEuOGVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zbmFja2Jhci1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZDogIzI4YTc0NSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnNuYWNrYmFyLXdhcm4ge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaGFkaXRoLW5vLWZpZWxkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIG1hcmdpbjogNHB4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkNjczYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaGFkaXRoLWNhcmQtaGVhZGVyLWl0ZW0ge1xuICBtYXJnaW46IDZweCAwcHggMHB4IDJweDtcbn1cblxuLmhhZGl0aC1zbWFsbC1pbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uaGFkaXRoLXNtYWxsLWltZzpob3Zlcixcbi5oYWRpdGgtc21hbGwtaW1nLmFjdGl2ZSB7XG4gIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDk3JSlcbiAgICBjb250cmFzdCgxMDclKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5oYWRpdGgtY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwNmI0MzRhICFpbXBvcnRhbnQ7XG59XG5cbi5oYWRpdGgtdGl0bGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmhhZGl0aC10aXRsZS11ciB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XG59XG5cbi5oYWRpdGgtYXJhYmljLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5jYXJkLWZvb3Rlci1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMnB4O1xufVxuXG4uYWNjb3JkaW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFjY29yZGlvbi1idXR0b246bm90KC5jb2xsYXBzZWQpOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi5hY2NvcmRpb24tYnV0dG9uOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi5hY2NvcmRpb24taGVhZGVyLXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgbWF4LWhlaWdodDogMi43NWVtO1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWNjb3JkaW9uLWhlYWRlci10aXRsZS11ciB7XG4gIG1heC1oZWlnaHQ6IDIuOGVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uby1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5oYWRpdGgtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return MobileHadithListCompComponent;
})();

/***/ }),

/***/ 5251:
/*!*************************************************************************!*\
  !*** ./src/app/components/component/pagination/pagination.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function PaginationComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.p.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PaginationComponent_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_li_4_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.p.setCurrent(page_r5.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.helperService.changeEnglishToBengali(page_r5.label.toString()));
  }
}
function PaginationComponent_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.helperService.changeEnglishToBengali(page_r5.label.toString()));
  }
}
function PaginationComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationComponent_li_4_a_1_Template, 3, 1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PaginationComponent_li_4_a_2_Template, 3, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r1.p.getCurrent() === page_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.p.getCurrent() !== page_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.p.getCurrent() === page_r5.value);
  }
}
function PaginationComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_a_6_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.p.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let PaginationComponent = /*#__PURE__*/(() => {
  class PaginationComponent {
    constructor(helperService) {
      this.helperService = helperService;
    }
    ngOnInit() {}
    static {
      this.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PaginationComponent,
        selectors: [["app-pagination"]],
        inputs: {
          p: "p"
        },
        decls: 7,
        vars: 7,
        consts: [[1, "pagination-wrap"], [1, "pagination", "pagination-custom", "justify-content-center"], [1, "page-item"], ["class", "page-link", 3, "click", 4, "ngIf"], ["class", "page-item bangla-font", 3, "active", 4, "ngFor", "ngForOf"], [1, "page-link", 3, "click"], [1, "fa", "fa-chevron-left", "mt-1"], [1, "page-item", "bangla-font"], ["class", "page-link", 4, "ngIf"], [1, "page-link"], [1, "fa", "fa-chevron-right", "mt-1"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaginationComponent_a_3_Template, 2, 0, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 3, 4, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PaginationComponent_a_6_Template, 2, 0, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.p.isFirstPage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.p.isFirstPage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.p.pages);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.p.isLastPage());
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.p.isLastPage());
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return PaginationComponent;
})();

/***/ }),

/***/ 4421:
/*!***************************************************************************!*\
  !*** ./src/app/components/component/search-comp/search-comp.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchCompComponent: () => (/* binding */ SearchCompComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);














function SearchCompComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 14)(1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const book_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", book_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](book_r5.title);
  }
}
function SearchCompComponent_label_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09AE\u09AA\u0995\u09CD\u09B7\u09C7 \u09E8\u099F\u09BF \u0985\u0995\u09CD\u09B7\u09B0 \u09A6\u09BF\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SearchCompComponent_label_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9 \u0995\u09B0\u09C7 \u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09B2\u09BF\u0996\u09C1\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SearchCompComponent_label_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09A6\u09BF\u09DF\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SearchCompComponent_label_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09A6\u09BF\u09DF\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u0997\u09CD\u09B0\u09A8\u09CD\u09A5 \u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8 \u0995\u09B0\u09C1\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let SearchCompComponent = /*#__PURE__*/(() => {
  class SearchCompComponent {
    constructor(dialog, formBuilder, router, activatedRoute, helperService, dialogRef, searchFormData) {
      this.dialog = dialog;
      this.formBuilder = formBuilder;
      this.router = router;
      this.activatedRoute = activatedRoute;
      this.helperService = helperService;
      this.dialogRef = dialogRef;
      this.searchFormData = searchFormData;
      this.hadithNoPattern = new RegExp('^[\u09E6-\u09EF ]*$|^[0-9 ]*$');
      this.createForm();
    }
    createForm() {
      this.searchForm = this.formBuilder.group({
        q: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)]],
        book: [''],
        hadith_no: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(this.hadithNoPattern)]
      });
    }
    ngOnInit() {
      if (this.searchFormData.book) {
        this.searchForm.controls.book.patchValue(this.searchFormData.book.id);
        this.updateValidator();
      }
      this.activatedRoute.queryParams.subscribe(queryParams => {
        if (queryParams.q) {
          this.searchForm.controls.q.patchValue(queryParams.q);
        }
      });
    }
    get getSearchForm() {
      return this.searchForm.controls;
    }
    removeHadithNoValidator() {
      if (this.searchForm.value.q) {
        this.searchForm.controls.book.setValidators([]);
        this.searchForm.controls.book.updateValueAndValidity();
        this.searchForm.controls.hadith_no.setValue('');
      }
      if (this.searchForm.value.book && this.searchForm.value.q) {
        this.searchForm.controls.hadith_no.setValidators([]);
        this.searchForm.controls.hadith_no.updateValueAndValidity();
      }
    }
    removeValidator() {
      this.searchForm.controls.q.setValidators([]);
      this.searchForm.controls.q.updateValueAndValidity();
      this.searchForm.controls.hadith_no.setValidators([]);
      this.searchForm.controls.hadith_no.updateValueAndValidity();
    }
    updateValidator() {
      if (!this.searchForm.value.q && this.searchForm.value.book) {
        this.removeValidator();
        this.searchForm.controls.hadith_no.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
        this.searchForm.controls.hadith_no.updateValueAndValidity();
      } else {
        this.removeValidator();
      }
    }
    addBookValidator() {
      this.searchForm.controls.book.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
      this.searchForm.controls.book.updateValueAndValidity();
      this.searchForm.controls.q.setValidators([]);
      this.searchForm.controls.q.updateValueAndValidity();
      if (this.searchForm.value.hadith_no) {
        this.searchForm.controls.q.setValue('');
      }
    }
    searchFormSubmit() {
      this.submitted = true;
      if (this.searchForm.invalid) {
        return;
      }
      const queryParams = {
        q: this.searchForm.value.q.trim(),
        book: this.searchForm.value.book,
        hadith_no: this.helperService.changeBengaliToEnglish(this.searchForm.value.hadith_no.trim())
      };
      this.router.navigate(['/hadith-mobile/search'], {
        queryParams
      });
      this.closeDialog();
    }
    closeDialog() {
      this.dialogRef.close();
    }
    static {
      this.ɵfac = function SearchCompComponent_Factory(t) {
        return new (t || SearchCompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SearchCompComponent,
        selectors: [["app-search-comp"]],
        decls: 29,
        vars: 19,
        consts: [[3, "formGroup", "ngSubmit"], ["mat-dialog-content", ""], [1, "bangla-font", "text-center", "font-weight-bold", "mb-3", 2, "font-size", "20px"], [1, "example-full-width", "bangla-font"], [1, "bangla-font"], ["formControlName", "book", 1, "bangla-font", 3, "selectionChange"], ["class", "bangla-font", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "q", "matInput", "", "placeholder", "\u09AC\u09BE\u0982\u09B2\u09BE/\u0986\u09B0\u09AC\u09BF \u09B6\u09AC\u09CD\u09A6 \u09A6\u09BF\u09DF\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8", 3, "focus", "input"], ["class", "search-error bangla-font mb-3", 4, "ngIf"], ["formControlName", "hadith_no", "matInput", "", "type", "text", 3, "pattern", "focus", "input"], ["class", "search-error bangla-font mb-2", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-3"], ["mat-raised-button", "", 1, "modal-cancel-btn", "ms-auto", "me-2", "bangla-font", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "bangla-font", "btn-green"], [1, "bangla-font", 3, "value"], [1, "search-error", "bangla-font", "mb-3"], [1, "search-error", "bangla-font", "mb-2"]],
        template: function SearchCompComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SearchCompComponent_Template_form_ngSubmit_0_listener() {
              return ctx.searchFormSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "mat-form-field", 3)(9, "mat-label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u0997\u09CD\u09B0\u09A8\u09CD\u09A5");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-select", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function SearchCompComponent_Template_mat_select_selectionChange_11_listener() {
              return ctx.updateValidator();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SearchCompComponent_mat_option_12_Template, 3, 2, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function SearchCompComponent_Template_input_focus_15_listener() {
              return ctx.removeHadithNoValidator();
            })("input", function SearchCompComponent_Template_input_input_15_listener() {
              return ctx.removeHadithNoValidator();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SearchCompComponent_label_16_Template, 2, 0, "label", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 3)(18, "mat-label", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u09AE\u09CD\u09AC\u09B0 \u09A6\u09BF\u09DF\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function SearchCompComponent_Template_input_focus_20_listener() {
              return ctx.addBookValidator();
            })("input", function SearchCompComponent_Template_input_input_20_listener() {
              return ctx.addBookValidator();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SearchCompComponent_label_21_Template, 2, 0, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SearchCompComponent_label_22_Template, 2, 0, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SearchCompComponent_label_23_Template, 2, 0, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11)(25, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchCompComponent_Template_a_click_25_listener() {
              return ctx.closeDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u09AC\u09BE\u09A4\u09BF\u09B2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 13, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 15, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.searchFormData.books);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 17, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getSearchForm.q.invalid && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pattern", ctx.hadithNoPattern);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.getSearchForm.hadith_no.errors == null ? null : ctx.getSearchForm.hadith_no.errors["required"]) && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.getSearchForm.hadith_no.errors == null ? null : ctx.getSearchForm.hadith_no.errors["pattern"]) && ctx.submitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.getSearchForm.book.errors == null ? null : ctx.getSearchForm.book.errors["required"]) && ctx.submitted);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_1__.ThemePipe],
        styles: [".note[_ngcontent-%COMP%] {\n    text-align: justify;\n    font-size: 12px;\n    color: #696969;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnQvc2VhcmNoLWNvbXAvc2VhcmNoLWNvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return SearchCompComponent;
})();

/***/ }),

/***/ 4677:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/component/search-comp/search-comp.component */ 4421);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);









function FooterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FooterComponent_ng_container_2_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onclickMenu(menu_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 4, "assets/img/" + menu_r1.img, "svg"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menu_r1.title);
  }
}
let FooterComponent = /*#__PURE__*/(() => {
  class FooterComponent {
    constructor(router, dialog, helperService, indexeddbService, location) {
      this.router = router;
      this.dialog = dialog;
      this.helperService = helperService;
      this.indexeddbService = indexeddbService;
      this.location = location;
      this.books = [];
    }
    ngOnInit() {
      this.getBooks();
    }
    onclickMenu(menu) {
      if (menu.slug === 'search') {
        if (menu.hasOwnProperty('book')) {
          this.openSearchDialog(menu.book);
        } else {
          this.openSearchDialog();
        }
      } else if (menu.slug === 'close') {
        this.closeApp();
      } else if (menu.slug === 'goBack') {
        this.goBack();
      } else {
        this.router.navigate([menu.link]);
      }
    }
    openSearchDialog(book) {
      const config = {
        data: {
          books: this.books.sort(this.helperService.sortBy('sequence')).filter(value => {
            return value.downloaded;
          }),
          book
        },
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.NoopScrollStrategy()
      };
      this.dialog.open(_app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_0__.SearchCompComponent, config);
    }
    getBooks() {
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item;
      });
    }
    closeApp() {
      // @ts-ignore
      AndroidNative.finish();
    }
    goBack() {
      this.location.back();
    }
    static {
      this.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        inputs: {
          footerMenus: "footerMenus"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "footer", "navbar", "fixed-bottom", "bangla-font", "px-3", "px-sm-4", "pb-1", "pt-2"], [4, "ngFor", "ngForOf"], [1, "text-center", 3, "click"], ["width", "20", "height", "20", "alt", "", 3, "src"], [1, "mt-1"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FooterComponent_ng_container_2_Template, 8, 9, "ng-container", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  font-size: 0.9rem;\n  z-index: 999;\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.075);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDJDQUEyQztBQUM3QyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiAwIC0ycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return FooterComponent;
})();

/***/ }),

/***/ 8230:
/*!***********************************************************************!*\
  !*** ./src/app/components/pages/book-mobile/book-mobile.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookMobileComponent: () => (/* binding */ BookMobileComponent)
/* harmony export */ });
/* harmony import */ var _app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/component/search-comp/search-comp.component */ 4421);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _app_components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/component/download-hadith-modal/download-hadith-modal.component */ 8921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);











function BookMobileComponent_div_0_div_12_div_2_p_15_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r8.helperService.changeEnglishToBengali(book_r3.total_section.toString()), " \u099F\u09BF \u0985\u09A7\u09CD\u09AF\u09BE\u09DF, ");
  }
}
function BookMobileComponent_div_0_div_12_div_2_p_15_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r9.helperService.changeEnglishToBengali(book_r3.total_hadith.toString()), " \u099F\u09BF \u09B9\u09BE\u09A6\u09C0\u09B8");
  }
}
function BookMobileComponent_div_0_div_12_div_2_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookMobileComponent_div_0_div_12_div_2_p_15_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BookMobileComponent_div_0_div_12_div_2_p_15_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", book_r3.total_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", book_r3.total_hadith);
  }
}
const _c0 = function (a1) {
  return ["/book-description/", a1];
};
function BookMobileComponent_div_0_div_12_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "div", 17)(2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, book_r3.id));
  }
}
function BookMobileComponent_div_0_div_12_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "div", 17)(2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookMobileComponent_div_0_div_12_div_2_div_17_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const book_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.onBookClick(book_r3, "all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "background_title_color_light"));
  }
}
function BookMobileComponent_div_0_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 14)(4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookMobileComponent_div_0_div_12_div_2_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const book_r3 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.onBookClick(book_r3, "all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 16)(7, "div", 17)(8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 19)(11, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, BookMobileComponent_div_0_div_12_div_2_p_15_Template, 4, 6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, BookMobileComponent_div_0_div_12_div_2_div_16_Template, 6, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, BookMobileComponent_div_0_div_12_div_2_div_17_Template, 6, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const book_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 10, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 12, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.helperService.changeEnglishToBengali((i_r4 + 1).toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r3.title_en, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", book_r3.title_ar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", book_r3.downloaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", book_r3.description && book_r3.downloaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !book_r3.downloaded);
  }
}
function BookMobileComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BookMobileComponent_div_0_div_12_div_2_Template, 18, 14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.books);
  }
}
function BookMobileComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u0995\u09BF\u09A4\u09BE\u09AC \u09B8\u09AE\u09C2\u09B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 4)(9, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BookMobileComponent_div_0_Template_img_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.openSearchDialog());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, BookMobileComponent_div_0_div_12_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "app-footer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 9, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 11, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 13, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 15, "assets/img/" + "search.svg", "svg"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.books);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("footerMenus", ctx_r0.footerMenus);
  }
}
let BookMobileComponent = /*#__PURE__*/(() => {
  class BookMobileComponent {
    constructor(hadithService, dialog, indexeddbService, helperService, router) {
      this.hadithService = hadithService;
      this.dialog = dialog;
      this.indexeddbService = indexeddbService;
      this.helperService = helperService;
      this.router = router;
      this.loading = false;
      this.modalLoading = false;
      this.footerMenus = [{
        id: 1,
        title: 'সেটিংস',
        img: 'settings.svg',
        slug: 'settings',
        link: '/settings'
      }, {
        id: 2,
        title: 'সর্বশেষ পঠিত',
        img: 'ic_last_read.svg',
        slug: 'ic_last_read',
        link: '/last-read-hadith'
      }, {
        id: 3,
        title: 'বুকমার্ক',
        img: 'ic_bookmark.svg',
        slug: 'ic_bookmark',
        link: '/mobile-hadith-bookmarks'
      }, {
        id: 4,
        title: 'প্রস্থান',
        img: 'back.svg',
        slug: 'close',
        link: ''
      }];
    }
    ngOnInit() {
      this.getBooks();
      this.modalLoading = false;
    }
    getBooks() {
      this.indexeddbService.count('books').subscribe(value => {
        if (value === 0) {
          this.downloadBooks();
        } else {
          // tslint:disable-next-line:no-shadowed-variable
          this.indexeddbService.getAll('books').subscribe(item => {
            this.books = item.sort(this.helperService.sortBy('sequence'));
          });
        }
      });
    }
    downloadBooks() {
      this.hadithService.getDownloadBooks().subscribe(res => {
        this.books = res.data.rows.map(value => {
          return {
            ...value,
            downloaded: false
          };
        });
        this.indexeddbService.bulkAdd('books', this.books);
      });
    }
    openSearchDialog() {
      this.dialog.open(_app_components_component_search_comp_search_comp_component__WEBPACK_IMPORTED_MODULE_0__.SearchCompComponent, {
        data: {
          books: this.books.sort(this.helperService.sortBy('sequence')).filter(value => {
            return value.downloaded;
          })
        },
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
    }
    onBookClick(book, type) {
      if (!book?.downloaded) {
        console.log('book not downloaded');
        this.openDownloadDialog(book, type);
      } else {
        this.router.navigate([`/mobile-book/${book.id}/chapters`]);
      }
    }
    openDownloadDialog(book, type) {
      this.dialog.open(_app_components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_1__.DownloadHadithModalComponent, {
        data: {
          book,
          type
        },
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      this.indexeddbService.bookDownloadedObservable.subscribe(value => {
        if (value.book === book.slug) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = true;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                this.getBooks();
              });
            }
          });
        }
      });
    }
    static {
      this.ɵfac = function BookMobileComponent_Factory(t) {
        return new (t || BookMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: BookMobileComponent,
        selectors: [["app-book-mobile"]],
        decls: 1,
        vars: 1,
        consts: [["class", "min-vh-100", 3, "class", 4, "ngIf"], [1, "min-vh-100"], [1, "intro", "d-flex", "justify-content-between", "bangla-font"], [1, "invisible", "mx-2"], [1, "mx-3"], ["width", "22", "height", "22", "alt", "", 3, "src", "click"], [1, "main-top-padding"], ["class", "container", 4, "ngIf"], [3, "footerMenus"], [1, "container"], [1, "row"], ["class", "list-group border-radius-none col-12 col-md-6 col-xl-4", 4, "ngFor", "ngForOf"], [1, "list-group", "border-radius-none", "col-12", "col-md-6", "col-xl-4"], [1, "list-group-item", "mb-3", "shadow-sm", "tag-card", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "justify-content-between", "bangla-font", "example-full-width"], [1, "text-decoration-none", "d-flex", "align-items-center", 2, "width", "95%", 3, "click"], [1, ""], [1, "mt-1"], [1, "book-no", "mb-0"], [1, "ms-2", "ms-sm-3"], [1, "align-middle", "m-1"], [1, "align-middle", "m-1", "hadith-book-arabic-font"], ["class", "mb-0 d-block text-start ", 3, "class", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "mb-0", "d-block", "text-start"], [4, "ngIf"], ["class", "ms-1", 4, "ngIf"], [1, "ms-1"], [1, "pull-right"], [1, "clickable", "me-1", 3, "routerLink"], [1, "material-icons", "md-18"], [1, "clickable", "me-1", 3, "click"]],
        template: function BookMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BookMobileComponent_div_0_Template, 14, 18, "div", 0);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.modalLoading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__.ThemePipe],
        styles: [".book-no[_ngcontent-%COMP%] {\n  width: 32px;\n  line-height: 32px;\n  border-radius: 20px;\n  text-align: center;\n  font-size: 14px;\n}\n\n.main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 62px !important;\n  padding-bottom: 62px !important;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-4[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.tag-card[_ngcontent-%COMP%] {\n  min-height: 120px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  padding-right: 6px !important;\n  padding-left: 6px !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  padding-right: 8px !important;\n  color: unset;\n  background-color: unset;\n  border: unset;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  position: fixed;\n  z-index: 10;\n  box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.075);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ib29rLW1vYmlsZS9ib29rLW1vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLDhDQUE4QztBQUNoRDs7QUFFQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLHFDQUFxQztBQUNyQyxNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFDN0IsTUFBTTtBQUNOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9vay1ubyB7XG4gIHdpZHRoOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYWluLXRvcC1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDYycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDYycHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbC00IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4udGFnLWNhcmQge1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA2cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBib3JkZXI6IHVuc2V0O1xufVxuXG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cblxuLypAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHsqL1xuLyogIC5saXN0LWdyb3VwIHsqL1xuLyogICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7Ki9cbi8qICB9Ki9cbi8qICAudGl0bGUtYm4geyovXG4vKiAgICBmb250LXNpemU6IDEuMDVyZW07Ki9cbi8qICAgICEqbWF4LWhlaWdodDogNC40ZW07KiEqL1xuLyogIH0qL1xuLyp9Ki9cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return BookMobileComponent;
})();

/***/ }),

/***/ 6662:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/bookmark-hadith/bookmark-hadith.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarkHadithComponent: () => (/* binding */ BookmarkHadithComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/component/mobile-hadith-list-comp/mobile-hadith-list-comp.component */ 3189);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);






function BookmarkHadithComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-mobile-hadith-list-comp", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hadiths", ctx_r0.hadiths)("isBookMark", true);
  }
}
function BookmarkHadithComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u0995\u09CB\u09A8 \u09B9\u09BE\u09A6\u09C0\u09B8 \u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09A8\u09C7\u0987");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, "background_title_color"));
  }
}
let BookmarkHadithComponent = /*#__PURE__*/(() => {
  class BookmarkHadithComponent {
    constructor(helperService) {
      this.helperService = helperService;
      this.hadiths = [];
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }, {
        id: 4,
        title: 'খুঁজুন',
        img: 'search.svg',
        slug: 'search',
        link: ''
      }, {
        id: 3,
        title: 'পিছনে',
        img: 'back.svg',
        slug: 'back',
        link: '/'
      }];
      Window['myComponent'] = this;
    }
    ngOnInit() {
      this.getHadiths();
    }
    getHadiths(options = {}, sort) {
      let hadiths = localStorage.getItem('hadiths');
      if (hadiths?.length) {
        this.hadiths = JSON.parse(hadiths);
      }
    }
    static {
      this.ɵfac = function BookmarkHadithComponent_Factory(t) {
        return new (t || BookmarkHadithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: BookmarkHadithComponent,
        selectors: [["app-bookmark-hadith"]],
        decls: 12,
        vars: 15,
        consts: [[1, "min-vh-100"], [1, "intro", "bangla-font"], [1, "main-top-padding"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "footerMenus"], [3, "hadiths", "isBookMark"], [1, "text-center", "bangla-font", 2, "margin-top", "20vh"]],
        template: function BookmarkHadithComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u09B8\u0982\u09B0\u0995\u09CD\u09B7\u09BF\u09A4 \u09B9\u09BE\u09A6\u09C0\u09B8");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BookmarkHadithComponent_div_8_Template, 2, 2, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BookmarkHadithComponent_ng_template_9_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "app-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 9, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 13, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hadiths.length)("ngIfElse", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_1__.MobileHadithListCompComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 62px !important;\n  padding-bottom: 62px !important;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  position: fixed;\n  z-index: 10;\n  box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.075);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ib29rbWFyay1oYWRpdGgvYm9va21hcmstaGFkaXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztFQUNYLDhDQUE4QztBQUNoRCIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRvcC1wYWRkaW5nIHtcbiAgcGFkZGluZy10b3A6IDYycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDYycHggIWltcG9ydGFudDtcbn1cblxuLmludHJvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return BookmarkHadithComponent;
})();

/***/ }),

/***/ 2352:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/chapter-mobile/chapter-mobile.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChapterMobileComponent: () => (/* binding */ ChapterMobileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);










function ChapterMobileComponent_h5_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.helperService.changeEnglishToBengali(ctx_r2.book.total_section.toString()));
  }
}
function ChapterMobileComponent_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ChapterMobileComponent_h5_4_span_6_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u099F\u09BF \u0985\u09A7\u09CD\u09AF\u09BE\u09DF, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u099F\u09BF \u09B9\u09BE\u09A6\u09C0\u09B8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, "background_title_color_bold"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.book.title, "-\u098F\u09B0 \u0985\u09A7\u09CD\u09AF\u09BE\u09DF\u09B8\u09AE\u09C2\u09B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.book.total_section);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.helperService.changeEnglishToBengali(ctx_r0.book.total_hadith.toString()));
  }
}
function ChapterMobileComponent_div_7_div_2_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0995\u09BE\u099C \u099A\u09B2\u09AE\u09BE\u09A8");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a1, a3) {
  return ["/mobile-book/", a1, "chapter", a3, "titles"];
};
const _c1 = function (a1, a3) {
  return ["/mobile-book/", a1, "chapter", a3, "hadiths"];
};
const _c2 = function () {
  return [];
};
function ChapterMobileComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 17)(4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChapterMobileComponent_div_7_div_2_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const chapter_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]((chapter_r4 == null ? null : chapter_r4.hadith_count) === 0 ? ctx_r7.openSnackBar() : "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11)(7, "h6", 19)(8, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ChapterMobileComponent_div_7_div_2_p_19_Template, 3, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const chapter_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 14, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", (chapter_r4 == null ? null : chapter_r4.hadith_count) !== 0 ? ctx_r3.book.has_title ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c0, ctx_r3.bookId, chapter_r4.id) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c1, ctx_r3.bookId, chapter_r4.id) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](26, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", chapter_r4.book_id >= 18 && chapter_r4.book_id <= 34 ? "chapter-urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", chapter_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", chapter_r4 == null ? null : chapter_r4.title_ar, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 18, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u09AE\u09CB\u099F \u09B9\u09BE\u09A6\u09C0\u09B8 - ", ctx_r3.helperService.changeEnglishToBengali(chapter_r4 == null ? null : chapter_r4.hadith_count == null ? null : chapter_r4.hadith_count.toString()), " \u099F\u09BF, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4\u09BF (", ctx_r3.helperService.changeEnglishToBengali(chapter_r4.range_start.toString()), " - ", ctx_r3.helperService.changeEnglishToBengali(chapter_r4.range_end.toString()), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (chapter_r4 == null ? null : chapter_r4.hadith_count) === 0);
  }
}
function ChapterMobileComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChapterMobileComponent_div_7_div_2_Template, 20, 27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.chapters);
  }
}
let ChapterMobileComponent = /*#__PURE__*/(() => {
  class ChapterMobileComponent {
    constructor(hadithService, route, progressbarService, helperService, snackBar, dialog, indexeddbService) {
      this.hadithService = hadithService;
      this.route = route;
      this.progressbarService = progressbarService;
      this.helperService = helperService;
      this.snackBar = snackBar;
      this.dialog = dialog;
      this.indexeddbService = indexeddbService;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }];
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {
          this.bookId = params.id;
          this.getChaptersByBook();
          this.getBooks();
        }
      });
    }
    getChaptersByBook() {
      if (this.bookId) {
        this.indexeddbService.getByIndex('books', 'id', parseInt(String(this.bookId), 0)).subscribe(item => {
          this.book = item;
          this.footerMenus.push({
            id: 4,
            title: 'খুঁজুন',
            img: 'search.svg',
            slug: 'search',
            link: '',
            book: this.book
          }, {
            id: 3,
            title: 'পিছনে',
            img: 'back.svg',
            slug: 'back',
            link: '/'
          });
          if (this.book) {
            // tslint:disable-next-line:max-line-length
            this.indexeddbService.getAllByIndex(this.book.slug + 'Chapters', 'book_id', parseInt(String(this.bookId), 0)).subscribe(value => {
              this.chapters = value.sort(this.helperService.sortBy('sequence'));
            });
          }
        });
      }
    }
    getBooks() {
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item;
      });
    }
    openSnackBar() {
      this.snackBar.open('এই অধ্যায়ের হাদীসের কাজ চলমান', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    static {
      this.ɵfac = function ChapterMobileComponent_Factory(t) {
        return new (t || ChapterMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ProgressbarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__.IndexeddbService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ChapterMobileComponent,
        selectors: [["app-chapter-mobile"]],
        decls: 9,
        vars: 15,
        consts: [[1, "min-vh-100"], [1, "intro", "bangla-font"], ["class", "mb-0", 4, "ngIf"], [1, "main-top-padding"], ["class", "container bangla-font", 4, "ngIf"], [3, "footerMenus"], [1, "mb-0"], [1, "mx-3", "mb-2", "header-title"], [1, "total-text"], ["class", "", 4, "ngIf"], [1, "ms-2"], [1, ""], [1, "container", "bangla-font"], [1, "row"], ["class", "list-group border-radius-none col-12 col-md-6", 4, "ngFor", "ngForOf"], [1, "list-group", "border-radius-none", "col-12", "col-md-6"], [1, "list-group-item", "mb-3", "shadow-sm", "tag-card", "d-flex", "align-items-center"], [1, "bangla-font", "example-full-width"], [1, "text-decoration-none", "d-flex", "align-items-center", "example-full-width", 3, "routerLink", "click"], [1, "align-middle", "mb-1", 3, "ngClass"], [1, "me-2", "mb-1"], [1, "align-middle", "hadith-chapter-arabic-font"], [1, "mb-0", "d-block", "text-start", 2, "font-size", "0.9rem"], [1, "ms-1"], ["class", "mb-0 d-block text-start font-weight-bold", 4, "ngIf"], [1, "mb-0", "d-block", "text-start", "font-weight-bold"], [1, "badge", "bg-secondary"]],
        template: function ChapterMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ChapterMobileComponent_h5_4_Template, 11, 11, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ChapterMobileComponent_div_7_Template, 3, 1, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-footer", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 9, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 11, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 13, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chapters && ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".range-image[_ngcontent-%COMP%] {\n    height: 25px;\n    width: 25px;\n}\n\n.main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 90px !important;\n  padding-bottom: 62px !important;\n}\n\n@media (max-width: 768px) {\n  .list-group[_ngcontent-%COMP%] {\n    padding-right: 0px !important;\n  }\n  .title-bn[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n    \n\n  }\n}\n\n\n.example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.tag-card[_ngcontent-%COMP%] {\n    min-height: 100px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  width: 100%;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  position: fixed;\n  z-index: 10;\n  box-shadow: 2px 3px 5px 0 rgba(0,0,0,0.075);\n}\n\n.header-title[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n}\n\n.total-text[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n    padding-right: 8px !important;\n    color: unset;\n    background-color: unset;\n    border: unset;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jaGFwdGVyLW1vYmlsZS9jaGFwdGVyLW1vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUNGOzs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5nZS1pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4ubWFpbi10b3AtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2MnB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1ncm91cCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpdGxlLWJuIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgLyptYXgtaGVpZ2h0OiA0LjRlbTsqL1xuICB9XG59XG5cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWctY2FyZCB7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbi5pbnRybyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAwIHJnYmEoMCwwLDAsMC4wNzUpO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnRvdGFsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHVuc2V0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICAgIGJvcmRlcjogdW5zZXQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ChapterMobileComponent;
})();

/***/ }),

/***/ 8600:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/hadith-book-desc/hadith-book-desc.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HadithBookDescComponent: () => (/* binding */ HadithBookDescComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);







const _c0 = function (a1) {
  return ["/mobile-book/", a1, "chapters"];
};
function HadithBookDescComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r0.book.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.book.title_en, " ");
  }
}
function HadithBookDescComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r1.book.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.book.title_ar, " ");
  }
}
function HadithBookDescComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.helperService.newLineAdder(ctx_r2.book.description), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
let HadithBookDescComponent = /*#__PURE__*/(() => {
  class HadithBookDescComponent {
    constructor(helperService, activatedRoute, indexeddbService) {
      this.helperService = helperService;
      this.activatedRoute = activatedRoute;
      this.indexeddbService = indexeddbService;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }];
    }
    ngOnInit() {
      this.activatedRoute.params.subscribe(param => {
        if (param.id) {
          this.getBook(param.id);
        }
        this.getBooks();
      });
    }
    getBook(bookId) {
      this.indexeddbService.getByIndex('books', 'id', parseInt(String(bookId), 0)).subscribe(item => {
        this.book = item;
        this.footerMenus.push({
          id: 4,
          title: 'খুঁজুন',
          img: 'search.svg',
          slug: 'search',
          link: '',
          book: this.book
        }, {
          id: 3,
          title: 'পিছনে',
          img: 'back.svg',
          slug: 'back',
          link: '/'
        });
      });
    }
    getBooks() {
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item.sort(this.helperService.sortBy('sequence')).filter(value => {
          return value.downloaded;
        });
      });
    }
    static {
      this.ɵfac = function HadithBookDescComponent_Factory(t) {
        return new (t || HadithBookDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__.IndexeddbService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: HadithBookDescComponent,
        selectors: [["app-hadith-book-desc"]],
        decls: 13,
        vars: 16,
        consts: [[1, "min-vh-100"], [1, "intro", "pb-2"], [1, "mb-0"], ["class", "title bangla-font mb-0 px-2", 3, "routerLink", 4, "ngIf"], ["class", "arabic-font title mb-0 px-2", 3, "routerLink", 4, "ngIf"], [1, "main-top-padding"], [1, "container", "pb-3", "bangla-font"], [1, "row", "text-justify"], ["class", "book-desc", 3, "class", "innerHTML", 4, "ngIf"], [3, "footerMenus"], [1, "title", "bangla-font", "mb-0", "px-2", 3, "routerLink"], [1, "arabic-font", "title", "mb-0", "px-2", 3, "routerLink"], [1, "book-desc", 3, "innerHTML"]],
        template: function HadithBookDescComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HadithBookDescComponent_div_6_Template, 2, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, HadithBookDescComponent_div_7_Template, 2, 4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, HadithBookDescComponent_span_11_Template, 2, 5, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-footer", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 10, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 12, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 14, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".intro[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.book-desc[_ngcontent-%COMP%] {\n    font-size: 1.05rem;\n}\n\n.title[_ngcontent-%COMP%] {\n    text-decoration: none;\n    font-size: 1.1rem;\n    font-weight: bold;\n}\n\n.main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 105px !important;\n  padding-bottom: 62px !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9oYWRpdGgtYm9vay1kZXNjL2hhZGl0aC1ib29rLWRlc2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRybyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9vay1kZXNjIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbi10b3AtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAxMDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNjJweCAhaW1wb3J0YW50O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return HadithBookDescComponent;
})();

/***/ }),

/***/ 582:
/*!***************************************************************************!*\
  !*** ./src/app/components/pages/hadith-mobile/hadith-mobile.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HadithMobileComponent: () => (/* binding */ HadithMobileComponent)
/* harmony export */ });
/* harmony import */ var _Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 2223);
/* harmony import */ var _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/components/component/mobile-hadith-list-comp/mobile-hadith-list-comp.component */ 3189);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);














function HadithMobileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HadithMobileComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-progress-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function HadithMobileComponent_div_4_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.book.title_en);
  }
}
function HadithMobileComponent_div_4_ng_container_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 3, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r7.shorten(ctx_r7.chapter.title), " ");
  }
}
function HadithMobileComponent_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HadithMobileComponent_div_4_ng_container_3_div_1_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HadithMobileComponent_div_4_ng_container_3_div_2_Template, 3, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.book == null ? null : ctx_r4.book.title_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.chapter == null ? null : ctx_r4.chapter.title);
  }
}
function HadithMobileComponent_div_4_ng_container_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("'", ctx_r8.searchForm.value.q, "' \u09B6\u09AC\u09CD\u09A6\u099F\u09BF \u09A6\u09BF\u09DF\u09C7 ");
  }
}
function HadithMobileComponent_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HadithMobileComponent_div_4_ng_container_4_span_3_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " \u099F\u09BF \u09B9\u09BE\u09A6\u09C0\u09B8 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09C7\u099B\u09C7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.searchForm.value.q);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.helperService.changeEnglishToBengali(ctx_r5.total.toString()));
  }
}
function HadithMobileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HadithMobileComponent_div_4_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HadithMobileComponent_div_4_ng_container_4_Template, 7, 6, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 4, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isSearching);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.isSearching && !ctx_r2.loadingForSearch);
  }
}
function HadithMobileComponent_div_5_form_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23)(1, "ng-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HadithMobileComponent_div_5_form_1_div_8_Template_ng_select_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.titleChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r10.titles)("clearable", false);
  }
}
function HadithMobileComponent_div_5_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 16)(1, "div", 17)(2, "div", 18)(3, "ng-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HadithMobileComponent_div_5_form_1_Template_ng_select_change_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.bookChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 20)(6, "ng-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function HadithMobileComponent_div_5_form_1_Template_ng_select_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.chapterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, HadithMobileComponent_div_5_form_1_div_8_Template, 3, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r9.filterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 10, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r9.books)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 12, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx_r9.chapters)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.titleId);
  }
}
function HadithMobileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HadithMobileComponent_div_5_form_1_Template, 9, 14, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-mobile-hadith-list-comp", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isSearching);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hadiths", ctx_r3.hadiths)("total", ctx_r3.total)("page", ctx_r3.page)("arabicText", ctx_r3.arabicText);
  }
}
let HadithMobileComponent = /*#__PURE__*/(() => {
  class HadithMobileComponent {
    constructor(hadithService, route, formBuilder, dialog, helperService, indexeddbService, themeService, router) {
      this.hadithService = hadithService;
      this.route = route;
      this.formBuilder = formBuilder;
      this.dialog = dialog;
      this.helperService = helperService;
      this.indexeddbService = indexeddbService;
      this.themeService = themeService;
      this.router = router;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }];
      this.arabicText = this.themeService.getCurrentArabicText;
      this.page = 1;
      this.total = 0;
      this.isSearching = false;
      this.loading = true;
      this.loadingForSearch = false;
      this.createForm();
    }
    createForm() {
      this.filterForm = this.formBuilder.group({
        book: [''],
        chapter: [''],
        title: ['']
      });
      this.searchForm = this.formBuilder.group({
        q: [''],
        book: [''],
        hadith_number: ['']
      });
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.book_id && params.chapter_id && !params.title_id) {
          this.isSearching = false;
          this.bookId = params.book_id;
          this.chapterId = params.chapter_id;
          this.getBookAndChapters();
          this.getBooks();
        } else if (params.book_id && params.chapter_id && params.title_id) {
          this.isSearching = false;
          this.bookId = params.book_id;
          this.chapterId = params.chapter_id;
          this.titleId = params.title_id;
          this.getBookAndChapters();
          this.getBooks();
        }
      });
      this.route.queryParams.subscribe(queryParams => {
        if (queryParams.q || queryParams.book || queryParams.hadith_no) {
          this.isSearching = true;
          this.bookId = parseInt(queryParams.book, 0);
          this.page = queryParams.page ? queryParams.page : 1;
          this.searchForm = this.formBuilder.group({
            q: [queryParams.q],
            book: [queryParams.book],
            hadith_number: [queryParams.hadith_no]
          });
          this.getSearchHadiths();
          this.getBooks();
          if (this.footerMenus.length > 1) {
            this.footerMenus[1] = {
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            };
            this.footerMenus[2] = {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/'
            };
          } else {
            this.footerMenus.push({
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            }, {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/'
            });
          }
        }
      });
    }
    getBookAndChapters() {
      this.loading = true;
      if (this.bookId) {
        this.indexeddbService.getByIndex('books', 'id', parseInt(String(this.bookId), 0)).subscribe(item => {
          this.book = item;
          this.filterForm.controls.book.patchValue(this.book.id);
          if (this.book) {
            // tslint:disable-next-line:max-line-length
            this.indexeddbService.getAllByIndex(this.book.slug + 'Chapters', 'book_id', parseInt(String(this.bookId), 0)).subscribe(value => {
              this.chapters = value.sort(this.helperService.sortBy('sequence'));
              this.chapterId = this.chapterId || this.chapters[0].id;
              this.loading = false;
              this.getChapter(this.book, this.chapterId);
            });
          }
        });
      }
    }
    getBooks() {
      this.loading = true;
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item.sort(this.helperService.sortBy('sequence')).filter(value => {
          return value.downloaded;
        });
        this.loading = false;
      });
    }
    getChapter(book, chapterId) {
      this.loading = true;
      this.indexeddbService.getByIndex(book.slug + 'Chapters', 'id', parseInt(String(chapterId), 0)).subscribe(item => {
        this.chapter = item;
        this.filterForm.controls.chapter.patchValue(this.chapter.id);
        this.loading = false;
        if (this.titleId) {
          if (this.footerMenus.length > 2) {
            this.footerMenus[1] = {
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            };
            this.footerMenus[2] = {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/mobile-book/' + this.book.id + '/chapter/' + this.chapter.id + '/titles'
            };
          } else {
            this.footerMenus.push({
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            }, {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/mobile-book/' + this.book.id + '/chapter/' + this.chapter.id + '/titles'
            });
          }
          this.getTitlesByBookAndChapter(book, chapterId);
        } else {
          if (this.footerMenus.length > 2) {
            this.footerMenus[1] = {
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            };
            this.footerMenus[2] = {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/mobile-book/' + this.book.id + '/chapters'
            };
          } else {
            this.footerMenus.push({
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            }, {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/mobile-book/' + this.book.id + '/chapters'
            });
          }
          this.getHadithsByBookAndChapterId(book, chapterId);
        }
      });
    }
    getTitleByBookAndId(book, titleId) {
      this.loading = true;
      this.indexeddbService.getByIndex(book.slug + 'Titles', 'id', parseInt(String(titleId), 0)).subscribe(item => {
        this.title = item;
        this.loading = false;
        this.filterForm.controls.title.patchValue(this.title.id);
      });
    }
    getTitlesByBookAndChapter(book, chapterId) {
      this.loading = true;
      this.indexeddbService.getAllByIndex(book.slug + 'Titles', 'chapter_id', parseInt(String(chapterId), 0)).subscribe(item => {
        this.titles = item.sort(this.helperService.sortBy('sequence'));
        this.titleId = this.titleId || this.titles[0].id;
        this.loading = false;
        // @ts-ignore
        this.getTitleByBookAndId(book, this.titleId);
        // @ts-ignore
        this.getHadithsByBookAndTitleId(book, this.titleId);
      });
    }
    getHadithsByBookAndTitleId(book, titleId) {
      this.loading = true;
      this.indexeddbService.getAllByIndex(book.slug + 'Hadiths', 'title_id', parseInt(String(titleId), 0)).subscribe(item => {
        this.hadiths = item.sort(this.helperService.sortBy('hadith_number'));
        this.total = this.hadiths.length;
        this.loading = false;
      });
    }
    getHadithsByBookAndChapterId(book, chapterId) {
      this.loading = true;
      this.indexeddbService.getAllByIndex(book.slug + 'Hadiths', 'chapter_id', parseInt(String(chapterId), 0)).subscribe(item => {
        this.hadiths = item.sort(this.helperService.sortBy('hadith_number'));
        this.total = this.hadiths.length;
        this.loading = false;
      });
    }
    bookChange(event) {
      var _this = this;
      if (event.has_title) {
        this.hadithService.getChaptersByBookId(this.filterForm.value.book).subscribe(res => {
          const chapterId = res.data.rows[0]?.id;
          this.hadithService.getAllTitlesByBookAndChapter(this.filterForm.value.book, chapterId).subscribe( /*#__PURE__*/function () {
            var _ref = (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res1) {
              const titleId = res1.data.rows[0]?.id;
              yield _this.router.navigate([`/mobile-book/${_this.filterForm.value.book}/chapter/${chapterId}/title/${titleId}/hadiths`], {
                queryParams: {
                  page: 1
                },
                queryParamsHandling: 'merge'
              });
            });
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        });
      } else {
        this.hadithService.getChaptersByBookId(this.filterForm.value.book).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
            const chapterId = res.data.rows[0]?.id;
            yield _this.router.navigate([`/mobile-book/${_this.filterForm.value.book}/chapter/${chapterId}/hadiths`], {
              queryParams: {
                page: 1
              },
              queryParamsHandling: 'merge'
            });
          });
          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    }
    chapterChange() {
      var _this2 = this;
      return (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this2.titleId) {
          _this2.hadithService.getAllTitlesByBookAndChapter(_this2.filterForm.value.book, _this2.filterForm.value.chapter).subscribe( /*#__PURE__*/function () {
            var _ref3 = (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
              const titleId = res.data.rows[0]?.id;
              yield _this2.router.navigate([`/mobile-book/${_this2.filterForm.value.book}/chapter/${_this2.filterForm.value.chapter}/title/${titleId}/hadiths`], {
                queryParams: {
                  page: 1
                },
                queryParamsHandling: 'merge'
              });
            });
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }());
        } else {
          yield _this2.router.navigate([`/mobile-book/${_this2.filterForm.value.book}/chapter/${_this2.filterForm.value.chapter}/hadiths`], {
            queryParams: {
              page: 1
            },
            queryParamsHandling: 'merge'
          });
        }
      })();
    }
    titleChange() {
      var _this3 = this;
      return (0,_Users_wodemini_Documents_offline_hadith_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this3.router.navigate([
        // tslint:disable-next-line:max-line-length
        `/mobile-book/${_this3.filterForm.value.book}/chapter/${_this3.filterForm.value.chapter}/title/${_this3.filterForm.value.title}/hadiths`], {
          queryParams: {
            page: 1
          },
          queryParamsHandling: 'merge'
        });
      })();
    }
    getSearchHadiths() {
      this.loadingForSearch = true;
      const q = this.searchForm.value.q;
      this.bookId = this.searchForm.value.book;
      const hadithNo = this.helperService.changeBengaliToEnglish(this.searchForm.value.hadith_number.trim());
      if (hadithNo) {
        if (this.bookId) {
          this.indexeddbService.getByIndex('books', 'id', parseInt(String(this.bookId), 0)).subscribe(item => {
            this.book = item;
            if (this.book) {
              // tslint:disable-next-line:max-line-length
              this.indexeddbService.getByIndex(this.book.slug + 'Hadiths', 'hadith_number', parseInt(String(hadithNo), 0)).subscribe(value => {
                this.hadiths = [];
                this.loadingForSearch = false;
                if (value) {
                  this.hadiths.push(value);
                  this.total = this.hadiths.length;
                }
              });
            }
          });
        }
      } else {
        const options = {
          keys: ['description', 'description_ar', 'title', 'title_ar'],
          shouldSort: true,
          matchAllTokens: false,
          findAllMatches: true,
          includeScore: true,
          ignoreFieldNorm: true,
          threshold: 0.3,
          ignoreLocation: true,
          maxPatternLength: 32,
          minMatchCharLength: 1,
          includeMatches: true
        };
        if (this.bookId) {
          this.indexeddbService.getByIndex('books', 'id', parseInt(String(this.bookId), 0)).subscribe(item => {
            this.book = item;
            if (this.book) {
              this.indexeddbService.getAll(this.book.slug + 'Hadiths').subscribe(res => {
                this.hadiths = [];
                this.indexeddbService.fuseHadithSearch(res, q, options).subscribe(values => {
                  this.hadiths = values;
                  // this.hadiths = values.slice(0, 500);
                  this.loadingForSearch = false;
                  this.total = this.hadiths.length;
                });
              });
            }
          });
        } else {
          this.indexeddbService.getAll('books').subscribe(books => {
            const source = [];
            this.hadiths = [];
            books.forEach(book => {
              if (book.downloaded) {
                source.push(this.indexeddbService.getAll(book.slug + 'Hadiths'));
              }
            });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(source).subscribe(data => {
              const total = [].concat.apply([], [...data]);
              this.indexeddbService.fuseHadithSearch(total, q, options).subscribe(res => {
                this.hadiths = res;
                // this.hadiths = res.slice(0, 500);
                this.loadingForSearch = false;
                this.total = this.hadiths.length;
              });
            });
          });
        }
      }
    }
    shorten(text) {
      const returnText = text.slice(0, 30);
      if (returnText.length === 30) {
        return returnText + '...';
      } else {
        return returnText;
      }
    }
    static {
      this.ɵfac = function HadithMobileComponent_Factory(t) {
        return new (t || HadithMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_2__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_1__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: HadithMobileComponent,
        selectors: [["app-hadith-mobile"]],
        decls: 7,
        vars: 9,
        consts: [[1, "min-vh-100"], ["class", "loader-spinner", 4, "ngIf"], ["class", "intro bangla-font", 3, "class", 4, "ngIf"], ["class", "main-top-padding", 4, "ngIf"], [3, "footerMenus"], [1, "loader-spinner"], ["mode", "indeterminate", 1, "mx-auto", 2, "top", "40%"], [1, "intro", "bangla-font"], [4, "ngIf"], ["class", "mx-3 mb-2 header-title", 3, "class", 4, "ngIf"], ["class", "mx-3 header-title", 3, "class", 4, "ngIf"], [1, "mx-3", "mb-2", "header-title"], [1, "mx-3", "header-title"], [1, "main-top-padding"], ["class", "container my-3", 3, "formGroup", 4, "ngIf"], [3, "hadiths", "total", "page", "arabicText"], [1, "container", "my-3", 3, "formGroup"], [1, "row"], [1, "col-md-6"], ["bindLabel", "title", "bindValue", "id", "placeholder", "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u0995\u09BF\u09A4\u09BE\u09AC", "clearAllText", "Clear", "formControlName", "book", "appendTo", "body", "dropdownPosition", "bottom", 1, "bangla-font", "pb-0", 3, "items", "clearable", "change"], [1, "col-md-6", "mt-2", "mt-md-0"], ["bindLabel", "title", "bindValue", "id", "placeholder", "\u0985\u09A7\u09CD\u09AF\u09BE\u09DF", "clearAllText", "Clear", "formControlName", "chapter", "appendTo", "body", "dropdownPosition", "bottom", 1, "bangla-font", "pb-0", 3, "items", "clearable", "change"], ["class", "col-12 mt-2", 4, "ngIf"], [1, "col-12", "mt-2"], ["bindLabel", "title", "bindValue", "id", "placeholder", "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6", "clearAllText", "Clear", "formControlName", "title", "appendTo", "body", "dropdownPosition", "bottom", 1, "bangla-font", "pb-0", 3, "items", "clearable", "change"]],
        template: function HadithMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HadithMobileComponent_div_2_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HadithMobileComponent_div_3_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HadithMobileComponent_div_4_Template, 5, 6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, HadithMobileComponent_div_5_Template, 3, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 7, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loadingForSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _app_components_component_mobile_hadith_list_comp_mobile_hadith_list_comp_component__WEBPACK_IMPORTED_MODULE_3__.MobileHadithListCompComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__.ThemePipe],
        styles: [".hadith-index[_ngcontent-%COMP%] {\n  width: 36px;\n  line-height: 36px;\n  border-radius: 20px;\n  text-align: center;\n  font-size: 16px;\n}\n\n.main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 80px !important;\n  padding-bottom: 62px !important;\n}\n\n \n  .mat-checkbox-checked.mat-accent\n  .mat-checkbox-ripple\n  .mat-ripple-element {\n  opacity: 0.03 !important;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.total-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9oYWRpdGgtbW9iaWxlL2hhZGl0aC1tb2JpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTs7OztFQUlFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFkaXRoLWluZGV4IHtcbiAgd2lkdGg6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1haW4tdG9wLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogODBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNjJweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXBcbiAgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnRcbiAgLm1hdC1jaGVja2JveC1yaXBwbGVcbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMDMgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi50b3RhbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return HadithMobileComponent;
})();

/***/ }),

/***/ 2120:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/last-read-hadith/last-read-hadith.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LastReadHadithComponent: () => (/* binding */ LastReadHadithComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _app_components_component_mobile_hadith_comp_mobile_hadith_comp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/component/mobile-hadith-comp/mobile-hadith-comp.component */ 2553);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);





let LastReadHadithComponent = /*#__PURE__*/(() => {
  class LastReadHadithComponent {
    constructor(helperService) {
      this.helperService = helperService;
      this.arabicText = true;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }, {
        id: 4,
        title: 'খুঁজুন',
        img: 'search.svg',
        slug: 'search',
        link: ''
      }, {
        id: 3,
        title: 'পিছনে',
        img: 'back.svg',
        slug: 'back',
        link: '/'
      }];
      Window['myComponent'] = this;
    }
    ngOnInit() {
      this.getHadith();
    }
    getHadith() {
      const hadith = localStorage.getItem('hadith');
      if (hadith) {
        this.hadith = JSON.parse(hadith);
      }
    }
    static {
      this.ɵfac = function LastReadHadithComponent_Factory(t) {
        return new (t || LastReadHadithComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: LastReadHadithComponent,
        selectors: [["app-last-read-hadith"]],
        decls: 10,
        vars: 14,
        consts: [[1, "min-vh-100"], [1, "intro", "bangla-font"], [1, "main-top-padding"], [3, "hadith"], [3, "footerMenus"]],
        template: function LastReadHadithComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u09B8\u09B0\u09CD\u09AC\u09B6\u09C7\u09B7 \u09AA\u09A0\u09BF\u09A4 \u09B9\u09BE\u09A6\u09C0\u09B8");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-mobile-hadith-comp", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-footer", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 12, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hadith", ctx.hadith);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_app_components_component_mobile_hadith_comp_mobile_hadith_comp_component__WEBPACK_IMPORTED_MODULE_1__.MobileHadithCompComponent, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 70px !important;\n  padding-bottom: 45px !important;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  position: fixed;\n  z-index: 10;\n  box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.075);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sYXN0LXJlYWQtaGFkaXRoL2xhc3QtcmVhZC1oYWRpdGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0VBQ1gsOENBQThDO0FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdG9wLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNzBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNDVweCAhaW1wb3J0YW50O1xufVxuXG4uaW50cm8ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return LastReadHadithComponent;
})();

/***/ }),

/***/ 5398:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/settings/settings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _app_components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/components/component/download-hadith-modal/download-hadith-modal.component */ 8921);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/components/component/confirmation-modal/confirmation-modal.component */ 1429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);















function SettingsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_div_12_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.changeCurrentArabicText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, "assets/img/" + "tick.svg", "svg"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function SettingsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.changeCurrentArabicText());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, "assets/img/" + "tick_empty.svg", "svg"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function SettingsComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const book_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", book_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](book_r10.title);
  }
}
function SettingsComponent_ng_container_24_div_1_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_ng_container_24_div_1_a_16_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.bookTitlesReset(ctx_r13.selectedBook));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " \u09B0\u09BF\u09B8\u09C7\u099F \u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "background_title_color"));
  }
}
function SettingsComponent_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 23)(5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_ng_container_24_div_1_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.bookFullReset(ctx_r15.selectedBook));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " \u09AB\u09C1\u09B2 \u09B0\u09BF\u09B8\u09C7\u099F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_ng_container_24_div_1_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.bookChaptersReset(ctx_r17.selectedBook));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u09B0\u09BF\u09B8\u09C7\u099F \u0985\u09A7\u09CD\u09AF\u09BE\u09DF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SettingsComponent_ng_container_24_div_1_a_16_Template, 5, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_ng_container_24_div_1_Template_a_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.bookHadithsReset(ctx_r18.selectedBook));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "sync");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, " \u09B0\u09BF\u09B8\u09C7\u099F \u09B9\u09BE\u09A6\u09C0\u09B8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 26)(23, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_ng_container_24_div_1_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.deleteBook(ctx_r19.selectedBook));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " \u09A1\u09BF\u09B2\u09C7\u099F \u0995\u09B0\u09C1\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 12, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.selectedBook.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 14, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 16, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.selectedBook.has_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 18, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 20, "background_title_color"));
  }
}
function SettingsComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, SettingsComponent_ng_container_24_div_1_Template, 28, 22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
  }
}
function SettingsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h6", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0986\u09AA\u09A8\u09BF \u0995\u09CB\u09A8 \u09AC\u0987 \u09A1\u09BE\u0989\u09A8\u09B2\u09CB\u09A1 \u0995\u09B0\u09C7\u09A8\u09A8\u09BF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "background_title_color"));
  }
}
function SettingsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SettingsComponent_div_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.updateDist());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " \u0985\u09AB\u09B2\u09BE\u0987\u09A8 \u09B9\u09BE\u09A6\u09C0\u09B8 \u0985\u09CD\u09AF\u09BE\u09AA\u099F\u09BF \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09C1\u09A8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "background_title_color"));
  }
}
let SettingsComponent = /*#__PURE__*/(() => {
  class SettingsComponent {
    constructor(themeService, indexeddbService, helperService, dialog) {
      this.themeService = themeService;
      this.indexeddbService = indexeddbService;
      this.helperService = helperService;
      this.dialog = dialog;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }, {
        id: 2,
        title: 'সর্বশেষ পঠিত',
        img: 'ic_last_read.svg',
        slug: 'ic_last_read',
        link: '/last-read-hadith'
      }, {
        id: 3,
        title: 'বুকমার্ক',
        img: 'ic_bookmark.svg',
        slug: 'ic_bookmark',
        link: '/mobile-hadith-bookmarks'
      }, {
        id: 3,
        title: 'পেছনে যাই',
        img: 'back.svg',
        slug: 'back',
        link: '/'
      }];
      this.currentArText = 'false';
      this.loading = false;
      this.books = [];
    }
    ngOnInit() {
      this.currentArText = this.themeService.getCurrentArabicText;
      if (!this.currentArText) {
        this.currentArText = 'true';
        this.themeService.setCurrentArabicText('true');
      }
      this.getBooks();
    }
    changeCurrentArabicText() {
      this.currentArText = this.currentArText === 'true' ? 'false' : 'true';
      this.themeService.setCurrentArabicText(this.currentArText);
    }
    getBooks() {
      this.loading = true;
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item.sort(this.helperService.sortBy('sequence')).filter(value => {
          return value.downloaded;
        });
        console.log(this.books);
        this.loading = false;
      });
    }
    bookFullReset(book) {
      const instructionDialog = this.dialog.open(_app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
        data: `আপনি কি "${book.title}" বইটি রিসেট করতে চান? এটি আপনার ডাউনলোড করা অধ্যায়, পরিচ্ছেদ এবং হাদীসসমূহ মুছে নতুন করে ডাউনলোড করবে। কিন্তু প্রয়োজনের তুলনায় বেশি বার কিংবা অযথা রিসেট করলে আপনাকে ব্লক করা হতে পাড়ে।`,
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      instructionDialog.afterClosed().subscribe(res => {
        if (res) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = false;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                console.log(i);
                this.getBooks();
              });
            }
          });
          this.indexeddbService.clear(book.slug + 'Chapters').subscribe(value => {
            console.log(value);
          });
          this.indexeddbService.clear(book.slug + 'Titles').subscribe(value => {
            console.log(value);
          });
          this.indexeddbService.clear(book.slug + 'Hadiths').subscribe(value => {
            console.log(value);
            this.openDownloadDialog(book, 'all');
          });
        }
      });
    }
    bookChaptersReset(book) {
      const instructionDialog = this.dialog.open(_app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
        data: `আপনি কি "${book.title}" বইটির অধ্যায়সমূহ রিসেট করতে চান? এটি আপনার ডাউনলোড করা অধ্যায়সমূহ মুছে নতুন করে ডাউনলোড করবে। কিন্তু প্রয়োজনের তুলনায় বেশি বার কিংবা অযথা রিসেট করলে আপনাকে ব্লক করা হতে পাড়ে।`,
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      instructionDialog.afterClosed().subscribe(res => {
        if (res) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = false;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                console.log(i);
                this.getBooks();
              });
            }
          });
          this.indexeddbService.clear(book.slug + 'Chapters').subscribe(value => {
            this.openDownloadDialog(book, 'chapters');
          });
        }
      });
    }
    bookTitlesReset(book) {
      const instructionDialog = this.dialog.open(_app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
        data: `আপনি কি "${book.title}" বইটির পরিচ্ছেদসমূহ রিসেট করতে চান? এটি আপনার ডাউনলোড করা পরিচ্ছেদসমূহ মুছে নতুন করে ডাউনলোড করবে। কিন্তু প্রয়োজনের তুলনায় বেশি বার কিংবা অযথা রিসেট করলে আপনাকে ব্লক করা হতে পাড়ে।`,
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      instructionDialog.afterClosed().subscribe(res => {
        if (res) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = false;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                console.log(i);
                this.getBooks();
              });
            }
          });
          this.indexeddbService.clear(book.slug + 'Titles').subscribe(value => {
            this.openDownloadDialog(book, 'titles');
          });
        }
      });
    }
    bookHadithsReset(book) {
      const instructionDialog = this.dialog.open(_app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
        data: `আপনি কি "${book.title}" বইটির হাদীসসমূহ রিসেট করতে চান? এটি আপনার ডাউনলোড করা হাদীসসমূহ মুছে নতুন করে ডাউনলোড করবে। কিন্তু প্রয়োজনের তুলনায় বেশি বার কিংবা অযথা রিসেট করলে আপনাকে ব্লক করা হতে পাড়ে।`,
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      instructionDialog.afterClosed().subscribe(res => {
        if (res) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = false;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                console.log(i);
                this.getBooks();
              });
            }
          });
          this.indexeddbService.clear(book.slug + 'Hadiths').subscribe(value => {
            this.openDownloadDialog(book, 'hadiths');
          });
        }
      });
    }
    openDownloadDialog(book, type) {
      this.dialog.open(_app_components_component_download_hadith_modal_download_hadith_modal_component__WEBPACK_IMPORTED_MODULE_0__.DownloadHadithModalComponent, {
        data: {
          book,
          type
        },
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      this.indexeddbService.bookDownloadedObservable.subscribe(value => {
        if (value.book === book.slug) {
          this.books.forEach((bk, index) => {
            if (bk.slug === book.slug) {
              const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
              updatedBook.downloaded = true;
              this.indexeddbService.update('books', updatedBook).subscribe(i => {
                console.log(i);
                this.getBooks();
              });
            }
          });
        }
      });
    }
    deleteBook(book) {
      const instructionDialog = this.dialog.open(_app_components_component_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationModalComponent, {
        data: `আপনি কি "${book.title}" বইটি ডিলিট করতে চান?`,
        width: '350px',
        autoFocus: false,
        scrollStrategy: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.NoopScrollStrategy()
      });
      instructionDialog.afterClosed().subscribe(res => {
        if (res) {
          this.indexeddbService.clear(book.slug + 'Chapters').subscribe(value => {
            console.log(value);
          });
          this.indexeddbService.clear(book.slug + 'Titles').subscribe(value => {
            console.log(value);
          });
          this.indexeddbService.clear(book.slug + 'Hadiths').subscribe(value => {
            this.books.forEach((bk, index) => {
              if (bk.slug === book.slug) {
                const updatedBook = JSON.parse(JSON.stringify(this.books[index]));
                updatedBook.downloaded = false;
                this.indexeddbService.update('books', updatedBook).subscribe(i => {
                  console.log(i);
                  this.getBooks();
                });
              }
            });
          });
        }
      });
    }
    updateDist() {
      // @ts-ignore
      AndroidNative.checkDistVersion();
    }
    static {
      this.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_3__.IndexeddbService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_2__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        decls: 28,
        vars: 24,
        consts: [[1, "min-vh-100"], [1, "intro", "bangla-font"], [1, "main-top-padding"], [1, "container", "py-2", "px-3"], [1, "row"], [1, "col-12", "mb-3"], [1, "d-flex", "justify-content-start"], [3, "click", 4, "ngIf"], [1, "ms-2", "align-content-center"], [1, "bangla-font", "mb-0", 2, "padding-top", "3px"], [1, "col-12", "mb-2"], [1, "bangla-font"], [1, "bangla-font", 3, "value", "valueChange"], ["class", "bangla-font", 3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "d-flex justify-content-end mt-3", 4, "ngIf"], [3, "footerMenus"], [3, "click"], ["height", "25", "width", "25", "alt", "", 3, "src"], [1, "bangla-font", 3, "value"], ["class", "mb-3", 4, "ngIf"], [1, "mb-3"], [1, "bangla-font", "mb-1"], [1, "d-flex", "justify-content-between"], ["mat-raised-button", "", 1, "mb-2", "bangla-font", 3, "click"], ["mat-raised-button", "", "class", "mb-2 bangla-font", 3, "class", "click", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-3"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u09B8\u09C7\u099F\u09BF\u0982\u09B8");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SettingsComponent_div_12_Template, 3, 4, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SettingsComponent_div_13_Template, 3, 4, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8)(15, "h5", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u0986\u09B0\u09AC\u09BF");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 10)(19, "mat-form-field")(20, "mat-label", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\u09AC\u0987 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09C1\u09A8");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-select", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SettingsComponent_Template_mat_select_valueChange_22_listener($event) {
              return ctx.selectedBook = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SettingsComponent_mat_option_23_Template, 3, 2, "mat-option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SettingsComponent_ng_container_24_Template, 2, 1, "ng-container", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SettingsComponent_div_25_Template, 4, 4, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SettingsComponent_div_26_Template, 6, 4, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "app-footer", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 16, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 18, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 20, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentArText === "true");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.currentArText === "false");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 22, "background_title_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selectedBook);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.books);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedBook);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.books.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.books.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_5__.ThemePipe],
        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return SettingsComponent;
})();

/***/ }),

/***/ 9788:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/single-hadith-mobile/single-hadith-mobile.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleHadithMobileComponent: () => (/* binding */ SingleHadithMobileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);








function SingleHadithMobileComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SingleHadithMobileComponent_div_4_ul_13_span_9_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r12.helperService.changeEnglishToBengali(ctx_r12.hadith.hadith_number_one.toString()), " ");
  }
}
function SingleHadithMobileComponent_div_4_ul_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SingleHadithMobileComponent_div_4_ul_13_span_9_span_5_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.helperService.changeEnglishToBengali(ctx_r4.hadith.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.hadith.hadith_number_one);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_ng_template_10_span_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", ctx_r14.helperService.changeEnglishToBengali(ctx_r14.hadith.hadith_number_two.toString()), " ");
  }
}
function SingleHadithMobileComponent_div_4_ul_13_ng_template_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleHadithMobileComponent_div_4_ul_13_ng_template_10_span_4_span_2_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0986\u09A8\u09CD\u09A4\u09B0\u09CD\u099C\u09BE\u09A4\u09BF\u0995 \u09A8\u0982 - ", ctx_r13.helperService.changeEnglishToBengali(ctx_r13.hadith.hadith_number_one.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.hadith.hadith_number_two);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8 \u09A8\u0982- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SingleHadithMobileComponent_div_4_ul_13_ng_template_10_span_4_Template, 3, 2, "span", 27);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.helperService.changeEnglishToBengali(ctx_r6.hadith.hadith_number.toString()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.hadith.hadith_number_one);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_14_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r15.helperService.addHtmlTag(ctx_r15.hadith.title_ar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 29)(3, "h5", 30)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SingleHadithMobileComponent_div_4_ul_13_div_14_span_11_Template, 1, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 12, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.hadith.book_id >= 18 && ctx_r7.hadith.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.hadith.book_id >= 18 && ctx_r7.hadith.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.hadith.book_id >= 18 && ctx_r7.hadith.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r7.helperService.addHtmlTag(ctx_r7.hadith.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r7.hadith.book_id >= 18 && ctx_r7.hadith.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r7.helperService.addHtmlTag(ctx_r7.hadith.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.hadith.title_ar.includes("null"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r7.helperService.addHtmlTag(ctx_r7.hadith.description_ar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 30)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 8, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r8.hadith.book_id >= 18 && ctx_r8.hadith.book_id <= 34 ? "urdu-font" : "bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r8.hadith.book_id >= 18 && ctx_r8.hadith.book_id <= 34 ? "hadith-title-ur urdu-font" : "hadith-title bangla-font");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.hadith.book_id >= 18 && ctx_r8.hadith.book_id <= 34 ? "\u0641\u0635\u0644 : " : "\u09AA\u09B0\u09BF\u099A\u09CD\u099B\u09C7\u09A6\u0983 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r8.helperService.addHtmlTag(ctx_r8.hadith.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r8.hadith.book_id >= 18 && ctx_r8.hadith.book_id <= 34 ? "urdu-font" : "hadith-desc bangla-font")("innerHTML", ctx_r8.helperService.addHtmlTag(ctx_r8.hadith.description), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_16_h6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09B6\u09BE\u09B8\u09CD\u09A4\u09CD\u09B0\u09C0\u09DF \u0986\u09B2\u09CB\u099A\u09A8\u09BE: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_16_h6_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09A4\u09BE\u0996\u09B0\u09C0\u099C (\u09B8\u09C2\u09A4\u09CD\u09B0): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleHadithMobileComponent_div_4_ul_13_div_16_h6_2_Template, 2, 0, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SingleHadithMobileComponent_div_4_ul_13_div_16_h6_3_Template, 2, 0, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hadith.book.id != ctx_r9.fiqhUsSunanBookId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hadith.book.id == ctx_r9.fiqhUsSunanBookId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r9.helperService.addHtmlTag(ctx_r9.hadith.note), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_17_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r18.hadith.explanations.reference, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 37)(2, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u0996\u09CD\u09AF\u09BE:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SingleHadithMobileComponent_div_4_ul_13_div_17_div_5_Template, 3, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r10.helperService.newLineAdder(ctx_r10.hadith.explanations.title), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.hadith.explanations.reference);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995 \u09A8\u09BF\u09B7\u09CD\u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 3, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "background_title_color_light"));
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u09A4\u09BE\u09B9\u0995\u09C0\u0995: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 4, "assets/img/" + "tahqiq.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.hadith.type && ctx_r23.hadith.type.title || "\u0985\u09AA\u09C7\u0995\u09CD\u09B7\u09AE\u09BE\u09A3", "");
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SingleHadithMobileComponent_div_4_ul_13_div_18_ng_template_3_span_0_Template, 8, 9, "span", 49);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.hadith.book_id !== ctx_r21.fiqhUsSunanBookId);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_span_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](", ");
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_span_6_span_7_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rabi_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 5, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](rabi_r25.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", rabi_r25.death_year ? "(\u09AE\u09C3\u09A4\u09CD\u09AF\u09C1\u0983 " + ctx_r24.helperService.changeEnglishToBengali(rabi_r25.death_year.toString()) + " \u09B9\u09BF\u099C\u09B0\u09BF)" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", rabi_r25.id !== ctx_r24.hadith.rabis[ctx_r24.hadith.rabis.length - 1].id);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u09AC\u09B0\u09CD\u09A3\u09A8\u09BE\u0995\u09BE\u09B0\u09C0: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_span_6_Template, 8, 7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 4, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSrc", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 6, "assets/img/" + "rabi.svg", "svg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r22.hadith.rabis);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleHadithMobileComponent_div_4_ul_13_div_18_span_2_Template, 8, 8, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SingleHadithMobileComponent_div_4_ul_13_div_18_ng_template_3_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SingleHadithMobileComponent_div_4_ul_13_div_18_span_5_Template, 7, 9, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.hadith.book_id == ctx_r11.bukhariBookId || ctx_r11.hadith.book_id == ctx_r11.muslimBookId)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.hadith.rabis.length > 0);
  }
}
function SingleHadithMobileComponent_div_4_ul_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12)(1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h6")(7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, SingleHadithMobileComponent_div_4_ul_13_span_9_Template, 6, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SingleHadithMobileComponent_div_4_ul_13_ng_template_10_Template, 5, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 19)(13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SingleHadithMobileComponent_div_4_ul_13_div_14_Template, 13, 16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SingleHadithMobileComponent_div_4_ul_13_div_15_Template, 7, 10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SingleHadithMobileComponent_div_4_ul_13_div_16_Template, 5, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SingleHadithMobileComponent_div_4_ul_13_div_17_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SingleHadithMobileComponent_div_4_ul_13_div_18_Template, 6, 7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 12, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 14, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.hadith.book.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hadith.book_id == ctx_r2.tohabiBookId || ctx_r2.hadith.book_id == ctx_r2.misqatBookId)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.arabicText === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.arabicText !== "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hadith.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hadith.explanations);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r2.hadith.book_id >= 18 && ctx_r2.hadith.book_id <= 34));
  }
}
function SingleHadithMobileComponent_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 53)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0995\u09CB\u09A8 \u09B9\u09BE\u09A6\u09C0\u09B8 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "background_title_color"));
  }
}
function SingleHadithMobileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SingleHadithMobileComponent_div_4_ul_13_Template, 19, 16, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SingleHadithMobileComponent_div_4_div_14_Template, 5, 4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 14, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 16, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 18, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.hadith.book.title_en);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 20, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.shorten(ctx_r1.hadith.chapter.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 22, "background_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.hadith);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.hadith);
  }
}
let SingleHadithMobileComponent = /*#__PURE__*/(() => {
  class SingleHadithMobileComponent {
    constructor(route, helperService, progressbarService, hadithService, dialog, themeService) {
      this.route = route;
      this.helperService = helperService;
      this.progressbarService = progressbarService;
      this.hadithService = hadithService;
      this.dialog = dialog;
      this.themeService = themeService;
      this.arabicText = this.themeService.getCurrentArabicText;
      this.tohabiBookId = 9;
      this.bukhariBookId = 1;
      this.muslimBookId = 2;
      this.fiqhUsSunanBookId = 14;
      this.misqatBookId = 13;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }, {
        id: 4,
        title: 'খুঁজুন',
        img: 'search.svg',
        slug: 'search',
        link: ''
      }, {
        id: 3,
        title: 'পিছনে',
        img: 'back.svg',
        slug: 'goBack',
        link: ''
      }];
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.getHadith(params.id);
      });
    }
    getHadith(hadithId) {
      this.hadithService.getHadith(hadithId).subscribe(res => {
        this.hadith = res.data;
        localStorage.setItem('hadith', JSON.stringify(this.hadith));
      });
    }
    shorten(text) {
      const returnText = text.slice(0, 30);
      if (returnText.length === 30) {
        return returnText + '...';
      } else {
        return returnText;
      }
    }
    static {
      this.ɵfac = function SingleHadithMobileComponent_Factory(t) {
        return new (t || SingleHadithMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ProgressbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: SingleHadithMobileComponent,
        selectors: [["app-single-hadith-mobile"]],
        decls: 7,
        vars: 11,
        consts: [[1, "min-vh-100"], ["class", "loader-spinner", 4, "ngIf"], [4, "ngIf"], [3, "footerMenus"], [1, "loader-spinner"], ["mode", "indeterminate", 1, "mx-auto", 2, "top", "36%"], [1, "intro", "bangla-font"], [1, "mb-0"], [1, "mx-3", "mb-2", "header-title"], [1, "mx-3", "header-title"], [1, "main-top-padding"], ["class", "list-unstyled", 4, "ngIf"], [1, "list-unstyled"], [1, "mb-3", "mx-2", "hadith-box", 2, "position", "relative"], [1, "card", "border-radius-none"], [1, "card-header", "bangla-font"], [1, "mb-2", "book-title"], ["class", "hadith-no-field", 4, "ngIf", "ngIfElse"], ["otherBook", ""], [1, "card-body", "hadith-card-body", "pt-2"], [1, "text-justify"], ["class", "row", 3, "class", 4, "ngIf"], [3, "ngClass", "class", 4, "ngIf"], ["class", "bangla-font mt-3 hadith-card-footer pt-2", 3, "class", 4, "ngIf"], [1, "hadith-no-field"], [1, "me-2"], [1, "hadith-no-field", "me-2"], ["class", "hadith-no-field me-2", 4, "ngIf"], [1, "row"], [1, "col-md-6", "bangla-font", "order-md-1", "order-2", "mb-3", "mb-md-0", 3, "ngClass"], [3, "ngClass"], [3, "innerHTML"], [3, "ngClass", "innerHTML"], [1, "col-md-6", "order-md-2", "order-1", 2, "text-align", "right"], [1, "hadith-arabic-title", "arabic-font"], [3, "innerHTML", 4, "ngIf"], [1, "pb-3", "pb-lg-0", "arabic-font", 3, "innerHTML"], [1, "bangla-font", "mt-3"], ["class", "font-weight-bold", 4, "ngIf"], [1, "font-weight-bold"], ["class", "mt-3 font-weight-bold", 4, "ngIf"], [1, "mt-3", "font-weight-bold"], [1, "bangla-font", "mt-3", "hadith-card-footer", "pt-2"], ["class", "card-footer-item me-3", 4, "ngIf", "ngIfElse"], ["hadithTypeTitle", ""], ["class", "card-footer-item me-3", 3, "class", 4, "ngIf"], [1, "card-footer-item", "me-3"], ["height", "48", "width", "48", 1, "hadith-small-img", "me-1", 3, "ngSrc"], [1, "text-decoration-none"], ["class", "card-footer-item me-3", 4, "ngIf"], ["height", "48", "width", "48", "alt", "", 1, "hadith-small-img", "me-1", 3, "ngSrc"], ["height", "48", "width", "48", "alt", "", 1, "hadith-small-img", "me-1", "mb-1", 3, "ngSrc"], [4, "ngFor", "ngForOf"], [1, "text-center", "bangla-font", 2, "margin-top", "20vh"]],
        template: function SingleHadithMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SingleHadithMobileComponent_div_2_Template, 2, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SingleHadithMobileComponent_div_4_Template, 15, 24, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-footer", 3);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 7, ctx.progressbarService.showProgressBar));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 9, ctx.progressbarService.showProgressBar));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgOptimizedImage, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_2__.ThemePipe],
        styles: [".hadith-no-field[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 4px 6px;\n  margin: 4px 0px;\n  border: 1px solid #1d673a;\n  border-radius: 4px;\n  font-weight: bold;\n  display: inline-block;\n}\n\n.hadith-card-header-item[_ngcontent-%COMP%] {\n  margin: 6px 0px 0px 2px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.hadith-small-img[_ngcontent-%COMP%]:hover, .hadith-small-img.active[_ngcontent-%COMP%] {\n  filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(223deg) brightness(97%)\n    contrast(107%);\n  transition: all 0.4s;\n}\n\n.hadith-card-footer[_ngcontent-%COMP%] {\n  border-top: 1px solid #006b434a !important;\n}\n\n.hadith-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.5rem;\n}\n\n.hadith-title-ur[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 2.75rem;\n}\n\n.hadith-arabic-title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.card-footer-item[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 2px;\n}\n\n.book-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.main-top-padding[_ngcontent-%COMP%] {\n  padding-top: 90px !important;\n  padding-bottom: 45px !important;\n}\n\n.intro[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9zaW5nbGUtaGFkaXRoLW1vYmlsZS9zaW5nbGUtaGFkaXRoLW1vYmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTtrQkFDZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIuaGFkaXRoLW5vLWZpZWxkIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIG1hcmdpbjogNHB4IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzFkNjczYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaGFkaXRoLWNhcmQtaGVhZGVyLWl0ZW0ge1xuICBtYXJnaW46IDZweCAwcHggMHB4IDJweDtcbn1cblxuLmhhZGl0aC1zbWFsbC1pbWcge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uaGFkaXRoLXNtYWxsLWltZzpob3Zlcixcbi5oYWRpdGgtc21hbGwtaW1nLmFjdGl2ZSB7XG4gIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjIzZGVnKSBicmlnaHRuZXNzKDk3JSlcbiAgICBjb250cmFzdCgxMDclKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5oYWRpdGgtY2FyZC1mb290ZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwNmI0MzRhICFpbXBvcnRhbnQ7XG59XG5cbi5oYWRpdGgtdGl0bGUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLmhhZGl0aC10aXRsZS11ciB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XG59XG5cbi5oYWRpdGgtYXJhYmljLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5jYXJkLWZvb3Rlci1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggMnB4O1xufVxuXG4uYm9vay10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ubWFpbi10b3AtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA0NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnRybyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return SingleHadithMobileComponent;
})();

/***/ }),

/***/ 314:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/title-mobile/title-mobile.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleMobileComponent: () => (/* binding */ TitleMobileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/common/indexeddb.service */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 2223);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/footer/footer.component */ 4677);
/* harmony import */ var _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/theme.pipe */ 4635);











function TitleMobileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.book.title_en);
  }
}
function TitleMobileComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 3, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.shorten(ctx_r1.chapter.title));
  }
}
const _c0 = function (a1, a3, a5) {
  return ["/mobile-book/", a1, "chapter", a3, "title", a5, "hadiths"];
};
function TitleMobileComponent_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 21)(4, "a", 22)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 23)(8, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "subtitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const title_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 11, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](17, _c0, ctx_r3.book.id, ctx_r3.chapterId, title_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 13, "background_title_color"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r3.helperService.addHtmlTag(title_r4.title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 15, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u09AE\u09CB\u099F \u09B9\u09BE\u09A6\u09C0\u09B8 - ", ctx_r3.helperService.changeEnglishToBengali(title_r4.total_hadith.toString()), " \u099F\u09BF, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u09AC\u09CD\u09AF\u09BE\u09AA\u09CD\u09A4\u09BF (", ctx_r3.helperService.changeEnglishToBengali(title_r4.range_start.toString()), " - ", ctx_r3.helperService.changeEnglishToBengali(title_r4.range_end.toString()), ")");
  }
}
function TitleMobileComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "form", 10)(2, "div", 11)(3, "div", 12)(4, "ng-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TitleMobileComponent_div_8_Template_ng_select_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.bookChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 14)(7, "ng-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TitleMobileComponent_div_8_Template_ng_select_change_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.chapterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "theme");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 16)(10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TitleMobileComponent_div_8_div_11_Template, 17, 21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r2.filterForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 10, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r2.books)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 12, "background_title_color_light"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r2.chapters)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.titles);
  }
}
let TitleMobileComponent = /*#__PURE__*/(() => {
  class TitleMobileComponent {
    constructor(hadithService, route, router, dialog, helperService, formBuilder, indexeddbService) {
      this.hadithService = hadithService;
      this.route = route;
      this.router = router;
      this.dialog = dialog;
      this.helperService = helperService;
      this.formBuilder = formBuilder;
      this.indexeddbService = indexeddbService;
      this.page = 1;
      this.footerMenus = [{
        id: 1,
        title: 'হোম',
        img: 'home.svg',
        slug: 'home',
        link: '/'
      }];
      this.createForm();
    }
    createForm() {
      this.filterForm = this.formBuilder.group({
        book: [''],
        chapter: ['']
      });
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.bookId = params.book_id;
        this.chapterId = params.chapter_id;
        this.getBookAndChapters();
        this.getBooks();
      });
    }
    getTitlesByBookAndChapter(book, chapterId) {
      this.indexeddbService.getAllByIndex(book.slug + 'Titles', 'chapter_id', parseInt(String(chapterId), 0)).subscribe(item => {
        this.titles = item.sort(this.helperService.sortBy('sequence'));
      });
    }
    getBookAndChapters() {
      if (this.bookId) {
        this.indexeddbService.getByIndex('books', 'id', parseInt(String(this.bookId), 0)).subscribe(item => {
          this.book = item;
          if (this.footerMenus.length > 1) {
            this.footerMenus.map(item2 => {
              if (item2.slug === 'search') {
                return {
                  ...item2,
                  book: this.book
                };
              } else if (item2.slug === 'back') {
                return {
                  ...item2,
                  link: '/mobile-book/' + this.book.id + '/chapters'
                };
              } else {
                return item2;
              }
            });
          } else {
            this.footerMenus.push({
              id: 4,
              title: 'খুঁজুন',
              img: 'search.svg',
              slug: 'search',
              link: '',
              book: this.book
            }, {
              id: 3,
              title: 'পিছনে',
              img: 'back.svg',
              slug: 'back',
              link: '/mobile-book/' + this.book.id + '/chapters'
            });
          }
          this.filterForm.controls.book.patchValue(this.book.id);
          if (this.book) {
            // tslint:disable-next-line:max-line-length
            this.indexeddbService.getAllByIndex(this.book.slug + 'Chapters', 'book_id', parseInt(String(this.bookId), 0)).subscribe(value => {
              this.chapters = value.sort(this.helperService.sortBy('sequence'));
              this.chapterId = this.chapterId || this.chapters[0].id;
              this.getChapter(this.book, this.chapterId);
            });
          }
        });
      }
    }
    getChapter(book, chapterId) {
      this.indexeddbService.getByIndex(book.slug + 'Chapters', 'id', parseInt(String(chapterId), 0)).subscribe(item => {
        this.chapter = item;
        this.filterForm.controls.chapter.patchValue(this.chapter.id);
        this.getTitlesByBookAndChapter(book, chapterId);
      });
    }
    getBooks() {
      this.indexeddbService.getAll('books').subscribe(item => {
        this.books = item.sort(this.helperService.sortBy('sequence')).filter(value => {
          return value.downloaded;
        });
      });
    }
    bookChange() {
      this.hadithService.getChaptersByBookId(this.filterForm.value.book).subscribe(res => {
        const chapterId = res.data.rows[0]?.id;
        this.router.navigate([`/mobile-book/${this.filterForm.value.book}/chapter/${chapterId}/titles`], {
          queryParams: {
            page: 1
          },
          queryParamsHandling: 'merge'
        });
      });
    }
    chapterChange() {
      this.router.navigate([`/mobile-book/${this.filterForm.value.book}/chapter/${this.filterForm.value.chapter}/titles`], {
        queryParams: {
          page: 1
        },
        queryParamsHandling: 'merge'
      });
    }
    shorten(text) {
      const returnText = text.slice(0, 30);
      if (returnText.length === 30) {
        return returnText + '...';
      } else {
        return returnText;
      }
    }
    static {
      this.ɵfac = function TitleMobileComponent_Factory(t) {
        return new (t || TitleMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HadithService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_common_indexeddb_service__WEBPACK_IMPORTED_MODULE_1__.IndexeddbService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: TitleMobileComponent,
        selectors: [["app-title-mobile"]],
        decls: 10,
        vars: 12,
        consts: [[1, "min-vh-100"], [1, "intro", "bangla-font"], ["class", "mx-3 mb-2 header-title", 3, "class", 4, "ngIf"], ["class", "mx-3 header-title", 3, "class", 4, "ngIf"], [1, "main-top-padding"], ["class", "bangla-font", 4, "ngIf"], [3, "footerMenus"], [1, "mx-3", "mb-2", "header-title"], [1, "mx-3", "header-title"], [1, "bangla-font"], [1, "container", "mb-3", 3, "formGroup"], [1, "row"], [1, "col-md-6"], ["bindLabel", "title", "bindValue", "id", "placeholder", "\u09B9\u09BE\u09A6\u09C0\u09B8\u09C7\u09B0 \u0995\u09BF\u09A4\u09BE\u09AC", "clearAllText", "Clear", "formControlName", "book", "appendTo", "body", "dropdownPosition", "bottom", 1, "bangla-font", "pb-0", 3, "items", "clearable", "change"], [1, "col-md-6", "mt-2", "mt-md-0"], ["bindLabel", "title", "bindValue", "id", "placeholder", "\u0985\u09A7\u09CD\u09AF\u09BE\u09DF", "clearAllText", "Clear", "formControlName", "chapter", "appendTo", "body", "dropdownPosition", "bottom", 1, "bangla-font", "pb-0", 3, "items", "clearable", "change"], [1, "container", "px-2"], [1, "row", "px-0", "mx-0"], ["class", "list-group border-radius-none col-md-6", 4, "ngFor", "ngForOf"], [1, "list-group", "border-radius-none", "col-md-6"], [1, "list-group-item", "mb-3", "shadow-sm", "tag-card", "d-flex", "align-items-center"], [1, "d-flex", "align-items-center", "bangla-font", "justify-content-between", "example-full-width"], [1, "text-decoration-none", "d-flex", "align-items-center", "example-full-width", 3, "routerLink"], [1, "align-middle", "text-justify", "title-bn", "mb-2"], [1, "me-2", "mb-1"], [3, "innerHTML"], [1, "mb-0", "d-block", "text-start"], [1, "ms-1"]],
        template: function TitleMobileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "theme");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TitleMobileComponent_div_5_Template, 3, 5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TitleMobileComponent_div_6_Template, 3, 5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TitleMobileComponent_div_8_Template, 12, 14, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "app-footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 8, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, "background_color"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.book == null ? null : ctx.book.title_en);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chapter == null ? null : ctx.chapter.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.titles && ctx.book);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("footerMenus", ctx.footerMenus);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _pipes_theme_pipe__WEBPACK_IMPORTED_MODULE_3__.ThemePipe],
        styles: [".intro {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.main-top-padding {\n  padding-top: 90px !important;\n  padding-bottom: 62px !important;\n}\n\n.range-image {\n  height: 25px;\n  width: 25px;\n}\n\n.title-bn {\n  font-size: 1.1rem;\n  line-height: 1.6rem;\n  /*white-space: normal;*/\n  /*max-height: 2.8em;*/\n  /*overflow: hidden;*/\n  width: 100%;\n  /*text-overflow: ellipsis;*/\n}\n\n.tag-card {\n  min-height: 100px;\n}\n\n.list-group:nth-child(2n) {\n  padding-right: 0px !important;\n}\n\n@media (max-width: 768px) {\n  .list-group {\n    padding-right: 0px !important;\n  }\n  .title-bn {\n    font-size: 1.05rem;\n    /*max-height: 4.4em;*/\n  }\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.header-title {\n  font-size: 1.1rem;\n}\n\n.total-text {\n  font-size: 1rem;\n}\n\n.list-group-item {\n  padding-right: 8px !important;\n  color: unset;\n  background-color: unset;\n  border: unset;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90aXRsZS1tb2JpbGUvdGl0bGUtbW9iaWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLmludHJvIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLm1haW4tdG9wLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogOTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNjJweCAhaW1wb3J0YW50O1xufVxuXG4ucmFuZ2UtaW1hZ2Uge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4udGl0bGUtYm4ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcbiAgLyp3aGl0ZS1zcGFjZTogbm9ybWFsOyovXG4gIC8qbWF4LWhlaWdodDogMi44ZW07Ki9cbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gIHdpZHRoOiAxMDAlO1xuICAvKnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyovXG59XG5cbi50YWctY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4ubGlzdC1ncm91cDpudGgtY2hpbGQoMm4pIHtcbiAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubGlzdC1ncm91cCB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRpdGxlLWJuIHtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgLyptYXgtaGVpZ2h0OiA0LjRlbTsqL1xuICB9XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4udG90YWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweCAhaW1wb3J0YW50O1xuICBjb2xvcjogdW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBib3JkZXI6IHVuc2V0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
        encapsulation: 2
      });
    }
  }
  return TitleMobileComponent;
})();

/***/ }),

/***/ 4359:
/*!*************************************************!*\
  !*** ./src/app/intercepters/api-interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiInterceptor: () => (/* binding */ ApiInterceptor)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
// const WEATHER_API_URL = env.weatherApiUrl;
const NORMAL_URL = '';
let ApiInterceptor = /*#__PURE__*/(() => {
  class ApiInterceptor {
    constructor() {}
    intercept(request, next) {
      const apiUrl = `${API_URL}${request.url}`;
      // if (/openweathermap/.test(request.url)) {
      //     let cleanUrl = request.url.replace('openweathermap&', '');
      //     apiUrl = `${WEATHER_API_URL}${cleanUrl}`;
      // }
      const normalUrl = `${NORMAL_URL}${request.url}`;
      const skipIntercept = request.headers.has('skip');
      if (skipIntercept) {
        request = request.clone({
          url: normalUrl
        });
      } else {
        request = request.clone({
          url: apiUrl
        });
      }
      return next.handle(request);
    }
    static {
      this.ɵfac = function ApiInterceptor_Factory(t) {
        return new (t || ApiInterceptor)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiInterceptor,
        factory: ApiInterceptor.ɵfac
      });
    }
  }
  return ApiInterceptor;
})();

/***/ }),

/***/ 5229:
/*!***************************************!*\
  !*** ./src/app/intercepters/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   httpInterceptorProviders: () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_intercepters_api_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/intercepters/api-interceptor */ 4359);
/* harmony import */ var _progress_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-interceptor */ 1164);



/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _app_intercepters_api_interceptor__WEBPACK_IMPORTED_MODULE_0__.ApiInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _progress_interceptor__WEBPACK_IMPORTED_MODULE_1__.ProgressInterceptor,
  multi: true
}];

/***/ }),

/***/ 1164:
/*!******************************************************!*\
  !*** ./src/app/intercepters/progress-interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressInterceptor: () => (/* binding */ ProgressInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);





let ProgressInterceptor = /*#__PURE__*/(() => {
  class ProgressInterceptor {
    constructor(progressbarService) {
      this.progressbarService = progressbarService;
      this.requestCount = 0;
    }
    intercept(request, next) {
      if (this.requestCount === 0) {
        this.progressbarService.show();
      }
      this.requestCount++;
      return next.handle(request).pipe(
      // @ts-ignore
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.progressbarService.hide();
        }
        return event;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error, caught) => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(this.errorHandler(error, caught));
      }));
    }
    errorHandler(error, caught) {
      if (error) {
        this.progressbarService.hide();
      }
      return error;
    }
    static {
      this.ɵfac = function ProgressInterceptor_Factory(t) {
        return new (t || ProgressInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ProgressbarService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
        token: ProgressInterceptor,
        factory: ProgressInterceptor.ɵfac
      });
    }
  }
  return ProgressInterceptor;
})();

/***/ }),

/***/ 8438:
/*!********************************************!*\
  !*** ./src/app/modules/material-module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
// import {A11yModule} from '@angular/cdk/a11y';
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {PortalModule} from '@angular/cdk/portal';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatCardModule} from '@angular/material/card';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatStepperModule} from '@angular/material/stepper';
// import {MatDatepickerModule} from '@angular/material/datepicker';

// import {MatDividerModule} from '@angular/material/divider';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatGridListModule} from '@angular/material/grid-list';


// import {MatListModule} from '@angular/material/list';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';


// import {MatRadioModule} from '@angular/material/radio';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';

// import {MatSortModule} from '@angular/material/sort';
// import {MatTableModule} from '@angular/material/table';


// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import { MatTreeModule } from '@angular/material/tree';
// import { ScrollingModule } from '@angular/cdk/scrolling';
let MaterialModule = /*#__PURE__*/(() => {
  class MaterialModule {
    static {
      this.ɵfac = function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        // MatButtonToggleModule,
        // MatCardModule,
        // MatCheckboxModule,
        // MatChipsModule,
        // MatStepperModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule,
        // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        // MatRadioModule,
        // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        // MatSortModule,
        // MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule]
      });
    }
  }
  return MaterialModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
    exports: [
    // A11yModule,
    // ClipboardModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    // DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    // MatBottomSheetModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatStepperModule,
    // MatDatepickerModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule]
  });
})();

/***/ }),

/***/ 6578:
/*!****************************************!*\
  !*** ./src/app/pipes/safeHtml.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);


let SafeHtmlPipe = /*#__PURE__*/(() => {
  class SafeHtmlPipe {
    constructor(sanitizer) {
      this.sanitizer = sanitizer;
    }
    transform(html) {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }
    static {
      this.ɵfac = function SafeHtmlPipe_Factory(t) {
        return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
      };
    }
    static {
      this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safeHtml",
        type: SafeHtmlPipe,
        pure: true
      });
    }
  }
  return SafeHtmlPipe;
})();

/***/ }),

/***/ 4635:
/*!*************************************!*\
  !*** ./src/app/pipes/theme.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemePipe: () => (/* binding */ ThemePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services */ 8379);


let ThemePipe = /*#__PURE__*/(() => {
  class ThemePipe {
    constructor(themeService) {
      this.themeService = themeService;
      this.theme = {
        status_bar_color: 'status_bar_color',
        status_bar_color_transparent: 'status_bar_color_transparent',
        navigation_color: 'navigation_color',
        navigation_color_transparent: 'navigation_color_transparent',
        accent_color: 'accent_color',
        menu_separator_color: 'menu_separator_color',
        background_color: 'background_color',
        background_color_transparent: 'background_color_transparent',
        background_color_selected: 'home_menu_color_bold',
        background_title_color: 'background_title_color',
        background_title_color_bold: 'background_title_color_bold',
        background_title_color_light: 'background_title_color_light',
        toolbar_title_color: 'toolbar_title_color',
        toolbar_title_color_selector: 'toolbar_title_color_selector',
        toolbar_subtitle_color: 'toolbar_subtitle_color',
        dropdown: 'dropdown'
      };
    }
    transform(value, type) {
      if (type === 'svg') {
        return this.generateSVGName(value, this.themeService.getCurrentTheme);
      } else {
        return this.generateTheme(value, this.themeService.getCurrentTheme);
      }
    }
    generateTheme(value, themeName) {
      if (this.theme.hasOwnProperty(value)) {
        return this.theme[value] + '_' + themeName;
      } else {
        return value;
      }
    }
    generateSVGName(value, theme) {
      switch (theme) {
        case 'light':
          return value.replace('.svg', '_dark.svg');
        case 'gray':
          return value.replace('.svg', '_dark.svg');
        case 'green_light':
          return value.replace('.svg', '_dark.svg');
        default:
          return value;
      }
    }
    static {
      this.ɵfac = function ThemePipe_Factory(t) {
        return new (t || ThemePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService, 16));
      };
    }
    static {
      this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "theme",
        type: ThemePipe,
        pure: true
      });
    }
  }
  return ThemePipe;
})();

/***/ }),

/***/ 6007:
/*!************************************************!*\
  !*** ./src/app/services/api/hadith.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HadithService: () => (/* binding */ HadithService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let HadithService = /*#__PURE__*/(() => {
  class HadithService {
    constructor(http) {
      this.http = http;
    }
    getHadith(hadithId) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithApiUrl}hadith/${hadithId}`, {
        headers: httpHeaders
      });
    }
    getBooks() {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithApiUrl}books?show=all&order=sequence&direction=asc`, {
        headers: httpHeaders
      });
    }
    getDownloadBooks() {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithDownloadUrl}/books?key=263fjuU3rkQ`, {
        headers: httpHeaders
      });
    }
    downloadChaptersBySlug(slug) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithDownloadUrl}chapters/${slug}?key=263fjuU3rkQ`, {
        headers: httpHeaders
      });
    }
    downloadTitlesBySlug(slug) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithDownloadUrl}titles/${slug}?key=263fjuU3rkQ`, {
        headers: httpHeaders
      });
    }
    downloadHadithsBySlug(slug) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithDownloadUrl}hadiths/${slug}?key=263fjuU3rkQ`, {
        headers: httpHeaders
      });
    }
    // tslint:disable-next-line:typedef
    getChaptersByBookId(bookId) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      // tslint:disable-next-line:max-line-length
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithApiUrl}book/${bookId}/chapters?show=all&order=sequence`, {
        headers: httpHeaders
      });
    }
    getAllTitlesByBookAndChapter(bookId, chapterId) {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        skip: 'true'
      });
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hadithApiUrl}book/${bookId}/chapter/${chapterId}/titles`, {
        headers: httpHeaders
      });
    }
    static {
      this.ɵfac = function HadithService_Factory(t) {
        return new (t || HadithService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: HadithService,
        factory: HadithService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HadithService;
})();

/***/ }),

/***/ 7992:
/*!***************************************************!*\
  !*** ./src/app/services/common/helper.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelperService: () => (/* binding */ HelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 9203);



let HelperService = /*#__PURE__*/(() => {
  class HelperService {
    constructor(dialog, snackBarService) {
      this.dialog = dialog;
      this.snackBarService = snackBarService;
    }
    static buildQueryParams(options) {
      return Object.entries(options).map(([key, val]) => {
        if (val) {
          return `${key}=${val}`;
        }
      }).filter(Boolean).join('&');
    }
    static getSearchParams(form, options, sort) {
      const page = options.page ? options.page : 1;
      // @ts-ignore
      form.get('page').patchValue(page, {
        emitEvent: false
      });
      if (options.order) {
        // @ts-ignore
        form.get('order').patchValue(options.order, {
          emitEvent: false
        });
      }
      if (options.direction) {
        // @ts-ignore
        form.get('direction').patchValue(options.direction, {
          emitEvent: false
        });
      }
      if (sort) {
        const order = sort.direction ? sort.active : '';
        const direction = sort.direction ? sort.direction : '';
        // @ts-ignore
        form.get('order').patchValue(order, {
          emitEvent: false
        });
        // @ts-ignore
        form.get('direction').patchValue(direction, {
          emitEvent: false
        });
      }
      // @ts-ignore
      return {
        ...options,
        ...form.value
      };
    }
    static shortString(str, length = 10) {
      const cleanStr = this.newLineToSpace(this.removeHtmlTag(str));
      const trimmedStr = cleanStr.substr(0, length);
      if (cleanStr.length > trimmedStr.length) {
        return trimmedStr.substr(0, Math.min(trimmedStr.length, trimmedStr.lastIndexOf(' ')));
      }
      return trimmedStr;
    }
    static removeHtmlTag(str) {
      const htmlRemoved = str.trim().replace(/<\/?[^>]+(>|$)/g, '');
      return htmlRemoved.replace(/\&nbsp;/g, '');
    }
    static newLineToBreak(str) {
      return str.replace(/\n/g, '<br />');
    }
    static newLineToSpace(str) {
      return str.replace(/\n/g, ' ');
    }
    static isEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    changeBengaliToEnglish(str) {
      const finalEnlishToBanglaNumber = {
        '০': 0,
        '১': 1,
        '২': 2,
        '৩': 3,
        '৪': 4,
        '৫': 5,
        '৬': 6,
        '৭': 7,
        '৮': 8,
        '৯': 9
      };
      let retStr = str;
      // tslint:disable-next-line:forin
      for (const x in finalEnlishToBanglaNumber) {
        retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
      }
      return retStr;
    }
    changeEnglishToBengali(str) {
      if (!str) {
        return '';
      }
      const finalEnlishToBanglaNumber = {
        0: '০',
        1: '১',
        2: '২',
        3: '৩',
        4: '৪',
        5: '৫',
        6: '৬',
        7: '৭',
        8: '৮',
        9: '৯'
      };
      let retStr = str;
      // tslint:disable-next-line:forin
      for (const x in finalEnlishToBanglaNumber) {
        // @ts-ignore
        retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
      }
      return retStr;
    }
    changeEnglishToArabic(str) {
      const finalEnlishToArabicNumber = {
        0: '۰',
        1: '١',
        2: '٢',
        3: '٣',
        4: '٤',
        5: '٥',
        6: '٦',
        7: '٧',
        8: '٨',
        9: '٩'
      };
      let retStr = str;
      // tslint:disable-next-line:forin
      for (const x in finalEnlishToArabicNumber) {
        // @ts-ignore
        retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToArabicNumber[x]);
      }
      return retStr;
    }
    newLineAdder(str) {
      if (str) {
        return str.replace(/\n/g, '<br />');
      }
      return '';
    }
    addAnchorTag(str) {
      let match = str.match(/(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);
      let final = str;
      if (match) {
        match.map(url => {
          final = final.replace(url, '<a href="' + url + '" target="_BLANK">' + url + '</a>');
        });
      }
      return final;
    }
    newLine(str) {
      return str.replace(/<br>/g, '\n');
    }
    // tslint:disable-next-line:typedef
    addHtmlTag(str) {
      if (str) {
        const htmlRemoved = str.replace(/&lt;p&gt;/g, '<p>');
        return htmlRemoved.replace(/&lt;\/p&gt;/g, '</p>').replace(/&amp;#39;/g, '’').replace(/&amp;rsquo;/g, '’').replace(/&amp;lsquo;/g, '‘').replace(/&amp;mdash;/g, '-').replace(/&amp;zwnj;/g, '&zwnj;').replace(/&amp;quot;/g, '″').replace(/&lt;hr \/&gt;/g, '<hr/>').replace(/&lt;br \/&gt;/g, '<br />').replace(/&lt;strong&gt;/g, '<strong>').replace(/&lt;\/strong&gt;/g, '</strong>').replace(/&lt;p dir=&quot;rtl&quot;&gt;/g, '<p>').replace(/&#039;/g, '’').replace(/&rsquo;/g, '’').replace(/&rlm;/g, '').replace(/&quot;/g, '"').replace(/&amp;ldquo;/g, '“').replace(/&amp;rdquo;/g, '”').replace(/&ndash;/g, '–').replace(/\(ইফাঃ\)/g, '').replace(/-/g, '&#8211').replace(/&zwnj;/g, '');
      } else {
        return '';
      }
    }
    sortBy(field) {
      return (a, b) => {
        // @ts-ignore
        return (a[field] > b[field]) - (a[field] < b[field]);
      };
    }
    static {
      this.ɵfac = function HelperService_Factory(t) {
        return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackBarService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: HelperService,
        factory: HelperService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return HelperService;
})();

/***/ }),

/***/ 123:
/*!******************************************************!*\
  !*** ./src/app/services/common/indexeddb.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndexeddbService: () => (/* binding */ IndexeddbService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fuse.js */ 7148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ 1307);




let IndexeddbService = /*#__PURE__*/(() => {
  class IndexeddbService {
    constructor(dbService) {
      this.dbService = dbService;
      this.searchResult = [];
      this.result = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.searchResult);
      this.resultObservable = this.result.asObservable();
      this.bookDownload = {
        book: '',
        downloaded: false
      };
      this.bookDownloaded = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.bookDownload);
      this.bookDownloadedObservable = this.bookDownloaded.asObservable();
    }
    add(storeName, object) {
      return this.dbService.add(storeName, object);
    }
    bulkAdd(storeName, array) {
      return this.dbService.bulkAdd(storeName, array);
    }
    bulkDelete(storeName, keys) {
      return this.dbService.bulkDelete(storeName, keys);
    }
    bulkGet(storeName, keys) {
      return this.dbService.bulkGet(storeName, keys);
    }
    update(storeName, value) {
      return this.dbService.update(storeName, value);
    }
    getByKey(storeName, key) {
      return this.dbService.getByKey(storeName, key);
    }
    getAll(storeName) {
      return this.dbService.getAll(storeName);
    }
    getByIndex(storeName, indexName, key) {
      return this.dbService.getByIndex(storeName, indexName, key);
    }
    count(storeName, keyRange) {
      return this.dbService.count(storeName);
    }
    deleteObjectStore(storeName) {
      return this.dbService.deleteObjectStore(storeName);
    }
    delete(storeName, key) {
      return this.dbService.delete(storeName, key);
    }
    deleteByKey(storeName, key) {
      return this.dbService.deleteByKey(storeName, key);
    }
    clear(storeName) {
      return this.dbService.clear(storeName);
    }
    deleteDatabase() {
      return this.dbService.deleteDatabase();
    }
    openCursor(storeName, keyRange) {
      // return this.dbService.openCursor(storeName)
      this.dbService.openCursor(storeName).subscribe(evt => {
        // @ts-ignore
        const cursor = evt.target.result;
        if (cursor) {
          // @ts-ignore
          console.log(cursor.value);
          cursor.continue();
        } else {
          console.log('end of cursor');
        }
      });
    }
    // openCursorByIndex(storeName: string, indexName: string,q?: string, keyRange?: IDBKeyRange, mode?: DBMode): any {
    //     let results: any[] = [];
    //     this.dbService.openCursorByIndex(storeName, indexName, IDBKeyRange.lowerBound(0)).subscribe((evt) => {
    //         // @ts-ignore
    //         let cursor = evt.target?.result;
    //         if(cursor) {
    //             if(cursor.value) {
    //                 let dua = cursor.value as Dua;
    //                 let regexp = new RegExp(`^${q}`, 'i');
    // tslint:disable-next-line:max-line-length
    //                 if(regexp.test(dua.title) || regexp.test(dua.dua) || regexp.test(dua.duaArabic) || regexp.test(dua.transliteration) || regexp.test(dua.meaning) || regexp.test(dua.source)) {
    //                     results.push(dua);
    //                     this.setSearchResult(results);
    //                 }
    //             }
    //             cursor.continue();
    //         } else {
    //             console.log('Entries all displayed.');
    //         }
    //     });
    //     return results
    // }
    getAllByIndex(storeName, indexName, keyRange) {
      return this.dbService.getAllByIndex(storeName, indexName, IDBKeyRange.only(keyRange));
    }
    fuseHadithSearch(values, q, searchOptions) {
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_1__["default"](values, searchOptions);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.highlight(fuse.search(q).filter(item => {
        // console.log(item);
        if (item.score) {
          return item.score < 0.3;
        } else {
          return false;
        }
      })));
      // return of(this.highlight(fuse.search(q)));
    }
    // tslint:disable-next-line:max-line-length
    createObjectStore(storeSchema, migrationFactory) {
      this.dbService.createObjectStore(storeSchema);
    }
    setSearchResult(result) {
      this.result.next(result);
    }
    get getCurrentTheme() {
      return this.result.value;
    }
    setDownloadedValue(data) {
      this.bookDownloaded.next(data);
    }
    highlight(fuseSearchResult, highlightClassName = 'highlight') {
      const set = (obj, path, value) => {
        let i;
        path = path.split('.');
        for (i = 0; i < path.length - 1; i++) {
          obj = obj[path[i]];
        }
        obj[path[i]] = value;
      };
      const generateHighlightedText = (text, matches) => {
        let result = '';
        let pair = matches.shift();
        // const sub = text.substring(pair[0], pair[1]);
        // if (sub.length === 2) {
        //   console.log(sub);
        // }
        for (let i = 0; i < text.length; i++) {
          const char = text.charAt(i);
          if (pair && i === pair[0]) {
            result += `<span class="${highlightClassName}">`;
          }
          result += char;
          if (pair && i === pair[1]) {
            result += '</span>';
            pair = matches.shift();
          }
        }
        return result;
      };
      return fuseSearchResult.map(result => {
        const item = {
          ...result.item
        };
        result.matches.forEach(match => {
          const text = match.value;
          const matches = match.indices.filter(pair => pair[1] - pair[0] > 2);
          set(item, match.key, generateHighlightedText(text, matches));
        });
        return item;
      });
    }
    static {
      this.ɵfac = function IndexeddbService_Factory(t) {
        return new (t || IndexeddbService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__.NgxIndexedDBService));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: IndexeddbService,
        factory: IndexeddbService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return IndexeddbService;
})();

/***/ }),

/***/ 6663:
/*!**********************************************************!*\
  !*** ./src/app/services/common/local-storage.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorageService: () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let LocalStorageService = /*#__PURE__*/(() => {
  class LocalStorageService {
    constructor() {}
    static saveItem(key, obj) {
      localStorage.setItem(key, JSON.stringify(obj));
    }
    static getItem(key) {
      const obj = localStorage.getItem(key);
      const storedItem = obj ? JSON.parse(obj) : null;
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(storedItem);
    }
    static removeItem(key) {
      localStorage.removeItem(key);
    }
    static clear() {
      localStorage.clear();
    }
    static {
      this.ɵfac = function LocalStorageService_Factory(t) {
        return new (t || LocalStorageService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: LocalStorageService,
        factory: LocalStorageService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return LocalStorageService;
})();

/***/ }),

/***/ 7972:
/*!********************************************************!*\
  !*** ./src/app/services/common/progressbar.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressbarService: () => (/* binding */ ProgressbarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let ProgressbarService = /*#__PURE__*/(() => {
  class ProgressbarService {
    constructor() {
      this.showProgressBar = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    // tslint:disable-next-line:typedef
    get getProgressBar() {
      return this.showProgressBar.value;
    }
    show() {
      this.showProgressBar.next(true);
    }
    hide() {
      this.showProgressBar.next(false);
    }
    static {
      this.ɵfac = function ProgressbarService_Factory(t) {
        return new (t || ProgressbarService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProgressbarService,
        factory: ProgressbarService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ProgressbarService;
})();

/***/ }),

/***/ 9203:
/*!*****************************************************!*\
  !*** ./src/app/services/common/snackbar.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackBarService: () => (/* binding */ SnackBarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


let SnackBarService = /*#__PURE__*/(() => {
  class SnackBarService {
    constructor(matSnackBar) {
      this.matSnackBar = matSnackBar;
      this.config = {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      };
    }
    success(msg) {
      this.config['panelClass'] = ['snackbar-success'];
      this.matSnackBar.open(msg, '', this.config);
    }
    warn(msg) {
      this.config['panelClass'] = ['snackbar-warn'];
      this.matSnackBar.open(msg, '', this.config);
    }
    static {
      this.ɵfac = function SnackBarService_Factory(t) {
        return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SnackBarService,
        factory: SnackBarService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return SnackBarService;
})();

/***/ }),

/***/ 17:
/*!**************************************************!*\
  !*** ./src/app/services/common/theme.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let ThemeService = /*#__PURE__*/(() => {
  class ThemeService {
    constructor() {
      this.currentThemeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('light');
      this.currentArabicTextSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('true');
      const getThemeFromLocalStorage = localStorage.getItem('theme');
      if (getThemeFromLocalStorage) {
        this.currentThemeSubject.next(getThemeFromLocalStorage);
      }
      const getArabicTextFromLocalStorage = localStorage.getItem('arText');
      if (getArabicTextFromLocalStorage) {
        this.currentArabicTextSubject.next(getArabicTextFromLocalStorage);
      }
    }
    setCurrentTheme(theme) {
      this.currentThemeSubject.next(theme);
      localStorage.setItem('theme', theme);
    }
    get getCurrentTheme() {
      return this.currentThemeSubject.value;
    }
    setCurrentArabicText(arText) {
      this.currentArabicTextSubject.next(arText);
      localStorage.setItem('arText', arText);
    }
    get getCurrentArabicText() {
      return this.currentArabicTextSubject.value;
    }
    static {
      this.ɵfac = function ThemeService_Factory(t) {
        return new (t || ThemeService)();
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ThemeService,
        factory: ThemeService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ThemeService;
})();

/***/ }),

/***/ 8379:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HadithService: () => (/* reexport safe */ _api_hadith_service__WEBPACK_IMPORTED_MODULE_6__.HadithService),
/* harmony export */   HelperService: () => (/* reexport safe */ _common_helper_service__WEBPACK_IMPORTED_MODULE_0__.HelperService),
/* harmony export */   IndexeddbService: () => (/* reexport safe */ _common_indexeddb_service__WEBPACK_IMPORTED_MODULE_5__.IndexeddbService),
/* harmony export */   LocalStorageService: () => (/* reexport safe */ _common_local_storage_service__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService),
/* harmony export */   ProgressbarService: () => (/* reexport safe */ _common_progressbar_service__WEBPACK_IMPORTED_MODULE_2__.ProgressbarService),
/* harmony export */   SnackBarService: () => (/* reexport safe */ _common_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackBarService),
/* harmony export */   ThemeService: () => (/* reexport safe */ _common_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)
/* harmony export */ });
/* harmony import */ var _common_helper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/helper.service */ 7992);
/* harmony import */ var _common_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/snackbar.service */ 9203);
/* harmony import */ var _common_progressbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/progressbar.service */ 7972);
/* harmony import */ var _common_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/theme.service */ 17);
/* harmony import */ var _common_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/local-storage.service */ 6663);
/* harmony import */ var _common_indexeddb_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/indexeddb.service */ 123);
/* harmony import */ var _api_hadith_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/hadith.service */ 6007);






// Api services


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  title: 'মুসলিম বাংলা',
  baseUrl: 'http://localhost:4200/',
  apiUrl: 'http://localhost:4200',
  // apiUrl: 'http://localhost:3000/',
  quizApiUrl: 'https://api.topofstacksoftware.com/quiz-api/',
  quranHadithApiUrl: 'https://api.topofstacksoftware.com/quran-hadith/api/',
  hadithApiUrl: 'https://api.topofstacksoftware.com/hadith/api/v2/',
  hadithDownloadUrl: 'https://api.topofstacksoftware.com/hadith/api/download/',
  promoApiUrl: 'https://api.topofstacksoftware.com/ad-management-api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app.module */ 635);


// import { environment } from '@environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map