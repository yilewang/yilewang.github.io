/* ==========================================================================
   Tag filtering functionality for year-archive page
   ========================================================================== */

(function() {
  'use strict';
  
  function initTagFilter() {
    const tagButtons = document.querySelectorAll('.tag-filter-btn');
    const clearButton = document.getElementById('clear-filters');
    const activeFiltersEl = document.getElementById('active-filters');
    const postItems = document.querySelectorAll('.post-item');
    const yearHeaders = document.querySelectorAll('.year-header');
    let selectedTags = new Set();

    function updateActiveFilters() {
      if (!activeFiltersEl) return;
      if (selectedTags.size === 0) {
        activeFiltersEl.textContent = '';
      } else {
        activeFiltersEl.textContent = 'Active filters: ' + Array.from(selectedTags).join(', ');
      }
    }

    function filterPosts() {
      if (!postItems || postItems.length === 0) return;
      
      postItems.forEach(function(post) {
        const tagsAttr = post.getAttribute('data-tags');
        if (!tagsAttr || tagsAttr.trim() === '') {
          post.style.display = selectedTags.size === 0 ? '' : 'none';
          return;
        }
        
        const postTags = tagsAttr.trim().split(/\s+/).filter(function(t) { return t.length > 0; });
        const hasAllTags = selectedTags.size === 0 || Array.from(selectedTags).every(function(tag) {
          return postTags.indexOf(tag) !== -1;
        });
        
        if (hasAllTags) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });

      // Hide year headers if no posts are visible in that year
      if (yearHeaders && yearHeaders.length > 0) {
        yearHeaders.forEach(function(header) {
          const year = header.getAttribute('data-year');
          let hasVisiblePosts = false;
          
          // Find the next sibling post items after this header
          let current = header.nextElementSibling;
          while (current) {
            if (current.classList && current.classList.contains('post-item')) {
              if (current.style.display !== 'none') {
                hasVisiblePosts = true;
                break;
              }
            } else if (current.classList && current.classList.contains('year-header')) {
              break;
            }
            current = current.nextElementSibling;
          }
          
          if (!hasVisiblePosts && selectedTags.size > 0) {
            header.style.display = 'none';
          } else {
            header.style.display = '';
          }
        });
      }
    }

    if (tagButtons && tagButtons.length > 0) {
      tagButtons.forEach(function(btn) {
        if (btn.id !== 'clear-filters') {
          btn.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            
            if (selectedTags.has(tag)) {
              selectedTags.delete(tag);
              this.classList.remove('active');
            } else {
              selectedTags.add(tag);
              this.classList.add('active');
            }
            
            updateActiveFilters();
            filterPosts();
          });
        }
      });
    }

    if (clearButton) {
      clearButton.addEventListener('click', function() {
        selectedTags.clear();
        if (tagButtons && tagButtons.length > 0) {
          tagButtons.forEach(function(btn) {
            btn.classList.remove('active');
          });
        }
        updateActiveFilters();
        filterPosts();
      });
    }
  }
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTagFilter);
  } else {
    initTagFilter();
  }
})();
