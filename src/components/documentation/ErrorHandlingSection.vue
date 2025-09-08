<template>
  <section v-show="isActive" id="error-handling" class="mb-16">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Error Handling</h1>
      <p class="text-lg text-gray-600">HTTP status codes and error responses</p>
    </div>

    <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div class="bg-gradient-to-r from-red-600 to-rose-600 px-8 py-6">
        <h2 class="text-2xl font-bold text-white mb-2">Error Handling</h2>
        <p class="text-red-100">HTTP status codes and error responses</p>
      </div>
      
      <div class="p-8">
        <!-- Status Codes -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h3>
          <div class="grid gap-4">
            <div class="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="w-16 h-8 bg-green-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">200</div>
              <div>
                <div class="font-semibold text-gray-900">OK</div>
                <div class="text-sm text-gray-600">Request successful</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">400</div>
              <div>
                <div class="font-semibold text-gray-900">Bad Request</div>
                <div class="text-sm text-gray-600">Invalid parameters or malformed request</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">404</div>
              <div>
                <div class="font-semibold text-gray-900">Not Found</div>
                <div class="text-sm text-gray-600">Endpoint or resource not found</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div class="w-16 h-8 bg-yellow-500 text-white text-sm font-bold rounded flex items-center justify-center mr-4">429</div>
              <div>
                <div class="font-semibold text-gray-900">Too Many Requests</div>
                <div class="text-sm text-gray-600">Rate limit exceeded</div>
              </div>
            </div>
            
            <div class="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="w-16 h-8 bg-red-600 text-white text-sm font-bold rounded flex items-center justify-center mr-4">500</div>
              <div>
                <div class="font-semibold text-gray-900">Internal Server Error</div>
                <div class="text-sm text-gray-600">Server encountered an unexpected error</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Error Response Format -->
        <div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Error Response Format</h3>
          <div class="bg-gray-50 rounded-xl p-6">
            <div class="grid lg:grid-cols-2 gap-6">
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Error Response</h4>
                <div class="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div class="text-blue-400">{</div>
                  <div class="ml-2">
                    <div><span class="text-yellow-400">"status"</span>: <span class="text-red-300">"error"</span>,</div>
                    <div><span class="text-yellow-400">"error"</span>: {</div>
                    <div class="ml-2">
                      <div><span class="text-yellow-400">"code"</span>: <span class="text-orange-400">400</span>,</div>
                      <div><span class="text-yellow-400">"message"</span>: <span class="text-green-300">"Invalid page parameter"</span>,</div>
                      <div><span class="text-yellow-400">"details"</span>: <span class="text-green-300">"Page must be a positive integer"</span></div>
                    </div>
                    <div>}</div>
                  </div>
                  <div class="text-blue-400">}</div>
                </div>
              </div>
              
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">Error Fields</h4>
                <div class="space-y-3 text-sm">
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">status</code>
                    <span class="text-gray-600">Always "error" for error responses</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">code</code>
                    <span class="text-gray-600">HTTP status code</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">message</code>
                    <span class="text-gray-600">Human-readable error message</span>
                  </div>
                  <div class="flex">
                    <code class="bg-white px-2 py-1 rounded text-blue-600 mr-3 font-mono">details</code>
                    <span class="text-gray-600">Additional error information</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  isActive: boolean
}

defineProps<Props>()
</script>