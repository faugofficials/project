from django.contrib import admin
from .models import Account,Customer,ResidentialAddress,Official_Address,BankDetails
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin 

class InLineLesson0(admin.StackedInline):
    model = Customer
class InLineLesson1(admin.StackedInline):
    model = ResidentialAddress
class InLineLesson2(admin.StackedInline):
    model = Official_Address
class InLineLesson3(admin.StackedInline):
    model = BankDetails


class AccountAdmin(UserAdmin):
    inlines = [InLineLesson0,InLineLesson1,InLineLesson2,InLineLesson3]
    list_display=('email','username','date_joined','last_login','is_admin','is_staff')
    search_fields = ('username','firstname')
    readonly_fields = ('date_joined','last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()




#class InLineLesson3(admin.TabularInline):
 #   model = BankDetails

#class CourseAdmin(admin.ModelAdmin):
 #   inlines = [InLineLesson0,InLineLesson1,InLineLesson2,InLineLesson3]
  #  list_display=('username','email','firstname','lastname')
   # list_display_links = ('username','email')
    #list_editable = ('firstname','lastname' )
    #list_filter = ('firstname','email')
    #search_fields = ('username','firstname')

   #fieldsets = (
    #    (None, {
     #       "fields": (
      ##         'username', 
        #        'password',
         #       'firstname',
          ##     'is_admin',
            #    'is_active',
             #   'is_staff',
              #  'is_superuser',
                
                
      #      ),
     #   }),
    #)




admin.site.register(Account,AccountAdmin)
admin.site.unregister(Group)
admin.site.register(Customer)
admin.site.register(ResidentialAddress)
admin.site.register(Official_Address)
admin.site.register(BankDetails)

