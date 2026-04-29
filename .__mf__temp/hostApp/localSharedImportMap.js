
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "lit": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit__prebuild__.js");
            return pkg;
        }
      ,
        "lit/async-directive.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_async_mf_2_directive_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/custom-element.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_custom_mf_2_element_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/event-options.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_event_mf_2_options_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/property.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_property_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/query-all.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_query_mf_2_all_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/query-assigned-elements.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_query_mf_2_assigned_mf_2_elements_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/query-assigned-nodes.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_query_mf_2_assigned_mf_2_nodes_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/query-async.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_query_mf_2_async_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/query.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_query_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/decorators/state.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_decorators_mf_1_state_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directive-helpers.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directive_mf_2_helpers_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directive.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directive_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/async-append.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_async_mf_2_append_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/async-replace.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_async_mf_2_replace_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/cache.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_cache_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/choose.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_choose_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/class-map.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_class_mf_2_map_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/guard.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_guard_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/if-defined.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_if_mf_2_defined_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/join.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_join_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/keyed.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_keyed_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/live.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_live_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/map.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_map_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/range.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_range_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/ref.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_ref_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/repeat.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_repeat_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/style-map.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_style_mf_2_map_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/template-content.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_template_mf_2_content_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/unsafe-html.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_unsafe_mf_2_html_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/unsafe-mathml.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_unsafe_mf_2_mathml_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/unsafe-svg.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_unsafe_mf_2_svg_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/until.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_until_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/directives/when.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_directives_mf_1_when_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/html.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_html_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/polyfill-support.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_polyfill_mf_2_support_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "lit/static-html.js": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__hostApp__prebuild__lit_mf_1_static_mf_2_html_mf_3_js__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "lit": {
            name: "lit",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit"}' must be provided by host`);
              }
              usedShared["lit"].loaded = true
              const {"lit": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/async-directive.js": {
            name: "lit/async-directive.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/async-directive.js"}' must be provided by host`);
              }
              usedShared["lit/async-directive.js"].loaded = true
              const {"lit/async-directive.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/async-directive.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators.js": {
            name: "lit/decorators.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators.js"}' must be provided by host`);
              }
              usedShared["lit/decorators.js"].loaded = true
              const {"lit/decorators.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/custom-element.js": {
            name: "lit/decorators/custom-element.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/custom-element.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/custom-element.js"].loaded = true
              const {"lit/decorators/custom-element.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/custom-element.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/event-options.js": {
            name: "lit/decorators/event-options.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/event-options.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/event-options.js"].loaded = true
              const {"lit/decorators/event-options.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/event-options.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/property.js": {
            name: "lit/decorators/property.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/property.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/property.js"].loaded = true
              const {"lit/decorators/property.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/property.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/query-all.js": {
            name: "lit/decorators/query-all.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/query-all.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/query-all.js"].loaded = true
              const {"lit/decorators/query-all.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/query-all.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/query-assigned-elements.js": {
            name: "lit/decorators/query-assigned-elements.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/query-assigned-elements.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/query-assigned-elements.js"].loaded = true
              const {"lit/decorators/query-assigned-elements.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/query-assigned-elements.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/query-assigned-nodes.js": {
            name: "lit/decorators/query-assigned-nodes.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/query-assigned-nodes.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/query-assigned-nodes.js"].loaded = true
              const {"lit/decorators/query-assigned-nodes.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/query-assigned-nodes.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/query-async.js": {
            name: "lit/decorators/query-async.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/query-async.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/query-async.js"].loaded = true
              const {"lit/decorators/query-async.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/query-async.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/query.js": {
            name: "lit/decorators/query.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/query.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/query.js"].loaded = true
              const {"lit/decorators/query.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/query.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/decorators/state.js": {
            name: "lit/decorators/state.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/decorators/state.js"}' must be provided by host`);
              }
              usedShared["lit/decorators/state.js"].loaded = true
              const {"lit/decorators/state.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/decorators/state.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directive-helpers.js": {
            name: "lit/directive-helpers.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directive-helpers.js"}' must be provided by host`);
              }
              usedShared["lit/directive-helpers.js"].loaded = true
              const {"lit/directive-helpers.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directive-helpers.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directive.js": {
            name: "lit/directive.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directive.js"}' must be provided by host`);
              }
              usedShared["lit/directive.js"].loaded = true
              const {"lit/directive.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directive.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/async-append.js": {
            name: "lit/directives/async-append.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/async-append.js"}' must be provided by host`);
              }
              usedShared["lit/directives/async-append.js"].loaded = true
              const {"lit/directives/async-append.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/async-append.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/async-replace.js": {
            name: "lit/directives/async-replace.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/async-replace.js"}' must be provided by host`);
              }
              usedShared["lit/directives/async-replace.js"].loaded = true
              const {"lit/directives/async-replace.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/async-replace.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/cache.js": {
            name: "lit/directives/cache.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/cache.js"}' must be provided by host`);
              }
              usedShared["lit/directives/cache.js"].loaded = true
              const {"lit/directives/cache.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/cache.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/choose.js": {
            name: "lit/directives/choose.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/choose.js"}' must be provided by host`);
              }
              usedShared["lit/directives/choose.js"].loaded = true
              const {"lit/directives/choose.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/choose.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/class-map.js": {
            name: "lit/directives/class-map.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/class-map.js"}' must be provided by host`);
              }
              usedShared["lit/directives/class-map.js"].loaded = true
              const {"lit/directives/class-map.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/class-map.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/guard.js": {
            name: "lit/directives/guard.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/guard.js"}' must be provided by host`);
              }
              usedShared["lit/directives/guard.js"].loaded = true
              const {"lit/directives/guard.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/guard.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/if-defined.js": {
            name: "lit/directives/if-defined.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/if-defined.js"}' must be provided by host`);
              }
              usedShared["lit/directives/if-defined.js"].loaded = true
              const {"lit/directives/if-defined.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/if-defined.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/join.js": {
            name: "lit/directives/join.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/join.js"}' must be provided by host`);
              }
              usedShared["lit/directives/join.js"].loaded = true
              const {"lit/directives/join.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/join.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/keyed.js": {
            name: "lit/directives/keyed.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/keyed.js"}' must be provided by host`);
              }
              usedShared["lit/directives/keyed.js"].loaded = true
              const {"lit/directives/keyed.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/keyed.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/live.js": {
            name: "lit/directives/live.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/live.js"}' must be provided by host`);
              }
              usedShared["lit/directives/live.js"].loaded = true
              const {"lit/directives/live.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/live.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/map.js": {
            name: "lit/directives/map.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/map.js"}' must be provided by host`);
              }
              usedShared["lit/directives/map.js"].loaded = true
              const {"lit/directives/map.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/map.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/range.js": {
            name: "lit/directives/range.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/range.js"}' must be provided by host`);
              }
              usedShared["lit/directives/range.js"].loaded = true
              const {"lit/directives/range.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/range.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/ref.js": {
            name: "lit/directives/ref.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/ref.js"}' must be provided by host`);
              }
              usedShared["lit/directives/ref.js"].loaded = true
              const {"lit/directives/ref.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/ref.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/repeat.js": {
            name: "lit/directives/repeat.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/repeat.js"}' must be provided by host`);
              }
              usedShared["lit/directives/repeat.js"].loaded = true
              const {"lit/directives/repeat.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/repeat.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/style-map.js": {
            name: "lit/directives/style-map.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/style-map.js"}' must be provided by host`);
              }
              usedShared["lit/directives/style-map.js"].loaded = true
              const {"lit/directives/style-map.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/style-map.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/template-content.js": {
            name: "lit/directives/template-content.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/template-content.js"}' must be provided by host`);
              }
              usedShared["lit/directives/template-content.js"].loaded = true
              const {"lit/directives/template-content.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/template-content.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/unsafe-html.js": {
            name: "lit/directives/unsafe-html.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/unsafe-html.js"}' must be provided by host`);
              }
              usedShared["lit/directives/unsafe-html.js"].loaded = true
              const {"lit/directives/unsafe-html.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/unsafe-html.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/unsafe-mathml.js": {
            name: "lit/directives/unsafe-mathml.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/unsafe-mathml.js"}' must be provided by host`);
              }
              usedShared["lit/directives/unsafe-mathml.js"].loaded = true
              const {"lit/directives/unsafe-mathml.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/unsafe-mathml.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/unsafe-svg.js": {
            name: "lit/directives/unsafe-svg.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/unsafe-svg.js"}' must be provided by host`);
              }
              usedShared["lit/directives/unsafe-svg.js"].loaded = true
              const {"lit/directives/unsafe-svg.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/unsafe-svg.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/until.js": {
            name: "lit/directives/until.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/until.js"}' must be provided by host`);
              }
              usedShared["lit/directives/until.js"].loaded = true
              const {"lit/directives/until.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/until.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/directives/when.js": {
            name: "lit/directives/when.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/directives/when.js"}' must be provided by host`);
              }
              usedShared["lit/directives/when.js"].loaded = true
              const {"lit/directives/when.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/directives/when.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/html.js": {
            name: "lit/html.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/html.js"}' must be provided by host`);
              }
              usedShared["lit/html.js"].loaded = true
              const {"lit/html.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/html.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/polyfill-support.js": {
            name: "lit/polyfill-support.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/polyfill-support.js"}' must be provided by host`);
              }
              usedShared["lit/polyfill-support.js"].loaded = true
              const {"lit/polyfill-support.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/polyfill-support.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        ,
          "lit/static-html.js": {
            name: "lit/static-html.js",
            version: "3.3.2",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__hostApp",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"lit/static-html.js"}' must be provided by host`);
              }
              usedShared["lit/static-html.js"].loaded = true
              const {"lit/static-html.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "lit/static-html.js" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.3.2",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "litExpose",
                  name: "litExpose",
                  type: "module",
                  entry: "http://localhost:4173/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      